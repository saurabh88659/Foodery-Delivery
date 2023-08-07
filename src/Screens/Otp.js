import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  fontPixel,
  heightPixel,
  pixelSizeVertical,
  widthPixel,
} from '../Components/Dimensions';
import {COLORS} from '../utils/Colors';
import Button from '../Components/Button';
import {BASE_URL, SimpleToast, logowithlogin} from '../utils/Const';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Routes from '../Navigation/Routes';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Otp({navigation, route}) {
  const [isOTP, setIsOTP] = useState('');
  const phoneNumber = route.params;
  const fNumber = phoneNumber.split('', 6);
  const [state, setState] = useState({
    isLoading: false,
  });

  const _HandleOTP = async () => {
    // const fcmToken = await AsyncStorage.getItem('fcmToken');
    // console.log('FCM TOKEN--------->>>>>', fcmToken);

    setState({
      ...state,
      isLoading: true,
    });

    let otpdata = {
      mobileNumber: phoneNumber,
      otp: isOTP,
      deviceToken: '123456789',
    };
    axios
      .post(BASE_URL + `/verifyOTPDeliveryApp`, otpdata, {})
      .then(async response => {
        setState({
          ...state,
          isLoading: false,
        });

        await AsyncStorage.setItem('token', response?.data?.token);
        await AsyncStorage.setItem(
          'refreshToken',
          response?.data?.refreshToken,
        );
        await AsyncStorage.setItem(
          'deliveryBoy_id',
          response?.data?.deliveryBoy_id,
        );
        SimpleToast({title: response?.data?.message, isLong: true});
        axios
          .get(BASE_URL + `/getMyProfileDeliveryBoy`, {
            headers: {
              Authorization: `Bearer ${response.data.token}`,
            },
          })
          .then(res => {
            if (res.data.result.firstName && res?.data?.result.email) {
              navigation.navigate(Routes.HOME_SCREEN);
            } else {
              navigation.navigate(Routes.REGISTRATION_SCREEN, phoneNumber);
            }
          })
          .catch(error => {
            console.log('profile catch erro------->>', error);
          });
      })
      .catch(error => {
        SimpleToast({title: error?.response?.data?.message, isLong: true});
        console.log('otp catch error--->>>', error);
        setState({
          ...state,
          isLoading: false,
        });
      });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={Styles.CONTAINERMAIN}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[COLORS.PURPLE, COLORS.PINK]}
          style={Styles.linearGradient}>
          <Image source={logowithlogin} style={Styles.LOGOSTY} />
        </LinearGradient>
        <View style={Styles.MAICONTQ}>
          <View style={Styles.BOXMAINCON}>
            <Text style={Styles.HEADERTEXT}>Enter OTP</Text>
            <Text style={Styles.HEADERTEXTONE}>
              We've send an OTP to your mobile number{`\n`} +91 {fNumber} ****
            </Text>

            <View style={{marginHorizontal: 10, marginTop: 20}}>
              <OTPInputView
                style={{height: heightPixel(70)}}
                pinCount={6}
                autoFocusOnLoad={false}
                codeInputFieldStyle={Styles.underlineStyleBase}
                codeInputHighlightStyle={Styles.underlineStyleHighLighted}
                onCodeFilled={tex => {
                  setIsOTP(tex);
                }}
              />
            </View>
            <View style={{marginTop: heightPixel(40)}}>
              <Button
                title={
                  state.isLoading ? (
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <ActivityIndicator color={COLORS.LIGHTGREEN} />
                      <Text
                        style={{
                          color: COLORS.WHITE,
                          fontSize: fontPixel(15),
                          paddingLeft: 5,
                        }}>
                        Please wait....
                      </Text>
                    </View>
                  ) : (
                    'Verify Now'
                  )
                }
                onPress={_HandleOTP}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const Styles = StyleSheet.create({
  CONTAINERMAIN: {
    flex: 1,
  },
  linearGradient: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: fontPixel(50),
  },
  MAICONTQ: {
    flex: 0.5,
    backgroundColor: COLORS.WHITE,
  },
  BOXMAINCON: {
    height: 400,
    marginHorizontal: 20,
    elevation: 4,
    top: heightPixel(-100),
    backgroundColor: COLORS.WHITE,
    borderRadius: 6,
  },

  LOGOSTY: {
    height: heightPixel(200),
    width: widthPixel(300),
    resizeMode: 'contain',
    top: -heightPixel(40),
  },
  HEADERTEXT: {
    fontSize: fontPixel(30),
    fontWeight: '500',
    color: COLORS.BLACK,
    alignSelf: 'center',
    marginTop: pixelSizeVertical(60),
  },
  HEADERTEXTONE: {
    fontWeight: '500',
    color: COLORS.GRAYDARK,
    alignSelf: 'center',
    marginTop: 5,
    textAlign: 'center',
  },
  underlineStyleBase: {
    height: 48,
    width: 50,
    borderRadius: 4,
    color: COLORS.BLACK,
    fontSize: 17,
    backgroundColor: '#F7F6F4',
    borderColor: COLORS.GRAY,
    elevation: 2,
  },

  underlineStyleHighLighted: {
    borderColor: COLORS.ORANGE,
  },
});
