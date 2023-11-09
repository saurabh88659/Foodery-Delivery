import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {
  fontPixel,
  heightPixel,
  pixelSizeVertical,
  widthPixel,
} from '../Components/Dimensions';
import {
  FontAwesome,
  FontAwesome6s,
  Ionicon,
  MaterialIcon,
  SimpleToast,
} from '../utils/Const';
import Button from '../Components/Button';
import {_getStorage} from '../utils/Storage';
import {
  _getProfile,
  _getUploadProfilePic,
} from '../utils/Controllers/EpicControllers';
import ImagePicker from 'react-native-image-crop-picker';
import {BottomSheet} from 'react-native-btr';
import moment from 'moment';

export default function EditProfile({navigation}) {
  const [visible, setVisible] = useState(false);
  const [isProfile, setIsProfile] = useState('');
  const [isName, setIsName] = useState('');
  const [isbirth, setIsbirth] = useState('');
  // const [isLenmark, setIsLenmark] = useState('');
  const [iState, setIsState] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [isState, seIstState] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [state, setState] = useState({
    profileImg: null,
  });

  useEffect(() => {
    _ProfileData();
  }, []);

  const TakePhotoFromCamera = () => {
    ImagePicker.openCamera({
      cropping: true,
      width: 300,
      height: 400,
    }).then(image => {
      console.log('hey', image.path);
      if (image) {
        setVisible(false);
        setState({
          ...state,
          profileImg: image,
        });
      } else {
        console.log('Please selected Image');
      }
    });
  };

  const ChoosePhotoFromGalery = () => {
    ImagePicker.openPicker({
      cropping: true,
      width: 300,
      height: 400,
    }).then(image => {
      console.log('hey', image.path);
      if (image) {
        setVisible(false);
        setState({
          ...state,
          profileImg: image,
        });
      } else {
        console.log('Please selected Image');
      }
    });
  };

  const UploadProfilePic = async () => {
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
    const result = await _getUploadProfilePic(formData);

    if (result?.data) {
      console.log('UPLOAD Profile Pic', result?.data?.message);
      SimpleToast({title: result?.data?.message, isLong: true});
      setState({...state, profileImg: null});
      setState({
        ...state,
        isLoading: false,
      });
    } else {
      console.log('catch error update profile pic', result?.data);
      SimpleToast({title: 'Server Error:', isLong: true});
      setState({...state, profileImg: null});
      setState({
        ...state,
        isLoading: false,
      });
    }
  };

  const _ProfileData = async () => {
    setIsLoading(true);
    const result = await _getProfile();
    if (result?.data) {
      setAddress(result?.data?.result?.currentAddress.address);
      setCity(result?.data?.result?.currentAddress?.city);
      seIstState(result?.data?.result?.currentAddress?.state);
      setIsName(result?.data?.result?.firstName);
      setIsProfile(result?.data?.result);
      setIsbirth(moment(result?.data?.result?.DOB).format('DD/MM/YYYY'));
      setIsState(result?.data?.result);
      setIsLoading(false);
    } else {
      console.log('Profile catch error', result?.data);
      setIsLoading(false);
    }
  };

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };

  return (
    <SafeAreaView style={Styles.CONTAINERMAIN}>
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" color={COLORS.PINK} />
        </View>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: heightPixel(30)}}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={[COLORS.PURPLE, COLORS.PINK]}
            style={Styles.linearGradient}>
            <View style={{}}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                activeOpacity={0.6}
                style={Styles.BACKICONSTYL}>
                <Ionicon
                  title="arrow-back-outline"
                  size={30}
                  IconColor={COLORS.WHITE}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={toggleBottomNavigationView}
                style={[Styles.IMAGEBOX, {position: 'absolute'}]}>
                {/* <Image
                source={{uri: isProfile?.verification?.selfie2}}
                style={Styles.IMAGE}
              /> */}
                {state.profileImg || isProfile?.verification?.selfie1 ? (
                  <Image
                    source={
                      state.profileImg
                        ? {uri: state.profileImg?.path}
                        : {uri: isProfile?.verification?.selfie1}
                    }
                    style={Styles.IMAGE}
                  />
                ) : null}
              </TouchableOpacity>
            </View>
          </LinearGradient>

          <View style={Styles.sectionStyle}>
            <FontAwesome title="user" size={25} IconColor={COLORS.PINK} />
            <TextInput
              style={Styles.input}
              placeholder="Enter Name"
              placeholderTextColor="#888888"
              value={isName}
              onChangeText={text => setIsName(text)}
              editable={false}
            />
          </View>
          <View
            style={[Styles.sectionStyle, {marginTop: pixelSizeVertical(20)}]}>
            <MaterialIcon title="redeem" size={25} IconColor={COLORS.PINK} />
            <TextInput
              style={Styles.input}
              placeholder="Please Enter Date Of Birth"
              placeholderTextColor="#888888"
              value={isbirth}
              onChangeText={text => setIsbirth(text)}
              editable={false}
            />
          </View>
          <View
            style={[Styles.sectionStyle, {marginTop: pixelSizeVertical(20)}]}>
            <MaterialIcon title="domain" size={25} IconColor={COLORS.PINK} />
            <TextInput
              style={Styles.input}
              placeholder="Enter City"
              placeholderTextColor="#888888"
              value={city}
              onChangeText={text => setCity(text)}
              editable={false}
            />
          </View>
          <View
            style={[Styles.sectionStyle, {marginTop: pixelSizeVertical(20)}]}>
            <FontAwesome6s
              title="map-location-dot"
              size={25}
              IconColor={COLORS.PINK}
            />
            <TextInput
              style={Styles.input}
              placeholder="Please Enter Address"
              placeholderTextColor="#888888"
              value={address}
              onChangeText={text => setAddress(text)}
              editable={false}
            />
          </View>
          <View
            style={[Styles.sectionStyle, {marginTop: pixelSizeVertical(20)}]}>
            <MaterialIcon
              title="location-city"
              size={25}
              IconColor={COLORS.PINK}
            />
            <TextInput
              style={Styles.input}
              placeholder="Please Enter State"
              placeholderTextColor="#888888"
              value={isState}
              onChangeText={text => seIstState(text)}
              editable={false}
            />
          </View>
          <View style={{marginVertical: heightPixel(30)}}>
            <Button title={'Save Changes'} onPress={UploadProfilePic} />
          </View>
        </ScrollView>
      )}

      <BottomSheet
        visible={visible}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}>
        <View style={Styles.bottomNavigationView}>
          <View style={{marginTop: 60}}>
            <TouchableOpacity
              onPress={TakePhotoFromCamera}
              style={{
                paddingVertical: 15,
                backgroundColor: COLORS.PINK,
                alignItems: 'center',
                marginHorizontal: 20,
                borderRadius: 4,
              }}>
              <Text
                style={{color: COLORS.WHITE, fontWeight: '500', fontSize: 17}}>
                Take Photo
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={ChoosePhotoFromGalery}
              style={{
                paddingVertical: 15,
                backgroundColor: COLORS.PINK,
                alignItems: 'center',
                marginHorizontal: 20,
                borderRadius: 4,
                marginTop: 20,
              }}>
              <Text
                style={{color: COLORS.WHITE, fontWeight: '500', fontSize: 17}}>
                Choose From Gellery
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setVisible(!visible)}
              style={{
                paddingVertical: 15,
                backgroundColor: COLORS.PINK,
                alignItems: 'center',
                marginHorizontal: 20,
                borderRadius: 4,
                marginTop: 20,
              }}>
              <Text
                style={{color: COLORS.WHITE, fontWeight: '500', fontSize: 17}}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  CONTAINERMAIN: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  linearGradient: {
    paddingVertical: 20,
    height: heightPixel(200),
  },
  IMAGEBOX: {
    height: 130,
    width: 130,
    borderWidth: 4,
    top: heightPixel(70),
    borderRadius: 130 / 2,
    borderColor: COLORS.PINK,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  IMAGE: {
    height: 122,
    width: 122,
    resizeMode: 'contain',
    borderRadius: 130 / 2,
    backgroundColor: COLORS.PINK,
  },
  QBOXONE: {
    marginTop: pixelSizeVertical(100),
    paddingHorizontal: 20,
  },
  QTEXTONE: {
    fontSize: fontPixel(18),
    color: COLORS.BLACK,
    paddingLeft: widthPixel(25),
    fontWeight: '500',
  },
  BACKICONSTYL: {
    top: heightPixel(55),
    justifyContent: 'center',
    alignItems: 'cenetr',
    marginHorizontal: 20,
    width: 70,
  },
  sectionStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    marginHorizontal: 15,
    borderRadius: 5,
    marginTop: pixelSizeVertical(100),
    paddingHorizontal: 20,
    // elevation: 1,
    borderWidth: 1,
    borderColor: COLORS.PINK,
  },
  input: {
    // height: 40,
    color: COLORS.BLACK,
    fontSize: 15,
    paddingHorizontal: 20,
    width: widthPixel(330),
  },
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: 280,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
