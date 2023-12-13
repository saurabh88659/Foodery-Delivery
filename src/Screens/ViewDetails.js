import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MyHeader from '../Components/MyHeader';
import {COLORS} from '../utils/Colors';
import {fontPixel, heightPixel, widthPixel} from '../Components/Dimensions';
import Button from '../Components/Button';
// import Routes from '../Navigation/Routes';
import {CustomStatusBar} from '../utils/Const';
import {
  _handlePickUp,
  _postOrderHistorbyid,
} from '../utils/Controllers/EpicControllers';
import Routes from '../Navigation/Routes';
import {useDispatch, useSelector} from 'react-redux';
import {ViewDetailsActions} from '../Redux/Action/ViewDetailsActions';
import {useIsFocused} from '@react-navigation/native';
import {SimpleToast} from '../utils/Const';

export default function ViewDetails({navigation, route}) {
  const preitem = route.params;
  console.log('###preItem===>', preitem.orderId);
  const [viewDetails, setViewDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [refresh, setRfresh] = useState(false);
  const IsFocused = useIsFocused();

  useEffect(() => {
    _OrderHistorbyid();
    console.log('run run run run ');
  }, [IsFocused, refresh]);

  /**
   * The function `_OrderHistorbyid` retrieves order history data based on a given order ID and updates
   * the state accordingly.
   */

  console.log('view deatils====>>', JSON.stringify(viewDetails));

  const _OrderHistorbyid = async () => {
    setIsLoading(true);
    const result = await _postOrderHistorbyid({orderId: preitem?.orderId});
    if (result?.data) {
      console.log('response data:', result?.data?.result);
      setViewDetails(result?.data?.result);
      dispatch(ViewDetailsActions(result?.data?.result));
      setIsLoading(false);
    } else {
      console.log('catch error:order History', result?.response?.data?.message);
      setIsLoading(false);
    }
  };

  setTimeout(() => {
    setRfresh(false);
  }, 5000);

  const PickUp = async () => {
    const result = await _handlePickUp(preitem?._id);
    if (result?.data) {
      console.log('response data:', result?.data);
      SimpleToast({title: 'Order Picked Up', isLong: true});
      navigation.goBack();
      // setRfresh(!refresh);
    } else {
      console.log('catch error:order History', result?.response?.data?.message);
    }
  };

  return (
    <SafeAreaView style={Styles.CONTAINERMAIN}>
      <CustomStatusBar />
      <MyHeader onPress={() => navigation.goBack()} title={'View Details'} />
      {isLoading ? (
        <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" color={COLORS.PINK} />
        </View>
      ) : (
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refresh}
              onRefresh={_OrderHistorbyid}
              tintColor={COLORS.GREEN}
              colors={[COLORS.PINK]}
            />
          }
          showsVerticalScrollIndicator={false}>
          <View style={Styles.STORECARD}>
            <View style={Styles.STOREROW}>
              <Text style={Styles.STORETEXT}>Store Details</Text>
              <Text style={Styles.STORENUMTEXT}>
                shops Id: {viewDetails?.vendorId?.shopsId}
              </Text>
            </View>
            <View style={Styles.FLEXSTARTROW}>
              <Text style={Styles.ROWNAMETEXT}>Name:</Text>
              <Text style={Styles.ROWSUBTEXT}>
                {viewDetails?.vendorId?.shopsDetails?.shopName}
              </Text>
            </View>
            <View style={[Styles.FLEXSTARTROW, {marginVertical: 5}]}>
              <Text style={Styles.ROWNAMETEXT}>Address:</Text>
              <Text style={[Styles.ROWSUBTEXT, {width: widthPixel(230)}]}>
                {viewDetails?.vendorId?.shopsDetails?.shopFullAddress}
              </Text>
            </View>
            <View style={[Styles.FLEXSTARTROW, {marginVertical: 5}]}>
              <Text style={Styles.ROWNAMETEXT}>City:</Text>
              <Text style={[Styles.ROWSUBTEXT, {width: widthPixel(230)}]}>
                {viewDetails?.vendorId?.shopsDetails?.city}
              </Text>
            </View>
            <View style={[Styles.FLEXSTARTROW, {marginVertical: 5}]}>
              <Text style={Styles.ROWNAMETEXT}>Pin:</Text>
              <Text style={[Styles.ROWSUBTEXT, {width: widthPixel(230)}]}>
                {viewDetails?.vendorId?.shopsDetails?.pin}
              </Text>
            </View>
            <View style={[Styles.FLEXSTARTROW, {marginVertical: 5}]}>
              <Text style={Styles.ROWNAMETEXT}>State:</Text>
              <Text style={[Styles.ROWSUBTEXT, {width: widthPixel(230)}]}>
                {viewDetails?.vendorId?.shopsDetails?.state}
              </Text>
            </View>
            <View style={Styles.QROWLINE}>
              <View
                style={[
                  Styles.FLEXSTARTROW,
                  {marginVertical: 5, top: heightPixel(0)},
                ]}>
                <Text style={Styles.ROWNAMETEXT}>Mobile No:</Text>
                <Text style={[Styles.ROWSUBTEXT]}>
                  +91 {viewDetails?.vendorId?.mobileNumber}
                </Text>
              </View>
              <Text
                style={{
                  color: COLORS.BLACK,
                  paddingRight: widthPixel(10),
                  width: widthPixel(184),
                }}>
                {new Date(viewDetails?.vendorAcceptedDate).toDateString()}{' '}
                {new Date(viewDetails?.vendorAcceptedDate).toLocaleTimeString()}
              </Text>
            </View>
          </View>

          {/* {==================================user detials==================================} */}
          <View style={Styles.STORECARD}>
            <View style={Styles.STOREROW}>
              <Text style={Styles.STORETEXT}>User Detials</Text>
              {/* <Text style={Styles.STORENUMTEXT}>
                shops Id: {viewDetails?.vendorId?.shopsId}
              </Text> */}
            </View>
            <View style={Styles.FLEXSTARTROW}>
              <Text style={Styles.ROWNAMETEXT}>Name:</Text>
              <Text style={Styles.ROWSUBTEXT}>
                {viewDetails?.delieveryAddress?.receiverName}
              </Text>
            </View>
            <View
              style={{
                marginVertical: 5,
                marginHorizontal: 10,
                // marginVertical: 10,
                // flexDirection: 'row',
                justifyContent: 'flex-start',
                top: heightPixel(10),
                width: '100%',
                // backgroundColor: 'red',
              }}>
              <Text style={Styles.ROWNAMETEXT}>Address:</Text>
              <Text style={[Styles.ROWSUBTEXT]}>
                {viewDetails?.delieveryAddress?.completeAddress}
              </Text>
            </View>

            <View style={[Styles.FLEXSTARTROW, {marginVertical: 5}]}>
              <Text style={Styles.ROWNAMETEXT}>City:</Text>
              <Text style={[Styles.ROWSUBTEXT, {width: widthPixel(230)}]}>
                {viewDetails?.delieveryAddress?.city}
              </Text>
            </View>
            <View style={[Styles.FLEXSTARTROW, {marginVertical: 5}]}>
              <Text style={Styles.ROWNAMETEXT}>Pin:</Text>
              <Text style={[Styles.ROWSUBTEXT, {width: widthPixel(230)}]}>
                {viewDetails?.delieveryAddress?.pinCode}
              </Text>
            </View>
            <View style={[Styles.FLEXSTARTROW, {marginVertical: 5}]}>
              <Text style={Styles.ROWNAMETEXT}>State:</Text>
              <Text style={[Styles.ROWSUBTEXT, {width: widthPixel(230)}]}>
                {viewDetails?.delieveryAddress?.state}
              </Text>
            </View>
            <View style={Styles.QROWLINE}>
              <View
                style={[
                  Styles.FLEXSTARTROW,
                  {marginVertical: 5, top: heightPixel(0)},
                ]}>
                <Text style={Styles.ROWNAMETEXT}>Mobile No:</Text>
                <Text style={[Styles.ROWSUBTEXT]}>
                  +91 {viewDetails?.vendorId?.mobileNumber}
                </Text>
              </View>

              {/* <Text
                style={{
                  color: COLORS.BLACK,
                  paddingRight: widthPixel(10),
                  width: widthPixel(184),
                }}>
                {new Date(viewDetails?.vendorAcceptedDate).toDateString()}{' '}
                {new Date(viewDetails?.vendorAcceptedDate).toLocaleTimeString()}
              </Text> */}
            </View>
          </View>
          {/* {==================================user detials==================================} */}

          {/* {====================================================================} */}

          <View style={Styles.ROWSTYL}>
            <Text style={Styles.ROWNAMETEXT}>Order Details</Text>
            <Text style={[Styles.ROWNAMETEXT, {color: COLORS.GREEN}]}>
              {viewDetails?.orderActiveStatus}
            </Text>
          </View>
          <Text
            numberOfLines={1}
            style={{alignSelf: 'center', letterSpacing: 1}}>
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
              data={viewDetails?.orderedProducts}
              renderItem={({item, index}) => (
                <View key={index} style={[Styles.ROWONET, {marginVertical: 8}]}>
                  <Text style={[Styles.ROWNAMETEXT, {fontWeight: '400'}]}>
                    {item?.productId?.productName} *
                    {item?.productId?.productPrice}
                  </Text>
                  <Text style={Styles.ROWNAMETEXT}>
                    ₹
                    {item?.productId?.productPrice *
                      item?.productId?.productPrice}
                  </Text>
                </View>
              )}
            />
          </View>
          <View style={Styles.LETBOX2}>
            <View style={Styles.LETBOXROW}>
              <Text style={[Styles.ROWNAMETEXT]}>Item Total</Text>
              <Text style={{color: COLORS.GRAYDARK}}>
                ₹ {viewDetails?.totalAmount}
              </Text>
            </View>
            <View style={[Styles.LETBOXROW, {marginVertical: 8}]}>
              <Text style={{color: COLORS.GRAYDARK}}>Delivery fee</Text>
              <Text style={{color: COLORS.GRAYDARK}}>
                ₹ {viewDetails?.deliveryFee}
              </Text>
            </View>
            <View style={[Styles.LETBOXROW, {marginVertical: 5}]}>
              <Text style={{color: COLORS.GRAYDARK}}>GST</Text>
              <Text style={{color: COLORS.GRAYDARK}}>₹ {viewDetails?.gst}</Text>
            </View>
            <Text
              numberOfLines={1}
              style={{alignSelf: 'center', letterSpacing: 1}}>
              --------------------------------------------------------------------------
            </Text>
            <View style={[Styles.LETBOXROW, {marginVertical: 5}]}>
              <Text style={Styles.ROWNAMETEXT}>To Pay</Text>
              <Text style={Styles.ROWNAMETEXT}>
                ₹ {viewDetails?.totalAmount}
              </Text>
            </View>
          </View>

          <View style={Styles.UPIBOX}>
            <Text style={Styles.ROWNAMETEXT}>Paid By</Text>
            <Text style={Styles.ROWNAMETEXT}>{viewDetails?.payby}</Text>
          </View>

          {viewDetails?.deliveryBoyStatus === 'accepted' && (
            <View style={{marginVertical: 20}}>
              <Button title={'Pick Up'} onPress={PickUp} />
            </View>
          )}

          {viewDetails?.deliveryBoyStatus === 'pickedup' && (
            <View style={{marginVertical: 20}}>
              <Button
                title={'Submit'}
                onPress={() => navigation.navigate(Routes.VERIFICATION_SELFIE)}
                // onPress={() => navigation.navigate(Routes.THANKS_DELIVERING)}
              />
            </View>
          )}

          {/* {viewDetails?.orderStatus === 'Assigned Delivery Partner' && (
            <View style={{marginVertical: 20}}>
              <Button
                title={'Submit'}
                onPress={() => navigation.navigate(Routes.THANKS_DELIVERING)}
              />
            </View>
          )} */}
        </ScrollView>
      )}
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
