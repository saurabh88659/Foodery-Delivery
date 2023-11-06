import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../utils/Colors';
import {CustomStatusBar} from '../utils/Const';
import MyHeader from '../Components/MyHeader';
import {heightPixel, widthPixel} from '../Components/Dimensions';
import {_getOrderNotifications} from '../utils/Controllers/EpicControllers';

export default function OrderInviteScreen({navigation, route}) {
  const [bookingDetails, setbookingDetails] = useState(null);
  const usevendoritem = route.params;
  console.log('usevendoritem--------', usevendoritem?.data?.orderId);

  useEffect(() => {
    _getNotifications();
  }, []);

  const _getNotifications = async () => {
    const result = await _getOrderNotifications(usevendoritem?.data?.orderId);
    if (result?.data) {
      console.log('response data:', result?.data?.result);
      setbookingDetails(result?.data?.result);
    } else {
      console.log('catch error booking:', result?.response?.data?.message);
    }
  };

  // console.log('bookingDetails===>>', bookingDetails?.orderId);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.WHITE}}>
      <CustomStatusBar />
      <MyHeader onPress={() => navigation.goBack()} title={'Order Invite'} />
      <View style={Styles.invitebox}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: COLORS.BLACK, fontSize: 15}}>Order Id:</Text>
          <Text style={{color: COLORS.BLACK, fontSize: 15, left: 5}}>
            {bookingDetails?.orderId}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // marginHorizontal: 20,
          }}>
          <TouchableOpacity style={Styles.btnbox}>
            <Text style={{color: COLORS.WHITE}}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.btnbox}>
            <Text style={{color: COLORS.WHITE}}>Rejected</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  invitebox: {
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 5,
    height: heightPixel(100),
    elevation: 10,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 10,
    paddingVertical: 5,
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
});
