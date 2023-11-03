import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {CustomStatusBar} from '../utils/Const';
import MyHeader from '../Components/MyHeader';
import {COLORS} from '../utils/Colors';
import {fontPixel, heightPixel, widthPixel} from '../Components/Dimensions';
import Routes from '../Navigation/Routes';
import {_getWallet} from '../utils/Controllers/EpicControllers';

export default function WalletScreen({navigation}) {
  useEffect(() => {
    _getwallet();
  }, []);

  const _getwallet = async () => {
    const result = await _getWallet();
    if (result?.data) {
      console.log('get waalte response:', result?.data);
    } else {
      console.log('catch wallte data:', result?.response?.data?.message);
    }
  };
  return (
    <SafeAreaView style={Styles.Contenenr}>
      <CustomStatusBar />
      <MyHeader onPress={() => navigation.goBack()} title={'Wallet'} />
      <View style={Styles.BoxMain}>
        <View style={Styles.ProfileBox}>
          <Image source={require('../Assets/Ravi.jpg')} style={Styles.image} />
        </View>
        <Text style={Styles.TextTitle}>Ravi Rai</Text>
      </View>
      <View style={Styles.Paybox}>
        <Text style={Styles.AmountTitle}>₹ 74,849</Text>
        <Text style={Styles.EarningTitle}>Total Earning</Text>
        <View style={{alignItems: 'center', marginTop: 40}}>
          <Text style={Styles.SubTitleNot}>
            Note: We do settlement on Monday Every week
          </Text>
        </View>
      </View>
      <View style={Styles.Paymentbox}>
        <Text style={Styles.SubTitle1}>Payment History</Text>
        <View style={Styles.box}>
          <Text style={Styles.PayTitle}>Payment Recived</Text>

          <View style={Styles.Row}>
            <Text style={Styles.SubTitle2}>Account Number :</Text>
            <Text style={[Styles.SubTitle2, {paddingLeft: 10}]}>
              ***********3939
            </Text>
          </View>
          <View style={Styles.Row}>
            <Text style={Styles.SubTitle2}>Branch Name :</Text>
            <Text style={[Styles.SubTitle2, {paddingLeft: 10}]}>
              Kotak Mahindara
            </Text>
          </View>
          <View
            style={[
              Styles.Row,
              {
                borderBottomWidth: 1,
                borderColor: COLORS.GRAY,
                paddingVertical: 10,
                top: -10,
              },
            ]}>
            <Text style={Styles.SubTitle2}>Service Days :</Text>
            <Text style={[Styles.SubTitle2, {paddingLeft: 10}]}>
              17 April 2023 to 22 April 2023
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{color: COLORS.BLACK, fontSize: 12}}>
              Amount Credit: ₹2459{' '}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(Routes.TRANSACTION_DETAILS)}
              activeOpacity={0.5}
              style={{
                paddingVertical: 10,
                borderWidth: 1,
                width: widthPixel(100),
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                borderColor: COLORS.GRAY,
              }}>
              <Text style={{color: COLORS.BLACK, fontSize: 12}}>
                View Details
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  Contenenr: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  BoxMain: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  ProfileBox: {
    width: widthPixel(100),
    height: heightPixel(100),
    borderWidth: 2,
    borderRadius: 100 / 2,
    borderColor: COLORS.PINK,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextTitle: {
    fontSize: fontPixel(17),
    color: COLORS.BLACK,
    paddingLeft: 10,
    fontWeight: '500',
  },
  image: {
    height: heightPixel(96),
    width: widthPixel(96),
    borderRadius: 100 / 2,
  },
  Paybox: {
    marginHorizontal: 15,
    justifyContent: 'flex-start',
  },
  AmountTitle: {
    fontSize: fontPixel(32),
    fontWeight: '500',
    color: COLORS.BLACK,
  },
  EarningTitle: {
    color: COLORS.GRAY,
    paddingLeft: widthPixel(15),
    fontSize: 14,
  },
  SubTitleNot: {
    color: COLORS.BLUE,
    paddingLeft: widthPixel(15),
    fontSize: 13,
    fontWeight: '400',
  },
  Paymentbox: {
    marginTop: 40,
    marginHorizontal: 15,
  },
  SubTitle1: {
    color: COLORS.BLACK,
    fontSize: fontPixel(15),
    fontWeight: '500',
  },
  box: {
    backgroundColor: COLORS.WHITE,
    marginTop: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: COLORS.GRAY,
    borderRadius: 6,
    elevation: 5,
  },
  PayTitle: {
    color: COLORS.GREEN,
    fontSize: fontPixel(14),
    fontWeight: '400',
  },
  SubTitle2: {
    color: COLORS.BLACK,
    fontSize: 12,
    marginTop: 5,
  },
  Row: {flexDirection: 'row', justifyContent: 'flex-start'},
});
