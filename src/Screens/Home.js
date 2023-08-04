import {View, Text, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  fontPixel,
  heightPixel,
  screenWidth,
  widthPixel,
} from '../Components/Dimensions';
import {COLORS} from '../utils/Colors';
import {FontAwesome, MaterialCommunityIcon} from '../utils/Const';
import DeliveryServices from './DeliveryServices';
import PickupServices from './PickupServices';

const Tab = createMaterialTopTabNavigator();

export default function Home() {
  return (
    <SafeAreaView style={Styles.CONTAINERMAIN}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[COLORS.PURPLE, COLORS.PINK]}
        style={Styles.linearGradient}>
        <View style={Styles.MAINBOX}>
          <Text style={Styles.TEXTHEADER}>Home</Text>
          <MaterialCommunityIcon
            title="bell-ring"
            size={30}
            IconColor={COLORS.WHITE}
            IconStyle={{alignSelf: 'flex-end', left: widthPixel(140)}}
          />
        </View>
      </LinearGradient>
      <View>
        <Text style={Styles.CATSTYLTEXT}>Categories</Text>
        <View style={Styles.CARDSTYLES}>
          <View style={Styles.JUSTISTYLES}></View>
          <Text style={Styles.TEXTJUSTISTYL}>Total assignned Delivered</Text>
          <Text style={[Styles.TEXTJUSTISTYL, {color: COLORS.PINK}]}>05</Text>
        </View>
        <View style={Styles.CARDSTYLES}>
          <View style={Styles.JUSTISTYLES}></View>
          <Text style={Styles.TEXTJUSTISTYL}>Total assignned Delivered</Text>
          <Text style={[Styles.TEXTJUSTISTYL, {color: COLORS.PINK}]}>05</Text>
        </View>
        <View style={Styles.CARDSTYLES}>
          <View style={Styles.JUSTISTYLES}></View>
          <Text style={Styles.TEXTJUSTISTYL}>Total assignned Delivered</Text>
          <Text style={[Styles.TEXTJUSTISTYL, {color: COLORS.PINK}]}>05</Text>
        </View>
      </View>
      <View style={{flex: 1}}>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold'},
            tabBarStyle: {backgroundColor: COLORS.WHITE},
            // tabBarItemStyle: {width: 90},
            tabBarActiveTintColor: COLORS.PINK,
            tabBarInactiveTintColor: COLORS.BLACK,
            tabBarIndicatorStyle: {
              borderBottomColor: COLORS.PINK,
              borderBottomWidth: 2,
            },
          }}>
          <Tab.Screen name="Delivery Services" component={DeliveryServices} />
          <Tab.Screen name="Pickup Services" component={PickupServices} />
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
    paddingHorizontal: '3%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexDirection: 'row',
    elevation: 10,
    paddingVertical: 14,
  },
  MAINBOX: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: widthPixel(screenWidth),
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
    borderWidth: 1,
    borderColor: COLORS.PINK,
  },
  TEXTJUSTISTYL: {
    color: COLORS.BLACK,
    fontSize: fontPixel(18),
    fontWeight: '500',
  },
});
