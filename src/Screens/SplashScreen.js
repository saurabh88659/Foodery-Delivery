import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {
  BASE_URL,
  CustomStatusBar,
  SimpleToast,
  logowithlogin,
} from '../utils/Const';
import {fontPixel, heightPixel, widthPixel} from '../Components/Dimensions';
import Routes from '../Navigation/Routes';
import {_getStorage} from '../utils/Storage';
import {checkInternetConnection} from '../utils/Handler/InternetInfo';
import Lottie from 'lottie-react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  _getProfile,
  _putcoordinates,
} from '../utils/Controllers/EpicControllers';
import {useSelector} from 'react-redux';
import {StackActions} from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';

export default function SplashScreen({navigation}) {
  const [hasInternet, setHasInternet] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isloadData, setIsloadData] = useState(false);
  // const Locations = useSelector(state => state.LocationReducer);

  useEffect(() => {
    _Handle_Splash_SCREEN();
    _coordinates();
    getCurrentPosition();
  }, []);

  /**
   * The function getCurrentPosition retrieves the current geographical coordinates of the user's
   * device.
   */
  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      position => {
        _coordinates({Locations: position.coords});
      },
      error => console.log('error locations', error),
    );
  };

  /**
   * The function `_coordinates` takes in a `locations` object, extracts the latitude and longitude
   * properties, and calls the `_putcoordinates` function with the extracted data. If the result has a
   * `data` property, it logs the coordinates update, otherwise it logs the error message. If the
   * `locations` object is falsy, it logs an error message.
   */
  const _coordinates = async locations => {
    const data = {
      latitude: locations?.Locations?.latitude,
      longitude: locations?.Locations?.longitude,
    };
    if (locations) {
      const result = await _putcoordinates(data);
      if (result?.data) {
        console.log('coordinates update:', result?.data);
      } else {
        console.log(
          'coordinates catch error:23',
          result?.response?.data?.message,
        );
      }
    } else {
      // SimpleToast({title: 'Please enable location', isLong: true});
      console.log('Locations:Error');
    }
  };

  /**
   * The function `_Handle_Splash_SCREEN` checks for internet connection, retrieves token and isNew
   * status from storage, and navigates to different screens based on the token and isNew status.
   */

  const _Handle_Splash_SCREEN = async () => {
    setIsloadData(true);
    const token = await _getStorage('token');
    const isNew = await AsyncStorage.getItem('isNew');

    checkInternetConnection().then(isInternet => {
      if (isInternet) {
        if (token) {
          if (JSON.parse(isNew)) {
            navigation.navigate(Routes.LOG_IN_SCREEN);
          } else {
            axios
              .get(BASE_URL + `/getMyProfileDeliveryBoy`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              })
              .then(resp => {
                if (resp?.data?.result?.status === 'pending') {
                  navigation.replace(Routes.LOGIN_ACCOUNT);
                } else if (resp?.data?.result?.status === 'accepted') {
                  // navigation.replace(Routes.BOTTOM_TAB_BAR);
                  navigation.dispatch(
                    StackActions.replace(Routes.BOTTOM_TAB_BAR),
                  );
                } else {
                  navigation.navigate(Routes.LOG_IN_SCREEN);
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
                    const SubmitDAta = {
                      refreshToken: resfreshToken,
                      deliveryBoy_id: deliveryBoyId,
                    };
                    axios
                      .post(BASE_URL + `/User/refreshToken`, SubmitDAta)
                      .then(async res => {
                        await AsyncStorage.setItem('token', res?.data?.token);
                        await AsyncStorage.setItem(
                          'refreshToken',
                          res.data.refreshToken,
                        );
                        if (res?.data?.token) {
                          // navigation.replace(Routes.BOTTOM_TAB_BAR);
                          navigation.dispatch(
                            StackActions.replace(Routes.BOTTOM_TAB_BAR),
                          );
                        }
                      })
                      .catch(error => {
                        console.log(
                          'errr--->>>',
                          error?.response?.data?.message,
                        );
                        // navigation.replace(Routes.BOTTOM_TAB_BAR);
                        navigation.dispatch(
                          StackActions.replace(Routes.BOTTOM_TAB_BAR),
                        );

                        setIsLoading(false);
                        setIsloadData(false);
                      });
                  }
                }
              });
          }
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
