import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../utils/Colors';
import MyHeader from '../Components/MyHeader';
import {fontPixel, heightPixel, widthPixel} from '../Components/Dimensions';
import Button from '../Components/Button';
import ImagePicker from 'react-native-image-crop-picker';
import Routes from '../Navigation/Routes';
import {CustomStatusBar, Ionicon, SimpleToast} from '../utils/Const';
import {_putVerifyselfie} from '../utils/Controllers/EpicControllers';

export default function VerificationSelfie({navigation}) {
  const [state, setState] = useState({
    profileImg: null,
    isLoading: false,
  });

  const onGallary = () => {
    ImagePicker.openCamera({
      cropping: true,
      quality: 1,
      mediaType: 'any',
    })
      .then(image => {
        if (image) {
          _uploadimage(image);
          setState({
            ...state,
            profileImg: image,
          });
        } else {
          console.log('Please selected Image');
        }
      })
      .catch(err => {
        console.log('Img picker Error--->>>', err);
        SimpleToast({title: 'User cancelled image selection', isLong: true});
      });
  };

  const _uploadimage = async () => {
    SimpleToast({title: 'Please wait...', isLong: true});
    var imgName = state.profileImg?.path?.replace(/^.*[\\\/]/, '');
    let formData = new FormData();
    formData.append('image', {
      name: imgName,
      type: state.profileImg?.mime,
      uri:
        Platform.OS === 'android'
          ? state.profileImg?.path
          : state.profileImg?.path?.replace('file://', ''),
    });
    const result = await _putVerifyselfie(formData);
    if (result?.data) {
      console.log('upload image=====>>>>', result?.data?.message);
      SimpleToast({title: result?.data?.message, isLong: true});
      setTimeout(() => {
        navigation.navigate(Routes.VERIFICATION_THANKS);
      }, 3000);
    } else {
      console.log('upload image catch error', result?.response?.data?.message);
      // SimpleToast({title: result?.response?.data?.message, isLong: true});
    }
  };

  return (
    <SafeAreaView style={Styles.CONTAINER}>
      <CustomStatusBar />
      <MyHeader onPress={() => navigation.goBack()} title={'Verification'} />
      <View style={{alignItems: 'center', marginTop: 15}}>
        <Text style={Styles.HeadersText}>
          Please verify yourself throught selfie
        </Text>
      </View>
      <View style={Styles.box}>
        <TouchableOpacity
          onPress={onGallary}
          activeOpacity={0.6}
          style={Styles.circle}>
          {state.profileImg ? (
            <Image
              source={{uri: state.profileImg?.path}}
              style={Styles.IMAGE}
            />
          ) : (
            <View
              style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
              <Ionicon title="camera" size={80} IconColor={COLORS.GRAY} />
            </View>
          )}
        </TouchableOpacity>
      </View>
      <View style={{justifyContent: 'flex-end', flex: 1, marginBottom: 20}}>
        {state.profileImg?.path ? null : (
          <Button
            title={'Click your picture'}
            // onPress={() => navigation.navigate(Routes.VERIFICATION_THANKS)}

            onPress={onGallary}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  CONTAINER: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  HeadersText: {
    fontSize: fontPixel(30),
    textAlign: 'center',
    width: widthPixel(300),
    color: COLORS.BLACK,
    fontWeight: '500',
    letterSpacing: 0.6,
  },
  box: {
    borderWidth: 1,
    height: heightPixel(300),
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    height: heightPixel(240),
    width: widthPixel(220),
    borderWidth: 1,
    borderRadius: 240 / 2,
  },
  IMAGE: {
    height: heightPixel(240),
    width: widthPixel(220),
    borderWidth: 1,
    borderRadius: 240 / 2,
  },
});
