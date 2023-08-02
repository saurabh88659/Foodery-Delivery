import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {COLORS} from '../utils/Colors';
import {fontPixel, heightPixel, widthPixel} from '../Components/Dimensions';

export default function PickupServices() {
  return (
    <SafeAreaView style={Styles.CONTAINERMAIN}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}>
        <View style={Styles.MAINBOX}>
          <View style={Styles.QBOX}>
            <Text style={Styles.TEXTONE}>Pickup Details</Text>
            <Text style={Styles.TEXTONE}>#893798729827</Text>
          </View>

          {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
          }}>
          <View style={{marginTop: 15}}>
            <Text style={[Styles.TEXTONE, {fontSize: 14}]}>Pickup Details</Text>
            <View style={Styles.TBOX}>
              <Text style={[Styles.TEXTONE, {fontSize: 14}]}>User name:</Text>
              <Text
                style={[
                  Styles.TEXTONE,
                  {fontSize: 13, paddingLeft: 10, fontWeight: 400},
                ]}>
                json dev
              </Text>
            </View>
            <View style={[Styles.TBOX, {marginVertical: 5}]}>
              <Text style={[Styles.TEXTONE, {fontSize: 14}]}>Contact No:</Text>
              <Text
                style={[
                  Styles.TEXTONE,
                  {fontSize: 13, paddingLeft: 10, fontWeight: 400},
                ]}>
                +91 77396837890
              </Text>
            </View>
            <View style={[{marginVertical: 5}]}>
              <Text style={[Styles.TEXTONE, {fontSize: 14}]}>
                Pickup Address:
              </Text>
              <Text
                style={[
                  Styles.TEXTONE,
                  {
                    fontSize: 13,
                    fontWeight: 400,
                    width: widthPixel(200),
                    paddingTop: 5,
                  },
                ]}>
                Plot no. A, 40, Block A, Industrial Area, Sector 62, Noida,
                Uttar Pradesh 201301
              </Text>
            </View>
            <View style={[{marginVertical: 5}]}>
              <Text style={[Styles.TEXTONE, {fontSize: 14}]}>
                Payment Status
              </Text>
              <Text
                style={[
                  Styles.TEXTONE,
                  {
                    fontSize: 13,
                    fontWeight: 400,
                    width: widthPixel(200),
                    paddingTop: 5,
                  },
                ]}>
                Prepaid
              </Text>
            </View>
          </View>
          <View style={{marginTop: 15, marginLeft: widthPixel(30)}}>
            <Text style={[Styles.TEXTONE, {fontSize: 14}]}>
              Receiver's Deatils
            </Text>
            <View style={{marginTop: 10}}>
              <Text style={[Styles.TEXTONE, {fontSize: 14}]}>
                Receiver's Name:
              </Text>
              <Text
                style={[
                  Styles.TEXTONE,
                  {fontSize: 13, fontWeight: 400, marginVertical: 4},
                ]}>
                json dev
              </Text>
            </View>
            <View style={{marginTop: 5}}>
              <Text style={[Styles.TEXTONE, {fontSize: 14}]}>Contact No.</Text>
              <Text
                style={[
                  Styles.TEXTONE,
                  {fontSize: 13, fontWeight: 400, top: 5},
                ]}>
                +91 77208378398
              </Text>
            </View>
            <View style={{marginTop: 5}}>
              <Text style={[Styles.TEXTONE, {fontSize: 14}]}>Drop Address</Text>
              <Text
                style={[
                  Styles.TEXTONE,
                  {
                    fontSize: 13,
                    fontWeight: 400,
                    width: widthPixel(170),
                    paddingTop: 5,
                  },
                ]}>
                Plot no. A, 40, Block A, Industrial Area, Sector 62, Noida,
                Uttar Pradesh 201301
              </Text>
            </View>
          </View>
        </View> */}

          <View>
            <Text
              style={[
                Styles.TEXTONE,
                {fontSize: 16, alignSelf: 'center', marginTop: 10},
              ]}>
              Pickup Details
            </Text>
            <View style={Styles.ROWSTYL}>
              <Text style={[Styles.TEXTONE, {fontSize: 14}]}>User name:</Text>
              <Text
                style={[
                  Styles.TEXTONE,
                  {fontSize: 13, paddingLeft: 10, fontWeight: 400},
                ]}>
                json dev
              </Text>
            </View>
            <View style={Styles.ROWSTYL}>
              <Text style={[Styles.TEXTONE, {fontSize: 14}]}>Contact No:</Text>
              <Text
                style={[
                  Styles.TEXTONE,
                  {fontSize: 13, paddingLeft: 10, fontWeight: 400},
                ]}>
                +91 88739382890
              </Text>
            </View>
            <View style={Styles.ROWSTYL}>
              <Text style={[Styles.TEXTONE, {fontSize: 14}]}>
                Pickup Address:
              </Text>
              <Text
                style={[
                  Styles.TEXTONE,
                  {
                    fontSize: 13,
                    paddingLeft: 10,
                    fontWeight: 400,
                    width: widthPixel(200),
                  },
                ]}>
                Plot no. A, 40, Block A, Industrial Area, Sector 62, Noida,
                Uttar Pradesh 201301
              </Text>
            </View>
            <View style={Styles.ROWSTYL}>
              <Text style={[Styles.TEXTONE, {fontSize: 14}]}>
                Payment Status:
              </Text>
              <Text
                style={[
                  Styles.TEXTONE,
                  {fontSize: 13, paddingLeft: 10, fontWeight: 400},
                ]}>
                Prepaid
              </Text>
            </View>
            <Text
              style={[
                Styles.TEXTONE,
                {fontSize: 16, alignSelf: 'center', marginTop: 10},
              ]}>
              Receiver's Deatils
            </Text>
            <View style={Styles.ROWSTYL}>
              <Text style={[Styles.TEXTONE, {fontSize: 14}]}>
                Receiver's name:
              </Text>
              <Text
                style={[
                  Styles.TEXTONE,
                  {fontSize: 13, paddingLeft: 10, fontWeight: 400},
                ]}>
                json dev
              </Text>
            </View>
            <View style={Styles.ROWSTYL}>
              <Text style={[Styles.TEXTONE, {fontSize: 14}]}>Contact No:</Text>
              <Text
                style={[
                  Styles.TEXTONE,
                  {fontSize: 13, paddingLeft: 10, fontWeight: 400},
                ]}>
                +91 88739382890
              </Text>
            </View>
            <View style={Styles.ROWSTYL}>
              <Text style={[Styles.TEXTONE, {fontSize: 14}]}>
                Drop Address:
              </Text>
              <Text
                style={[
                  Styles.TEXTONE,
                  {
                    fontSize: 13,
                    paddingLeft: 10,
                    fontWeight: 400,
                    width: widthPixel(200),
                  },
                ]}>
                Plot no. A, 40, Block A, Industrial Area, Sector 62, Noida,
                Uttar Pradesh 201301
              </Text>
            </View>
          </View>
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
  MAINBOX: {
    borderWidth: 1,
    borderColor: COLORS.PINK,
    // height: heightPixel(200),
    marginTop: 20,
    marginHorizontal: 5,
    borderRadius: 10,
    paddingVertical: 10,
  },
  QBOX: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  TEXTONE: {
    color: COLORS.BLACK,
    fontSize: fontPixel(18),
    fontWeight: '500',
  },
  TBOX: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    top: heightPixel(10),
  },
  ROWSTYL: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
    marginHorizontal: 20,
  },
});
