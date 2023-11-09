import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  RefreshControl,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../utils/Colors';
import {fontPixel, heightPixel, widthPixel} from '../Components/Dimensions';
import {_getpickupdetails} from '../utils/Controllers/EpicControllers';
import {SimpleToast} from '../utils/Const';
import {useIsFocused} from '@react-navigation/native';

export default function PickupServices() {
  const [refresh, setRfresh] = useState(false);
  const [details, setDetails] = useState([]);
  const [datanotfound, setdatanotfound] = useState();
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      _getpickup();
    }
  }, [isFocused]);

  setTimeout(() => {
    setRfresh(false);
  }, 5000);

  const _getpickup = async () => {
    const result = await _getpickupdetails();
    if (result?.data) {
      setDetails(result?.data?.result);
    } else {
      console.log('catch error:', result?.response?.data?.vendorId);
      setdatanotfound(result?.response?.data?.message);
      SimpleToast({title: result?.response?.data?.message, isLong: true});
    }
  };

  return (
    <SafeAreaView style={Styles.CONTAINERMAIN}>
      {datanotfound ? (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Text style={{color: COLORS.GRAY}}>data not found</Text>
        </View>
      ) : (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refresh}
              onRefresh={_getpickup}
              tintColor={COLORS.GREEN}
              colors={[COLORS.PINK]}
            />
          }
          data={details}
          renderItem={({item, index}) => (
            <View key={index} style={Styles.MAINBOX}>
              <View style={Styles.QBOX}>
                <Text style={Styles.TEXTONE}>Pickup Details</Text>
                <Text style={Styles.TEXTONE}>
                  Shop Id: {item?.vendorId?.shopsId}
                </Text>
              </View>

              <View>
                <Text
                  style={[
                    Styles.TEXTONE,
                    {fontSize: 16, alignSelf: 'center', marginTop: 10},
                  ]}>
                  Pickup Details
                </Text>
                <View style={Styles.ROWSTYL}>
                  <Text style={[Styles.TEXTONE, {fontSize: 14}]}>
                    Shop Name:
                  </Text>
                  <Text
                    style={[
                      Styles.TEXTONE,
                      {fontSize: 13, paddingLeft: 10, fontWeight: 400},
                    ]}>
                    {item?.vendorId?.shopsDetails?.shopName}
                  </Text>
                </View>
                <View style={Styles.ROWSTYL}>
                  <Text style={[Styles.TEXTONE, {fontSize: 14}]}>
                    Contact No:
                  </Text>
                  <Text
                    style={[
                      Styles.TEXTONE,
                      {fontSize: 13, paddingLeft: 10, fontWeight: 400},
                    ]}>
                    +91 {item?.vendorId?.mobileNumber}
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
                    {item?.vendorId?.shopsDetails?.shopFullAddress}
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
                    {item?.payby}
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
                    {item?.orderAddressId?.receiverName}
                  </Text>
                </View>
                <View style={Styles.ROWSTYL}>
                  <Text style={[Styles.TEXTONE, {fontSize: 14}]}>
                    Contact No:
                  </Text>
                  <Text
                    style={[
                      Styles.TEXTONE,
                      {fontSize: 13, paddingLeft: 10, fontWeight: 400},
                    ]}>
                    +91 {item?.user?.phone}
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
                        width: widthPixel(280),
                      },
                    ]}>
                    {item?.orderAddressId?.completeAddress}
                  </Text>
                </View>
                <View style={Styles.ROWSTYL}>
                  <Text style={[Styles.TEXTONE, {fontSize: 14}]}>
                    Landmark:
                  </Text>
                  <Text
                    style={[
                      Styles.TEXTONE,
                      {
                        fontSize: 13,
                        paddingLeft: 10,
                        fontWeight: 400,
                        width: widthPixel(280),
                      },
                    ]}>
                    {item?.orderAddressId?.nearby_landmark}
                  </Text>
                </View>
                <View style={Styles.ROWSTYL}>
                  <Text style={[Styles.TEXTONE, {fontSize: 14}]}>State:</Text>
                  <Text
                    style={[
                      Styles.TEXTONE,
                      {
                        fontSize: 13,
                        paddingLeft: 10,
                        fontWeight: 400,
                        width: widthPixel(280),
                      },
                    ]}>
                    {item?.orderAddressId?.state}
                  </Text>
                </View>
                <View style={Styles.ROWSTYL}>
                  <Text style={[Styles.TEXTONE, {fontSize: 14}]}>
                    Pin Code:
                  </Text>
                  <Text
                    style={[
                      Styles.TEXTONE,
                      {
                        fontSize: 13,
                        paddingLeft: 10,
                        fontWeight: 400,
                        width: widthPixel(280),
                      },
                    ]}>
                    {item?.orderAddressId?.pinCode}
                  </Text>
                </View>
                <View style={Styles.ROWSTYL}>
                  <Text style={[Styles.TEXTONE, {fontSize: 14}]}>Save As:</Text>
                  <Text
                    style={[
                      Styles.TEXTONE,
                      {
                        fontSize: 13,
                        paddingLeft: 10,
                        fontWeight: 400,
                        width: widthPixel(280),
                      },
                    ]}>
                    {item?.orderAddressId?.saveAs}
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
      )}
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
