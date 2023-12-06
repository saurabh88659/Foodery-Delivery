import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  RefreshControl,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../utils/Colors';
import {fontPixel, heightPixel, widthPixel} from '../Components/Dimensions';
import moment from 'moment';
import {manlogo} from '../utils/Const';
import Routes from '../Navigation/Routes';
import {
  _getOrderHistory,
  _getOrderHistory1,
  _getpickupdetails,
} from '../utils/Controllers/EpicControllers';
import {SimpleToast} from '../utils/Const';
import {useIsFocused} from '@react-navigation/native';

export default function PickupServices({navigation}) {
  const [refresh, setRfresh] = useState(false);
  const [details, setDetails] = useState([1, 2, 3]);
  const [datanotfound, setdatanotfound] = useState();
  const [isServicesData, setIsServicesData] = useState([]);
  const [message, setmessage] = useState('');

  console.log('isServicesData==============>>>', isServicesData);

  const IsFocused = useIsFocused();

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      // _getpickup();
    }
  }, [isFocused]);

  setTimeout(() => {
    setRfresh(false);
  }, 5000);

  const _getpickup = async () => {
    const result = await _getpickupdetails();
    console.log('result of _getpickup===>', result.response.data);
    if (result?.data) {
      setDetails(result?.data?.result);
    } else {
      console.log('catch error:', result?.response?.data?.vendorId);
      setdatanotfound(result?.response?.data?.message);
      SimpleToast({title: result?.response?.data?.message, isLong: true});
    }
  };

  useEffect(() => {
    if (IsFocused) {
      setmessage('');
      _Services_Delivery();
    }
  }, [IsFocused]);

  const _Services_Delivery = async () => {
    const result = await _getOrderHistory1();
    if (result?.data) {
      console.log('result', result?.data?.message);
      setIsServicesData(result?.data?.result);
      SimpleToast({title: result?.data?.message, isLong: true});
    } else {
      SimpleToast({title: result?.response?.data?.message, isLong: true});
      setmessage(result?.response?.data?.message);
    }
  };

  // const _Services_Delivery = async () => {
  //   const result = await _getOrderHistory();
  //   if (result?.data) {
  //     console.log('result', result?.data?.message);
  //     setIsServicesData(result?.data?.result);
  //     SimpleToast({title: result?.data?.message, isLong: true});
  //   } else {
  //     SimpleToast({title: result?.response?.data?.message, isLong: true});
  //     setmessage(result?.response?.data?.message);
  //   }
  // };

  return (
    // {===========================old code=========================== '}

    // <SafeAreaView style={Styles.CONTAINERMAIN}>
    //   {!datanotfound ? (
    //     <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
    //       <Text style={{color: COLORS.GRAY}}>data not found</Text>
    //     </View>
    //   ) : (
    //     <FlatList
    //       keyExtractor={(item, index) => index.toString()}
    //       showsVerticalScrollIndicator={false}
    //       refreshControl={
    //         <RefreshControl
    //           refreshing={refresh}
    //           onRefresh={_getpickup}
    //           tintColor={COLORS.GREEN}
    //           colors={[COLORS.PINK]}
    //         />
    //       }
    //       data={details}
    //       renderItem={({item, index}) => (
    //         <View key={index} style={Styles.MAINBOX}>
    //           <View style={Styles.QBOX}>
    //             <Text style={Styles.TEXTONE}>Pickup Details</Text>
    //             <Text style={Styles.TEXTONE}>
    //               Shop Id: {item?.vendorId?.shopsId}
    //             </Text>
    //           </View>

    //           <View>
    //             <Text
    //               style={[
    //                 Styles.TEXTONE,
    //                 {fontSize: 16, alignSelf: 'center', marginTop: 10},
    //               ]}>
    //               Pickup Details
    //             </Text>
    //             <View style={Styles.ROWSTYL}>
    //               <Text style={[Styles.TEXTONE, {fontSize: 14}]}>
    //                 Shop Name:
    //               </Text>
    //               <Text
    //                 style={[
    //                   Styles.TEXTONE,
    //                   {fontSize: 13, paddingLeft: 10, fontWeight: 400},
    //                 ]}>
    //                 {item?.vendorId?.shopsDetails?.shopName}
    //               </Text>
    //             </View>
    //             <View style={Styles.ROWSTYL}>
    //               <Text style={[Styles.TEXTONE, {fontSize: 14}]}>
    //                 Contact No:
    //               </Text>
    //               <Text
    //                 style={[
    //                   Styles.TEXTONE,
    //                   {fontSize: 13, paddingLeft: 10, fontWeight: 400},
    //                 ]}>
    //                 +91 {item?.vendorId?.mobileNumber}
    //               </Text>
    //             </View>
    //             <View style={Styles.ROWSTYL}>
    //               <Text style={[Styles.TEXTONE, {fontSize: 14}]}>
    //                 Pickup Address:
    //               </Text>
    //               <Text
    //                 style={[
    //                   Styles.TEXTONE,
    //                   {
    //                     fontSize: 13,
    //                     paddingLeft: 10,
    //                     fontWeight: 400,
    //                     width: widthPixel(200),
    //                   },
    //                 ]}>
    //                 {item?.vendorId?.shopsDetails?.shopFullAddress}
    //               </Text>
    //             </View>
    //             <View style={Styles.ROWSTYL}>
    //               <Text style={[Styles.TEXTONE, {fontSize: 14}]}>
    //                 Payment Status:
    //               </Text>
    //               <Text
    //                 style={[
    //                   Styles.TEXTONE,
    //                   {fontSize: 13, paddingLeft: 10, fontWeight: 400},
    //                 ]}>
    //                 {item?.payby}
    //               </Text>
    //             </View>
    //             <Text
    //               style={[
    //                 Styles.TEXTONE,
    //                 {fontSize: 16, alignSelf: 'center', marginTop: 10},
    //               ]}>
    //               Receiver's Deatils
    //             </Text>
    //             <View style={Styles.ROWSTYL}>
    //               <Text style={[Styles.TEXTONE, {fontSize: 14}]}>
    //                 Receiver's name:
    //               </Text>
    //               <Text
    //                 style={[
    //                   Styles.TEXTONE,
    //                   {fontSize: 13, paddingLeft: 10, fontWeight: 400},
    //                 ]}>
    //                 {item?.orderAddressId?.receiverName}
    //               </Text>
    //             </View>
    //             <View style={Styles.ROWSTYL}>
    //               <Text style={[Styles.TEXTONE, {fontSize: 14}]}>
    //                 Contact No:
    //               </Text>
    //               <Text
    //                 style={[
    //                   Styles.TEXTONE,
    //                   {fontSize: 13, paddingLeft: 10, fontWeight: 400},
    //                 ]}>
    //                 +91 {item?.user?.phone}
    //               </Text>
    //             </View>
    //             <View style={Styles.ROWSTYL}>
    //               <Text style={[Styles.TEXTONE, {fontSize: 14}]}>
    //                 Drop Address:
    //               </Text>
    //               <Text
    //                 style={[
    //                   Styles.TEXTONE,
    //                   {
    //                     fontSize: 13,
    //                     paddingLeft: 10,
    //                     fontWeight: 400,
    //                     width: widthPixel(280),
    //                   },
    //                 ]}>
    //                 {item?.orderAddressId?.completeAddress}
    //               </Text>
    //             </View>
    //             <View style={Styles.ROWSTYL}>
    //               <Text style={[Styles.TEXTONE, {fontSize: 14}]}>
    //                 Landmark:
    //               </Text>
    //               <Text
    //                 style={[
    //                   Styles.TEXTONE,
    //                   {
    //                     fontSize: 13,
    //                     paddingLeft: 10,
    //                     fontWeight: 400,
    //                     width: widthPixel(280),
    //                   },
    //                 ]}>
    //                 {item?.orderAddressId?.nearby_landmark}
    //               </Text>
    //             </View>
    //             <View style={Styles.ROWSTYL}>
    //               <Text style={[Styles.TEXTONE, {fontSize: 14}]}>State:</Text>
    //               <Text
    //                 style={[
    //                   Styles.TEXTONE,
    //                   {
    //                     fontSize: 13,
    //                     paddingLeft: 10,
    //                     fontWeight: 400,
    //                     width: widthPixel(280),
    //                   },
    //                 ]}>
    //                 {item?.orderAddressId?.state}
    //               </Text>
    //             </View>
    //             <View style={Styles.ROWSTYL}>
    //               <Text style={[Styles.TEXTONE, {fontSize: 14}]}>
    //                 Pin Code:
    //               </Text>
    //               <Text
    //                 style={[
    //                   Styles.TEXTONE,
    //                   {
    //                     fontSize: 13,
    //                     paddingLeft: 10,
    //                     fontWeight: 400,
    //                     width: widthPixel(280),
    //                   },
    //                 ]}>
    //                 {item?.orderAddressId?.pinCode}
    //               </Text>
    //             </View>
    //             <View style={Styles.ROWSTYL}>
    //               <Text style={[Styles.TEXTONE, {fontSize: 14}]}>Save As:</Text>
    //               <Text
    //                 style={[
    //                   Styles.TEXTONE,
    //                   {
    //                     fontSize: 13,
    //                     paddingLeft: 10,
    //                     fontWeight: 400,
    //                     width: widthPixel(280),
    //                   },
    //                 ]}>
    //                 {item?.orderAddressId?.saveAs}
    //               </Text>
    //             </View>
    //           </View>
    //         </View>
    //       )}
    //     />
    //   )}
    // </SafeAreaView>
    // {===========================old code=========================== '}

    <SafeAreaView style={Styles.CONTAINERMAIN}>
      {message ? (
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
              onRefresh={_Services_Delivery}
              tintColor={COLORS.GREEN}
              colors={[COLORS.PINK]}
            />
          }
          data={isServicesData}
          renderItem={({item, index}) => (
            <View key={index} style={Styles.BOXMAIN}>
              <View style={Styles.JUSTIBOXMAIN}>
                <View style={Styles.MAINBOX}>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        height: heightPixel(60),
                        width: widthPixel(50),
                        borderRadius: 50,
                      }}>
                      {item?.user?.profilePic ? (
                        <Image
                          source={{uri: item?.user?.profilePic}}
                          style={Styles.JUSTISTYLES}
                        />
                      ) : (
                        <Image source={manlogo} style={Styles.JUSTISTYLES} />
                      )}
                    </View>
                    <View>
                      <Text style={Styles.QTEXTSTY}>{item?.user?.name}</Text>
                      <Text style={[Styles.QTEXTSTY, {marginVertical: 6}]}>
                        +91 {item?.user?.phone}
                      </Text>
                      <Text
                        numberOfLines={3}
                        style={[
                          Styles.QTEXTSTY,
                          {
                            width: widthPixel(220),
                            fontWeight: '400',
                            color: COLORS.BLACK,
                          },
                        ]}>
                        {/* Plot no. A, 40, Block A, Industrial Area, Sector 62,
                    Noida, Uttar Pradesh 201301 */}
                        {item?.delieveryAddress?.completeAddress}
                      </Text>
                      <Text
                        style={[
                          Styles.QTEXTSTY,
                          {marginTop: 5, fontWeight: '400'},
                        ]}>
                        Delivered Date:
                        {moment(item?.delieveredAt).format('DD/MM/YYYY')}
                      </Text>
                      <Text
                        style={[
                          Styles.QTEXTSTY,
                          {marginTop: 5, fontWeight: '400'},
                        ]}>
                        Delivered Time:{' '}
                        {moment(item?.delieveredAt).format('h:mm:ss a')}
                      </Text>
                    </View>
                  </View>

                  <View
                    style={
                      {
                        // backgroundColor: 'red',
                        // justifyContent: 'center',
                        // alignItems: 'center',
                      }
                    }>
                    <Text style={[Styles.QTEXTSTY]}>Order No.</Text>
                    <Text style={Styles.ORDERIDTEXT}>{item?.orderId}</Text>
                    <Text style={Styles.QPAMENT}>Payment Status</Text>
                    <Text style={Styles.GREYTEXT}>
                      {item?.paymentInfo?.status}
                    </Text>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate(Routes.VIEW_DETAILS, item)
                      }
                      style={Styles.VIEWBTN}>
                      <Text style={Styles.VIEWTEXT}>View Details</Text>
                    </TouchableOpacity>
                  </View>
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
  MANLOGOSTYL: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    borderRadius: 25,
  },
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
    // left: widthPixel(20),
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
  JUSTISTYLES: {
    height: heightPixel(50),
    width: widthPixel(50),
    borderRadius: 50 / 2,
  },
});
