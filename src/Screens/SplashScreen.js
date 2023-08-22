import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {BASE_URL, CustomStatusBar, logowithlogin} from '../utils/Const';
import {fontPixel, heightPixel, widthPixel} from '../Components/Dimensions';
import Routes from '../Navigation/Routes';
import {_getStorage} from '../utils/Storage';
import {checkInternetConnection} from '../utils/Handler/InternetInfo';
import Lottie from 'lottie-react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SplashScreen({navigation}) {
  const [hasInternet, setHasInternet] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isloadData, setIsloadData] = useState(false);

  useEffect(() => {
    // setTimeout(() => {
    //   navigation.replace(Routes.LOG_IN_SCREEN);
    // }, 2000);
    _Handle_Splash_SCREEN();
  }, []);

  const _Handle_Splash_SCREEN = async () => {
    console.log('hey1');
    setIsloadData(true);
    const token = await _getStorage('token');
    checkInternetConnection().then(isInternet => {
      if (isInternet) {
        console.log('hey2');

        if (token) {
          axios
            .get(BASE_URL + `/getMyProfileDeliveryBoy`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then(resp => {
              console.log('response--------->>>>', resp.data);
              if (
                resp.data.result.firstName &&
                resp?.data?.result.email &&
                resp?.data?.result.bankName &&
                resp?.data?.result.ifscCode
              ) {
                navigation.navigate(Routes.LOG_IN_SCREEN);
                console.log('Splahs screen ======D===', resp?.data?.result);
                setIsloadData(false);
              } else {
                navigation.navigate(Routes.BOTTOM_TAB_BAR);
                console.log('Splahs screen =========', resp?.data?.result);
              }
            })

            .catch(async err => {
              if (err.response?.data) {
                if (err.response?.data?.message == 'You are not  user.!') {
                  navigation.replace(Routes.LOG_IN_SCREEN);
                } else if (
                  err.response.data?.message === 'Token is not valid!'
                ) {
                  const resfreshToken = await AsyncStorage.getItem(
                    'refreshToken',
                  );
                  const deliveryBoyId = await AsyncStorage.getItem(
                    'deliveryBoy_id',
                  );

                  console.log('userId--------->>', deliveryBoyId);
                  const SubmitDAta = {
                    refreshToken: resfreshToken,
                    deliveryBoy_id: deliveryBoyId,
                  };

                  console.log('SubmitDAta==========', SubmitDAta);

                  //refresh token api
                  // console.log('refresh token------->>', SubmitDAta);
                  axios
                    .post(BASE_URL + `/User/refreshToken`, SubmitDAta)

                    .then(async res => {
                      // console.log('dablu------------------', res?.data);
                      await AsyncStorage.setItem('token', res?.data?.token);
                      await AsyncStorage.setItem(
                        'refreshToken',
                        res.data.refreshToken,
                      );

                      if (res?.data?.token) {
                        navigation.replace(Routes.BOTTOM_TAB_BAR);
                        console.log(
                          'heyyyyyyyyyyyy====================================0000000000000',
                        );
                      }
                    })
                    .catch(error => {
                      console.log('errr--->>>', error?.response?.data?.message);
                      navigation.replace(Routes.BOTTOM_TAB_BAR);
                      setIsLoading(false);
                      setIsloadData(false);
                    });
                  // update access token in storage
                }
              }
            });
        } else {
          navigation.replace(Routes.LOG_IN_SCREEN);
        }
      } else {
        setIsLoading(false);
        setIsloadData(false);
        setHasInternet(isInternet);
      }
    });
  };

  return (
    <SafeAreaView style={Styles.CONTAINERMAIN}>
      <CustomStatusBar />

      {isLoading ? (
        <LinearGradient
          colors={[COLORS.PURPLE, COLORS.PINK]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{flex: 1}}>
          <View
            style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <Image
              source={logowithlogin}
              style={{height: heightPixel(200), width: widthPixel(300)}}
            />
          </View>
        </LinearGradient>
      ) : (
        !hasInternet && (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLORS.LIGHT_WHITE,
              flex: 1,
            }}>
            <Lottie
              source={require('../Assets/Lottie_json/animation_lkqojitq.json')}
              autoPlay
              loop={true}
              style={{height: heightPixel(400), marginVertical: -30}}
            />
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  color: COLORS.BLACK,
                  fontSize: fontPixel(20),
                  fontWeight: '500',
                }}>
                No internet connection
              </Text>
              <Text
                style={{
                  color: COLORS.BLACK,
                  textAlign: 'center',
                  fontSize: fontPixel(18),
                  marginTop: 8,
                }}>
                Could not connect to the internet. Please check your network
              </Text>
            </View>
            <TouchableOpacity
              style={{marginTop: 30}}
              onPress={_Handle_Splash_SCREEN}
              activeOpacity={0.6}>
              {isloadData ? (
                <ActivityIndicator
                  size="large"
                  color={COLORS.PURPLE}
                  style={{
                    top: 50,
                  }}
                />
              ) : (
                <Text
                  style={{
                    color: COLORS.PINK,
                    fontSize: 16,
                    fontWeight: '700',

                    letterSpacing: 0.6,
                  }}>
                  Try again
                </Text>
              )}
            </TouchableOpacity>
          </View>
        )
      )}
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  CONTAINERMAIN: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
});
