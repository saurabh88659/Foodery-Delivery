import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {StyleSheet, View} from 'react-native';
// import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {COLORS} from '../utils/Colors';
import Routes from './Routes';
import Home from '../Screens/Home';
import {fontPixel, heightPixel, widthPixel} from '../Components/Dimensions';
import {Entypos, FontAwesome, userTab} from '../utils/Const';
import ProfileStack from './ProfileStack';
import BookingStack from './BookingStack';
const Tab = createBottomTabNavigator();

// const getTabBarVisibility = route => {
//   const routeName = getFocusedRouteNameFromRoute(route);
//   if (routeName === 'FruitsVegetables' || routeName === 'SubCategories') {
//     return 'none';
//   }
//   return 'flex';
// };

function BottomTabBar() {
  return (
    <Tab.Navigator
      initialRouteName={Routes.TAB_HOME}
      tabBarHideOnKeyboard={true}
      // backBehavior="none"
      screenOptions={{
        showLabel: false,
        headerShown: true,
        tabBarActiveTintColor: COLORS.GREEN,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.tab,
        tabBarLabelStyle: {
          fontWeight: '500',
          fontSize: 11,
        },
      }}>

      <Tab.Screen
        name={Routes.HOME_SCREEN}
        component={Home}
        options={{
          headerShown: false,
          tabBarColor: COLORS.BLUE,
          tabBarIcon: ({focused}) => (
            <View style={[styles.btnInactive, focused && styles.btnActive]}>
              <Entypos
                title={'home'}
                size={25}
                IconColor={focused ? COLORS.WHITE : COLORS.BLACK}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={Routes.BOOKING_STACK}
        component={BookingStack}
        options={{
          headerShown: false,
          tabBarColor: COLORS.BLUE,
          tabBarIcon: ({focused}) => (
            <View style={[styles.btnInactive, focused && styles.btnActive]}>
              <FontAwesome
                title={'calendar-alt'}
                size={28}
                IconColor={focused ? COLORS.WHITE : COLORS.BLACK}
              />
            </View>
          ),
        }}
      />


      <Tab.Screen
        name={Routes.PROFILE_STACK}
        component={ProfileStack}
        options={{
          headerShown: false,
          tabBarColor: COLORS.BLUE,
          tabBarIcon: ({focused}) => (
            <View style={[styles.btnInactive, focused && styles.btnActive]}>
              <FontAwesome
                title={'user-circle'}
                size={25}
                IconColor={focused ? COLORS.WHITE : COLORS.BLACK}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabBar;

const styles = StyleSheet.create({
  tab: {
    backgroundColor: COLORS.WHITE,
    height: 65,
    alignItems: 'center',
    // position: 'absolute',
    borderTopWidth: 2,
    borderTopColor: COLORS.GRAYDARK,
    elevation: 10,
    borderTopRightRadius: 45 / 4,
    borderTopLeftRadius: 45 / 4,
  },
  btnActive: {
    backgroundColor: COLORS.PINK,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: widthPixel(90),
    // paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: heightPixel(46),
  },
  btnInactive: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    width: 60,
    borderRadius: 45 / 4,
  },
  hindentext: {
    color: COLORS.BLACK,
    fontSize: fontPixel(17),
    fontWeight: '500',
    paddingLeft: widthPixel(6),
  },
});
