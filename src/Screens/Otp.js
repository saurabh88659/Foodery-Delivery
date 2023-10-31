import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import {requestUserPermission} from '../utils/Handler/FirebaseMessagingNoti';
import {_getProfile, _postphone} from '../utils/Controllers/EpicControllers';

export default function Otp({navigation, route}) {
  const phoneNumber = route.params;
  const [isOTP, setIsOTP] = useState('');
  const fNumber = phoneNumber.split('', 6);
  const [counter, setCounter] = React.useState(60);
  const [state, setState] = useState({
    isLoading: false,
  });

  useEffect(() => {
    requestUserPermission();
  }, []);

  const _HandleOTP = async () => {
    const fcmToken = await AsyncStorage.getItem('fcmToken');
    setState({
      ...state,
      isLoading: true,
    });

    let otpdata = {
      mobileNumber: phoneNumber,
      otp: isOTP,
      deviceToken: fcmToken,
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
        await AsyncStorage.setItem(
          'isNew',
          JSON.stringify(response?.data?.isNew),
        );
        const result = await _getProfile();

        if (response?.data?.isNew) {
          navigation.navigate(Routes.REGISTRATION_SCREEN_ONE, phoneNumber);
        } else {
          if (result?.data) {
            if (result?.data?.result?.status === 'pending') {
              navigation.replace(Routes.LOGIN_ACCOUNT);
            } else if (result?.data?.result?.status === 'accepted') {
              navigation.replace(Routes.BOTTOM_TAB_BAR);
            } else {
              navigation.navigate(Routes.REGISTRATION_SCREEN_ONE, phoneNumber);
            }
          } else {
            console.log(
              'profile catch error:',
              result?.response?.data?.message,
            );
          }
        }
      })
      .catch(error => {
        SimpleToast({title: error?.response?.data?.message, isLong: true});
        console.log('otp catch error--->>>', error?.response?.data?.message);
        setState({
          ...state,
          isLoading: false,
        });
      });
  };

  const resendsend = async () => {
    const dataPhone = {
      mobileNumber: phoneNumber,
    };
    const result = await _postphone(dataPhone);
    if (result?.data) {
      if (result?.data?.message == 'OTP Sent Successfully') {
        SimpleToast({title: ' resend OTP sent successfully', isLong: true});
        setCounter(60);
      } else {
        console.log('else condtion');
      }
      console.log('Login response', result?.data);
    } else {
      console.log('Login Catch error', result?.response?.data);
    }
  };
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

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

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: 'grey'}}>Time remaining</Text>
                <View>
                  {counter !== 0 ? (
                    <Text style={{color: 'black'}}>{counter}s</Text>
                  ) : (
                    <TouchableOpacity onPress={resendsend} style={{}}>
                      <Text style={{color: 'grey'}}>Resend code</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
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
