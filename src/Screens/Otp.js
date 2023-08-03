import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
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
import {logowithlogin} from '../utils/Const';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Routes from '../Navigation/Routes';

export default function Otp({navigation}) {
  const [isOTP, setIsOTP] = useState('');

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
              We've send an OTP to your mobile number +91 7393******
            </Text>

            <View style={{marginHorizontal: 40, marginTop: 20}}>
              <OTPInputView
                style={{height: heightPixel(70)}}
                pinCount={4}
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
                title={'Verify Now'}
                onPress={() => navigation.navigate(Routes.REGISTRATION_SCREEN)}
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
