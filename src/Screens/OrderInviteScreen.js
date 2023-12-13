import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../utils/Colors';
import {CustomStatusBar, SimpleToast} from '../utils/Const';
import MyHeader from '../Components/MyHeader';
import {heightPixel, widthPixel} from '../Components/Dimensions';
import {
  _getOrderNotifications,
  _putReject,
  _putaccept,
} from '../utils/Controllers/EpicControllers';
import Routes from '../Navigation/Routes';
import {useNavigation} from '@react-navigation/native';

export default function OrderInviteScreen({route}) {
  const [bookingDetails, setbookingDetails] = useState(null);
  const usevendoritem = route.params;
  const numbersOnly = route.params.data.body.replace(/\D/g, '');
  console.log('numbersOnly=====>', numbersOnly);
  console.log('>>>>>route', route.params);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    _getNotifications();
  }, []);

  const _getNotifications = async () => {
    const result = await _getOrderNotifications(numbersOnly);
    if (result?.data) {
      console.log(
        '@@@@response data _getNotifications====>>>:',
        result?.data?.result,
      );
      setbookingDetails(result?.data?.result);
      setIsLoading(false);
    } else {
      console.log('catch error booking:', result?.response?.data?.message);
      setIsLoading(false);
    }
  };

  const _HandlerAccept = async () => {
    const result = await _putaccept({orderId: bookingDetails?.orderId});
    setIsLoading(true);
    if (result?.data) {
      console.log('result:', result?.data?.message);
      SimpleToast({title: result?.data?.message, isLong: true});
      // navigation.navigate(Routes.BOOKING_STACK);
      // navigation.navigate(Routes.HOME_SCREEN);
      navigation.navigate(Routes.BOTTOM_TAB_BAR);
      _getNotifications();
      setIsLoading(false);
    } else {
      console.log('catch error:accept', result?.response?.data?.message);
      SimpleToast({title: result?.response?.data?.message, isLong: true});
      setIsLoading(false);
    }
  };

  const _HandlerReject = async () => {
    const result = await _putReject(bookingDetails?.orderId);
    setIsLoading(true);
    if (result?.data) {
      console.log('reject response:', result?.data);
      SimpleToast({title: result?.data?.message, isLong: true});
      navigation.navigate(Routes.BOTTOM_TAB_BAR);
      _getNotifications();
      setIsLoading(false);
    } else {
      console.log('catch error:reject', result?.response?.data?.message);
      SimpleToast({title: result?.response?.data?.message, isLong: true});
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.WHITE}}>
      <CustomStatusBar />
      <MyHeader onPress={() => navigation.goBack()} title={'Order Invite'} />
      {isLoading ? (
        <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" color={COLORS.PINK} />
        </View>
      ) : (
        <View style={Styles.invitebox}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: COLORS.BLACK, fontSize: 14}}>Order ID:</Text>
            <Text style={{color: COLORS.BLACK, fontSize: 14, left: 5}}>
              {bookingDetails?.orderId}
            </Text>
          </View>
          <Text style={[Styles.textone, {color: COLORS.GRAY}]}>
            {'Store Details'}
          </Text>
          <Text style={[Styles.textone, {lineHeight: 19}]}>
            {'Store Address: '}
            {bookingDetails?.vendorId?.shopsDetails?.shopFullAddress}
          </Text>
          <Text style={[Styles.textone, {lineHeight: 19}]}>
            {'Shop Name: '}
            {bookingDetails?.vendorId?.shopsDetails?.shopName}
          </Text>
          <Text style={[Styles.textone, {lineHeight: 19}]}>
            {'Shops ID: '}
            {bookingDetails?.vendorId?.shopsId}
          </Text>
          <Text style={[Styles.textone, {lineHeight: 19}]}>
            {'Total Item: '}
            {bookingDetails?.orderedProducts?.length}
          </Text>
          <Text style={[Styles.textone]}>
            {'Contact Number: '}
            <Text style={{color: COLORS.BLUE, fontWeight: '400'}}>
              {bookingDetails?.vendorId?.mobileNumber}
            </Text>
          </Text>
          <View
            style={{
              borderBottomWidth: 1,
              marginTop: 10,
              borderColor: COLORS.GRAY,
            }}></View>
          <Text style={[Styles.textone, {color: COLORS.GRAY}]}>
            {'Customer Details'}
          </Text>
          <Text style={[Styles.textone, {lineHeight: 19}]}>
            {'Name: '}
            {bookingDetails?.user?.name}
          </Text>
          <Text style={[Styles.textone, {lineHeight: 19}]}>
            {'Delivery Address: '}
            {bookingDetails?.user?.address}
          </Text>
          <Text style={[Styles.textone]}>
            {'Contact Number: '}
            <Text style={{color: COLORS.BLUE}}>
              {bookingDetails?.user?.phone}
            </Text>
          </Text>
          <View
            style={{
              marginTop: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={[Styles.textone, {fontSize: 15}]}>
              {'Total Amount: '}₹ {bookingDetails?.totalAmount}
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <TouchableOpacity
                onPress={_HandlerAccept}
                activeOpacity={0.5}
                style={Styles.btnacceptReject}>
                <Text style={{color: COLORS.GREEN, fontWeight: '500'}}>
                  {'Accept'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={_HandlerReject}
                activeOpacity={0.5}
                style={[Styles.btnacceptReject, {borderColor: COLORS.BROWN}]}>
                <Text style={{color: COLORS.BROWN, fontWeight: '500'}}>
                  {'Reject'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  invitebox: {
    marginHorizontal: 10,
    marginVertical: 15,
    borderRadius: 5,
    elevation: 10,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: COLORS.GRAYDARK,
  },
  btnbox: {
    paddingVertical: 10,
    backgroundColor: COLORS.PINK,
    width: widthPixel(100),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginTop: 12,
  },
  textone: {
    color: COLORS.BLACK,
    fontSize: 14,
    marginTop: 3,
    fontWeight: '400',
    marginTop: 5,
  },
  btnacceptReject: {
    borderWidth: 1,
    width: widthPixel(90),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginRight: 10,
    height: heightPixel(40),
    borderColor: COLORS.GREEN,
  },
});
