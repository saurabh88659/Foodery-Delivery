import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS} from '../utils/Colors';
import {fontPixel, widthPixel} from '../Components/Dimensions';
import {manlogo} from '../utils/Const';
import Routes from '../Navigation/Routes';

export default function DeliveryServices({navigation}) {
  const SRTDATA = [
    {
      name: 'ravi',
    },
    {
      name: 'ravi',
    },
  ];

  return (
    <SafeAreaView style={Styles.CONTAINERMAIN}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        data={SRTDATA}
        renderItem={({item, index}) => (
          <View style={Styles.BOXMAIN}>
            <View style={Styles.JUSTIBOXMAIN}>
              <View style={Styles.MAINBOX}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Image source={manlogo} style={Styles.MANLOGOSTYL} />
                  <View>
                    <Text style={Styles.QTEXTSTY}>json dev</Text>
                    <Text style={[Styles.QTEXTSTY, {marginVertical: 6}]}>
                      +91 77397793839
                    </Text>
                    <Text
                      numberOfLines={3}
                      style={[
                        Styles.QTEXTSTY,
                        {width: widthPixel(220), fontWeight: '400'},
                      ]}>
                      Plot no. A, 40, Block A, Industrial Area, Sector 62,
                      Noida, Uttar Pradesh 201301
                    </Text>
                    <Text
                      style={[
                        Styles.QTEXTSTY,
                        {marginTop: 5, fontWeight: '400'},
                      ]}>
                      Delivered Date: 01/08/2023
                    </Text>
                    <Text
                      style={[
                        Styles.QTEXTSTY,
                        {marginTop: 5, fontWeight: '400'},
                      ]}>
                      Delivered Time: 11:51 AM
                    </Text>
                  </View>
                </View>

                <View>
                  <Text style={[Styles.QTEXTSTY, {left: widthPixel(20)}]}>
                    Order No.
                  </Text>
                  <Text style={Styles.ORDERIDTEXT}>#393940</Text>
                  <Text style={Styles.QPAMENT}>Payment Status</Text>
                  <Text style={Styles.GREYTEXT}>Prepaid</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate(Routes.VIEW_DETAILS)}
                    style={Styles.VIEWBTN}>
                    <Text style={Styles.VIEWTEXT}>View Details</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  CONTAINERMAIN: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  BOXMAIN: {
    // height: heightPixel(200),
    paddingVertical: 10,
    borderWidth: 1,
    marginVertical: 8,
    marginHorizontal: 10,
    borderColor: COLORS.PINK,
    borderRadius: 15,
  },
  MANLOGOSTYL: {height: 50, width: 50, resizeMode: 'contain'},
  JUSTIBOXMAIN: {
    marginTop: 10,
  },
  MAINBOX: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  QTEXTSTY: {
    color: COLORS.BLACK,
    fontSize: fontPixel(16),
    fontWeight: '500',
    left: widthPixel(10),
  },
  QPAMENT: {
    color: COLORS.BLACK,
    fontSize: fontPixel(16),
    fontWeight: '500',
    left: widthPixel(20),
    marginTop: 30,
    paddingVertical: 5,
    width: widthPixel(100),
  },
  GREYTEXT: {
    color: COLORS.GRAYDARK,
    fontSize: fontPixel(16),
    left: widthPixel(20),
    fontWeight: '500',
  },
  ORDERIDTEXT: {
    color: COLORS.BLACK,
    fontSize: fontPixel(16),
    left: widthPixel(20),
  },
  VIEWBTN: {
    backgroundColor: COLORS.PINK,
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginRight: widthPixel(10),
  },
  VIEWTEXT: {color: COLORS.WHITE, fontWeight: '500', fontSize: 11},
});
