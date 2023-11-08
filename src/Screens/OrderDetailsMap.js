import {View, Text, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import MyHeader from '../Components/MyHeader';
import {COLORS} from '../utils/Colors';
import {heightPixel} from '../Components/Dimensions';
// import {LONGITUDE_DELTA} from '../utils/Const';
// import MapView, {Marker} from 'react-native-maps';
import Button from '../Components/Button';
import Routes from '../Navigation/Routes';
import {CustomStatusBar} from '../utils/Const';

export default function OrderDetailsMap({navigation}) {
  return (
    <SafeAreaView style={Styles.CONTAINER}>
      <CustomStatusBar />
      <MyHeader onPress={() => navigation.goBack()} title={'Order Details'} />
      <View style={Styles.CARTSTY}>
        <View style={Styles.HEDTEXT}>
          <Text style={{fontWeight: '500', fontSize: 15, color: COLORS.PURPLE}}>
            Customer Details
          </Text>
          <Text style={{fontWeight: '500', fontSize: 14, color: COLORS.BLACK}}>
            12345678901234
          </Text>
        </View>
        <View>
          <Text style={Styles.NAMESTYL}>Priya</Text>
          <Text numberOfLines={3} style={[Styles.NAMESTYL, {marginTop: 5}]}>
            Sector 62, is a prime mixed-use location of Noida city. It is one of
            the best-planned sectors of Noida
          </Text>
        </View>
        <View style={[Styles.HEDTEXT, {marginTop: 10, fontWeight: '400'}]}>
          <Text style={{fontWeight: '500', fontSize: 14, color: COLORS.BLACK}}>
            7739675630
          </Text>
          <Text style={{fontWeight: '500', fontSize: 13, color: COLORS.BLACK}}>
            Jun 28 2023, 11:53 AM
          </Text>
        </View>
      </View>
      <View style={Styles.MAPBOX}>
        {/* <MapView
          style={StyleSheet?.absoluteFill}
          initialRegion={{
            latitude: '77.3910',
            longitude: '28.5355',
            latitudeDelta: LONGITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          showsUserLocation={true}
          provider="google">
          <Marker
            coordinate={{
              latitude: '77.3910',
              longitude: '28.5355',
            }}
            title={'noida'}
          />
        </MapView> */}
      </View>
      <View style={{justifyContent: 'flex-end', flex: 1, marginBottom: 20}}>
        <Button
          title={'Order Delivered'}
          onPress={() => navigation.navigate(Routes.THANKS_DELIVERING)}
        />
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  CONTAINER: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  CARTSTY: {
    // height: heightPixel(200),
    borderWidth: 1,
    marginVertical: 4,
    marginHorizontal: 10,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  HEDTEXT: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  MAPBOX: {
    marginTop: 10,
    height: heightPixel(300),
    backgroundColor: COLORS.PURPLE,
    elevation: 9,
    borderRadius: 4,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  NAMESTYL: {
    fontWeight: '500',
    fontSize: 15,
    color: COLORS.BLACK,
    marginTop: 3,
  },
});
