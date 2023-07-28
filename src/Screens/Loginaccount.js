import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {fontPixel, heightPixel, widthPixel} from '../Components/Dimensions';
import {COLORS} from '../utils/Colors';
import {accounttext, logowithlogin} from '../utils/Const';
import Button from '../Components/Button';
// import Routes from '../Navigation/Routes';

export default function Loginaccount({navigation}) {
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
            <Text style={Styles.HEADERTEXT}>Login Your Account</Text>
            <Text style={Styles.SUBTEXT}>
              {accounttext} KickrTech7739@gmail.com
            </Text>
            <View style={Styles.BOXMAIN}>
              <Text style={Styles.MAINBOXTEXT}>Username</Text>
              <TextInput
                placeholder="Please Enter Your Name"
                placeholderTextColor={COLORS.GRAYDARK}
                style={Styles.INPUT}
              />
              <Text style={[Styles.MAINBOXTEXT, {marginTop: 15}]}>
                Password
              </Text>
              <TextInput
                placeholder="Password"
                placeholderTextColor={COLORS.GRAYDARK}
                style={Styles.INPUT}
              />
            </View>
            <View style={{marginVertical: heightPixel(50)}}>
              <Button
                title={'Login'}
                // onPress={() => navigation.navigate(Routes.LOGIN_ACCOUNT)}
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
    fontSize: fontPixel(20),
    alignSelf: 'center',
    color: COLORS.BLACK,
    top: heightPixel(20),
  },
  SUBTEXT: {
    fontSize: fontPixel(16),
    alignSelf: 'center',
    color: COLORS.GRAYDARK,
    top: heightPixel(30),
    textAlign: 'center',
    fontWeight: '500',
  },
  BOXMAIN: {
    marginTop: heightPixel(50),
    marginHorizontal: 20,
  },
  MAINBOXTEXT: {
    color: COLORS.BLACK,
    fontSize: fontPixel(16),
    fontWeight: '500',
  },
  INPUT: {
    borderWidth: 1,
    paddingHorizontal: 15,
    height: 45,
    borderRadius: 7,
    marginTop: 10,
    color: COLORS.BLACK,
  },
});
