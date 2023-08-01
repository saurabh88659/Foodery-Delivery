import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import MyHeader from '../Components/MyHeader';
import {COLORS} from '../utils/Colors';
import {fontPixel, heightPixel, widthPixel} from '../Components/Dimensions';

export default function ViewDetails({navigation}) {
  return (
    <SafeAreaView style={Styles.CONTAINERMAIN}>
      <MyHeader onPress={() => navigation.goBack()} title={'View Details'} />
      <View style={Styles.STORECARD}>
        <View style={Styles.STOREROW}>
          <Text style={Styles.STORETEXT}>Store Details</Text>
          <Text style={Styles.STORENUMTEXT}>12345678909876</Text>
        </View>
        <View style={Styles.FLEXSTARTROW}>
          <Text style={Styles.ROWNAMETEXT}>Name:</Text>
          <Text style={Styles.ROWSUBTEXT}>Anupama Store</Text>
        </View>
        <View style={[Styles.FLEXSTARTROW, {marginVertical: 5}]}>
          <Text style={Styles.ROWNAMETEXT}>Address:</Text>
          <Text style={[Styles.ROWSUBTEXT, {width: widthPixel(230)}]}>
            Plot no. A, 40, Block A, Industrial Area, Sector 62, Noida, Uttar
            Pradesh 201301
          </Text>
        </View>
        <View style={Styles.QROWLINE}>
          <View
            style={[
              Styles.FLEXSTARTROW,
              {marginVertical: 5, top: heightPixel(0)},
            ]}>
            <Text style={Styles.ROWNAMETEXT}>Mobile No:</Text>
            <Text style={[Styles.ROWSUBTEXT]}>+91 83309489920</Text>
          </View>
          <Text style={{color: COLORS.BLACK, paddingRight: widthPixel(10)}}>
            Jun 28 2023, 05:44 PM
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  CONTAINERMAIN: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  STORECARD: {
    paddingVertical: 7,
    borderWidth: 1,
    marginHorizontal: 5,
    marginVertical: 10,
    borderRadius: 10,
  },
  STOREROW: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 7,
  },
  STORETEXT: {
    color: COLORS.PURPLE,
    fontWeight: '500',
    fontSize: fontPixel(17),
  },
  STORENUMTEXT: {
    color: COLORS.BLACK,
    fontSize: fontPixel(17),
  },
  FLEXSTARTROW: {
    marginHorizontal: 10,
    // marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    top: heightPixel(10),
  },
  ROWNAMETEXT: {
    fontWeight: '500',
    color: COLORS.BLACK,
    fontSize: fontPixel(17),
  },
  ROWSUBTEXT: {paddingLeft: widthPixel(10), color: COLORS.BLACK},
  QROWLINE: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});
