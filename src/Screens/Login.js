import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {fontPixel, heightPixel, widthPixel} from '../Components/Dimensions';
import {COLORS} from '../utils/Colors';
import Button from '../Components/Button';
import {facebook, footertext, google, logowithlogin} from '../utils/Const';
import Routes from '../Navigation/Routes';

export default function Login({navigation}) {
  const [phoneNo, setPhoneNo] = useState('');
  const [errorMobileNumber, setErrorMobileNumber] = useState(null);

  const _validateMobileNumber = mobileNo => {
    console.log('mobileNo', mobileNo);
    var mobileNoRegex = /^[6-9]{1}[0-9]{9}$/;
    if (mobileNo == '' || mobileNo == undefined || mobileNo == null) {
      setErrorMobileNumber('Please enter mobile number.');
    } else if (!mobileNoRegex.test(mobileNo)) {
      setErrorMobileNumber('Please Enter valid mobile number..');
    } else {
      setErrorMobileNumber(null);
    }
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
            <TextInput
              placeholder="Please Enter Phone Number"
              keyboardType="number-pad"
              maxLength={10}
              placeholderTextColor={COLORS.GRAYDARK}
              style={Styles.INPUT}
              onChangeText={text => {
                setPhoneNo(text), _validateMobileNumber(text);
              }}
            />
            {errorMobileNumber != null ? (
              <Text style={Styles.Errortext}>{errorMobileNumber}</Text>
            ) : null}
            <Button
              title={'Log In'}
              onPress={() => navigation.navigate(Routes.OTP_SCREEN)}
            />
            <Text style={Styles.WITHSTY}>or login with</Text>
            <View style={Styles.FGBOX}>
              <Image source={google} style={Styles.LOGGFSTY} />
              <Image source={facebook} style={Styles.LOGGFSTY} />
            </View>
            <View style={Styles.FMAINBOX}>
              <Text style={Styles.FTEXT}>{footertext}</Text>
              <TouchableOpacity activeOpacity={0.6}>
                <Text style={Styles.FTEXT2}>Terms & Conditions</Text>
              </TouchableOpacity>
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
  INPUT: {
    borderWidth: 1,
    marginVertical: heightPixel(40),
    marginHorizontal: 10,
    height: heightPixel(55),
    paddingHorizontal: 15,
    color: COLORS.BLACK,
  },
  LOGOSTY: {
    height: heightPixel(200),
    width: widthPixel(300),
    resizeMode: 'contain',
    top: -heightPixel(40),
  },
  WITHSTY: {
    color: COLORS.GRAYDARK,
    alignSelf: 'center',
    top: heightPixel(15),
  },
  FGBOX: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 40,
  },
  LOGGFSTY: {height: 40, width: 40, resizeMode: 'contain'},
  FMAINBOX: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: heightPixel(100),
  },
  FTEXT: {color: COLORS.BLACK, fontSize: fontPixel(14)},
  FTEXT2: {
    color: COLORS.PURPLE,
    textDecorationLine: 'underline',
    fontSize: fontPixel(14),
  },
  Errortext: {
    color: 'red',
    fontSize: 12,
    top: heightPixel(-30),
    paddingHorizontal: 10,
  },
});
