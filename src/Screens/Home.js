import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {fontPixel, heightPixel, widthPixel} from '../Components/Dimensions';
import {COLORS} from '../utils/Colors';
import {
  CustomStatusBar,
  MaterialCommunityIcon,
  SimpleToast,
  manlogo,
} from '../utils/Const';
import DeliveryServices from './DeliveryServices';
import PickupServices from './PickupServices';
import {_getStorage} from '../utils/Storage';
import {
  _countOrder,
  _putcoordinates,
} from '../utils/Controllers/EpicControllers';
import Routes from '../Navigation/Routes';
import {useDispatch, useSelector} from 'react-redux';
import {requestUserPermission} from '../utils/Handler/FirebaseMessagingNoti';
import {useIsFocused} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

export default function Home({navigation}) {
  const [isCount, setIsCount] = useState({});
  const Locations = useSelector(state => state.LocationReducer);
  const isFocus = useIsFocused();

  useEffect(() => {
    _CountData();
    requestUserPermission();
  }, [isFocus]);

  const _CountData = async () => {
    const result = await _countOrder();
    if (result?.data) {
      setIsCount(result?.data);
    } else {
      console.log('count catch error', result?.response?.data?.message);
      SimpleToast({title: result?.response?.data?.message, isLong: true});
    }
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  }, []);

  let currentCount = 0;

  const backAction = () => {
    if (navigation.isFocused()) {
      if (Platform.OS === 'ios') return;
      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          if (currentCount === 1) {
            BackHandler.exitApp();
            subscription.remove();
            return true;
          }
          backPressHandler();
          return true;
        },
      );
      return true;
    }
  };

  const backPressHandler = () => {
    if (currentCount < 1) {
      SimpleToast({title: 'Press back again to exit:', isLong: true});
      currentCount += 1;
    }
    setTimeout(() => {
      currentCount = 0;
    }, 3000);
  };

  return (
    <SafeAreaView style={Styles.CONTAINERMAIN}>
      <CustomStatusBar />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[COLORS.PURPLE, COLORS.PINK]}
        style={Styles.linearGradient}>
        <View style={Styles.MAINBOX}>
          <View></View>
          <Text style={Styles.TEXTHEADER}>Home</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.NOTIFICATIONS)}
            activeOpacity={0.6}>
            <MaterialCommunityIcon
              title="bell-ring"
              size={30}
              IconColor={COLORS.WHITE}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <View style={{justifyContent: 'flex-start'}}>
        <Text style={Styles.CATSTYLTEXT}>Categories</Text>
        <View style={Styles.CARDSTYLES}>
          <View style={Styles.JUSTISTYLES}>
            <Image source={manlogo} style={Styles.JUSTISTYLES} />
          </View>
          <Text style={Styles.TEXTJUSTISTYL}>Total Assignned Order</Text>
          <Text style={[Styles.TEXTJUSTISTYL, {color: COLORS.PINK}]}>
            {isCount?.totalAssigned_Delivery}
          </Text>
        </View>
        <View style={Styles.CARDSTYLES}>
          <View style={Styles.JUSTISTYLES}>
            <Image source={manlogo} style={Styles.JUSTISTYLES} />
          </View>
          <Text style={Styles.TEXTJUSTISTYL}>Delivery Completed</Text>
          <Text style={[Styles.TEXTJUSTISTYL, {color: COLORS.PINK}]}>
            {isCount?.totalDelivery_Completed}
          </Text>
        </View>
        <View style={Styles.CARDSTYLES}>
          <View style={Styles.JUSTISTYLES}>
            <Image source={manlogo} style={Styles.JUSTISTYLES} />
          </View>
          <Text style={Styles.TEXTJUSTISTYL}>Delivery Cancel</Text>
          <Text style={[Styles.TEXTJUSTISTYL, {color: COLORS.PINK}]}>
            {isCount?.totalDelivery_Cancel}
          </Text>
        </View>
      </View>
      <View style={{flex: 1}}>
        <Tab.Navigator screenOptions={Styles.Tobscreen}>
          <Tab.Screen name="Pickup Services" component={PickupServices} />
          <Tab.Screen name="Delivery Services" component={DeliveryServices} />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  CONTAINERMAIN: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  linearGradient: {
    backgroundColor: COLORS.GREEN,
    flexDirection: 'row',
    // elevation: 10,
    // paddingVertical: StatusBar.currentHeight,
    // marginTop: 100,
    paddingVertical: 15,

    alignItems: 'center',
  },
  MAINBOX: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  TEXTHEADER: {
    color: COLORS.WHITE,
    paddingLeft: 8,
    fontSize: fontPixel(20),
    fontWeight: '500',
    letterSpacing: 0.6,
    alignSelf: 'center',
  },
  CATSTYLTEXT: {
    color: COLORS.BLACK,
    paddingLeft: 14,
    fontSize: fontPixel(20),
    fontWeight: '500',
    letterSpacing: 0.6,
    paddingVertical: 10,
  },
  CARDSTYLES: {
    height: heightPixel(80),
    borderWidth: 1,
    borderColor: COLORS.PINK,
    marginHorizontal: 15,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginVertical: 8,
  },
  JUSTISTYLES: {
    height: heightPixel(50),
    width: widthPixel(50),
    borderRadius: 50 / 2,
  },
  TEXTJUSTISTYL: {
    color: COLORS.BLACK,
    fontSize: fontPixel(18),
    fontWeight: '500',
  },
  Tobscreen: {
    tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
    tabBarStyle: {backgroundColor: COLORS.WHITE},
    // tabBarItemStyle: {width: 90},
    tabBarActiveTintColor: COLORS.PINK,
    tabBarInactiveTintColor: COLORS.BLACK,
    tabBarIndicatorStyle: {
      borderBottomColor: COLORS.PINK,
      borderBottomWidth: 2,
    },
  },
});
