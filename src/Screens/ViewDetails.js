import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import MyHeader from '../Components/MyHeader';
import {COLORS} from '../utils/Colors';
import {fontPixel, heightPixel, widthPixel} from '../Components/Dimensions';
import Button from '../Components/Button';
import Routes from '../Navigation/Routes';

export default function ViewDetails({navigation}) {
  const SRTDATA = [
    {
      name: 'boy',
    },

    {
      name: 'boy',
    },
    {
      name: 'boy',
    },
    {
      name: 'boy',
    },

    {
      name: 'boy',
    },
    {
      name: 'boy',
    },
  ];
  return (
    <SafeAreaView style={Styles.CONTAINERMAIN}>
      <MyHeader onPress={() => navigation.goBack()} title={'View Details'} />
      <ScrollView>
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
        <View style={Styles.ROWSTYL}>
          <Text style={Styles.ROWNAMETEXT}>Order Details</Text>
          <Text style={[Styles.ROWNAMETEXT, {color: COLORS.GREEN}]}>
            Active
          </Text>
        </View>
        <Text numberOfLines={1} style={{alignSelf: 'center', letterSpacing: 1}}>
          --------------------------------------------------------------------------
        </Text>
        <View style={{}}>
          <View style={Styles.ROWONET}>
            <Text style={Styles.ROWNAMETEXT}>Products Purchased</Text>
            <Text style={Styles.ROWNAMETEXT}>Price</Text>
          </View>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            data={SRTDATA}
            renderItem={({item, index}) => (
              <View style={[Styles.ROWONET, {marginVertical: 8}]}>
                <Text style={[Styles.ROWNAMETEXT, {fontWeight: '400'}]}>
                  Bread *1
                </Text>
                <Text style={Styles.ROWNAMETEXT}>₹ 49</Text>
              </View>
            )}
          />
        </View>
        <View style={Styles.LETBOX2}>
          <View style={Styles.LETBOXROW}>
            <Text style={[Styles.ROWNAMETEXT]}>Item Total</Text>
            <Text style={{color: COLORS.GRAYDARK}}>₹ 195</Text>
          </View>
          <View style={[Styles.LETBOXROW, {marginVertical: 8}]}>
            <Text style={{color: COLORS.GRAYDARK}}>Delivery fee</Text>
            <Text style={{color: COLORS.GRAYDARK}}>₹ 195</Text>
          </View>
          <View style={[Styles.LETBOXROW, {marginVertical: 5}]}>
            <Text style={{color: COLORS.GRAYDARK}}>GST</Text>
            <Text style={{color: COLORS.GRAYDARK}}>₹ 35</Text>
          </View>
          <Text
            numberOfLines={1}
            style={{alignSelf: 'center', letterSpacing: 1}}>
            --------------------------------------------------------------------------
          </Text>
          <View style={[Styles.LETBOXROW, {marginVertical: 5}]}>
            <Text style={Styles.ROWNAMETEXT}>To Pay</Text>
            <Text style={Styles.ROWNAMETEXT}>₹ 240</Text>
          </View>
        </View>
        <View style={Styles.UPIBOX}>
          <Text style={Styles.ROWNAMETEXT}>Paid By</Text>
          <Text style={Styles.ROWNAMETEXT}>UPI</Text>
        </View>
        <View style={{marginVertical: 20}}>
          <Button
            title={'Submit'}
            // onPress={() => navigation.navigate(Routes.VERIFICATION_THANKS)}
          />
        </View>
      </ScrollView>
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
  ROWSTYL: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  ROWONET: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  LETBOX2: {
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: COLORS.WHITE,
    elevation: 10,
    borderRadius: 10,
  },
  LETBOXROW: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  UPIBOX: {
    backgroundColor: COLORS.LightPurple,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
