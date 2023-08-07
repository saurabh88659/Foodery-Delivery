import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS} from '../utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {CustomStatusBar, logowithlogin} from '../utils/Const';
import {heightPixel, widthPixel} from '../Components/Dimensions';
import Routes from '../Navigation/Routes';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(Routes.LOG_IN_SCREEN);
    }, 2000);
  }, []);

  const _Handle_Splash_SCREEN = () => {};

  return (
    <SafeAreaView style={Styles.CONTAINERMAIN}>
      <CustomStatusBar />
      <LinearGradient
        colors={[COLORS.PURPLE, COLORS.PINK]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{flex: 1}}>
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Image
            source={logowithlogin}
            style={{height: heightPixel(200), width: widthPixel(300)}}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  CONTAINERMAIN: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
});
