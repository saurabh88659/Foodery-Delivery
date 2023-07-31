import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../utils/Colors';
import MyHeader from '../Components/MyHeader';
import {fontPixel, heightPixel, widthPixel} from '../Components/Dimensions';
import Button from '../Components/Button';
import ImagePicker from 'react-native-image-crop-picker';
import Routes from '../Navigation/Routes';

export default function VerificationSelfie({navigation}) {
  const [state, setState] = useState({
    profileImg: null,
    isLoading: false,
  });

  const onGallary = () => {
    ImagePicker.openPicker({
      cropping: true,
      quality: 1,
      mediaType: 'any',
    })
      .then(image => {
        if (image) {
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
        // SimpleToast({title: 'User cancelled image selection', isLong: true});
      });
  };

  return (
    <SafeAreaView style={Styles.CONTAINER}>
      <MyHeader onPress={() => navigation.goBack()} title={'Verification'} />
      <View style={{alignItems: 'center', marginTop: 15}}>
        <Text style={Styles.HeadersText}>
          Please verify yourself throught selfie
        </Text>
      </View>
      <View style={Styles.box}>
        <View style={Styles.circle}></View>
      </View>
      <View style={{justifyContent: 'flex-end', flex: 1, marginBottom: 20}}>
        <Button
          title={'Click your picture'}
          onPress={() => navigation.navigate(Routes.VERIFICATION_THANKS)}
          //   onPress={onGallary}
        />
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
    width: widthPixel(240),
    borderWidth: 1,
    borderRadius: 260 / 2,
  },
});
