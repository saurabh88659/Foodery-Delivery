import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CustomStatusBar} from '../utils/Const';
import MyHeader from '../Components/MyHeader';
import {COLORS} from '../utils/Colors';
import {fontPixel, heightPixel, widthPixel} from '../Components/Dimensions';
import Routes from '../Navigation/Routes';
import moment from 'moment';
import {
  _getTransactionapi,
  _getWallet,
} from '../utils/Controllers/EpicControllers';
import {useIsFocused} from '@react-navigation/native';

export default function WalletScreen({navigation}) {
  const [accountDetails, setAccountDetails] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [transaction, setTransaction] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const IsFocused = useIsFocused();

  useEffect(() => {
    _getwallet();
  }, [IsFocused]);

  /**
   * The function `_getwallet` retrieves wallet data and updates the account details if successful,
   * otherwise it logs an error message.
   */
  const _getwallet = async () => {
    const result = await _getWallet();
    if (result?.data) {
      console.log('get waalte response:', result?.data);
      setAccountDetails(result?.data);
      // setLoading(false);
    } else {
      console.log('catch wallte data:', result?.response?.data?.message);
      // setLoading(false);
    }
  };

  const onrefresh = () => {
    setRefreshing(true);
    _getwallet();

    setTimeout(() => {
      setRefreshing(false);
    }, 400);
  };

  useEffect(() => {
    _getTransaction();
  }, []);

  const _getTransaction = async () => {
    setLoading(true);
    const result = await _getTransactionapi();
    if (result?.data) {
      setLoading(false);
      console.log(
        'get _getTransaction response:',
        JSON.stringify(result?.data),
      );
      setTransaction(result?.data.result);
      // setAccountDetails(result?.data.result);
      setLoading(false);
    } else {
      setLoading(false);

      console.log('catch wallte data:', result?.response?.data?.message);
      setLoading(false);
    }
  };

  const renderTransactionItem = (item, index) => {
    console.log('item of render TransactionItem>>>>  >', JSON.stringify(item));
    if (item.type === 'deducted') {
      return (
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'grey',
            // paddingVertical: 10,
            // paddingHorizontal: 15,
            marginHorizontal: 10,
            paddingTop: 25,
            paddingBottom: 10,
          }}
          key={index}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(
                Routes.TRANSACTIONDETAILSACCOUNTRECEIVESCREEN,
                {
                  data: item,
                },
              )
            }>
            <Text style={{color: '#000', marginBottom: 4, fontSize: 15}}>
              Account Number: XXXXXXXXXXXX
              {item.deliveryBoyId?.bankDetails?.accountNumber
                .toString()
                .slice(-4)}
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: '#000', marginBottom: 4, fontSize: 15}}>
                Bank Name: {item?.deliveryBoyId?.bankDetails?.bankName}
              </Text>
              <Text style={{fontSize: 16, color: 'red'}}>-{item.amount}</Text>
            </View>
            <Text style={{color: 'grey', fontSize: 13}}>
              {moment(item.createdAt).format('DD MMM, YYYY [at] hh:mm A')}
            </Text>
          </TouchableOpacity>
        </View>
      );
    } else if (item.type === 'receive') {
      return (
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'grey',
            // paddingVertical: 10,
            // paddingHorizontal: 15,
            marginHorizontal: 10,
            paddingTop: 20,
            paddingBottom: 7,
          }}
          key={index}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(
                Routes.TRANSACTIONDETAILSWALLETRECEIVESCREEN,
                {
                  data: item,
                },
              )
            }>
            <Text
              style={{
                color: '#000',
                marginBottom: 4,
                fontSize: 15,
                // backgroundColor: 'red',
              }}>
              Order ID : {item.orderId}
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    color: '#000',
                    marginBottom: 4,
                    fontSize: 15,
                    // backgroundColor: 'red',
                  }}>
                  Items :{/* {item.productName} */}
                </Text>
                {item.orderedProducts.map((item, index) => {
                  return (
                    <Text
                      key={index}
                      numberOfLines={1}
                      style={{
                        color: '#000',
                        marginBottom: 4,
                        fontSize: 15,
                        left: 3,
                        width: '78%',
                      }}>
                      {item.productId.productName}
                    </Text>
                  );
                })}
              </View>

              <Text style={{color: 'green', marginBottom: 4, fontSize: 16}}>
                +{item.deliveryFee}
              </Text>
            </View>
            <Text style={{color: 'grey', fontSize: 13}}>
              {moment(item.createdAt).format('DD MMM, YYYY [at] hh:mm A')}
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={Styles.Contenenr}>
      <CustomStatusBar />
      <MyHeader onPress={() => navigation.goBack()} title={'Wallet'} />
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" color={COLORS.PINK} />
        </View>
      ) : (
        <View>
          <View style={Styles.BoxMain}>
            <View style={Styles.ProfileBox}>
              {accountDetails?.profilePic ? (
                <Image
                  source={{uri: accountDetails?.profilePic}}
                  style={Styles.image}
                />
              ) : (
                <View style={{}}>
                  <Text style={{color: COLORS.GRAYDARK, fontSize: 25}}>#</Text>
                </View>
              )}
            </View>

            <Text style={Styles.TextTitle}>
              {accountDetails?.firstName + ' ' + accountDetails?.lastName}
            </Text>
          </View>
          <View style={Styles.Paybox}>
            <Text style={Styles.AmountTitle}>
              ₹ {accountDetails?.deliveryBoyBalance}
            </Text>
            <Text style={Styles.EarningTitle}>Total Earning</Text>
            <View style={{alignItems: 'center', marginTop: 40}}>
              <Text style={Styles.SubTitleNot}>
                Note: We do settlement on Monday Every week
              </Text>
            </View>
          </View>

          {/* <View style={Styles.Paymentbox}>
            <Text style={Styles.SubTitle1}>Payment History</Text>
            <View style={Styles.box}>
              <Text style={Styles.PayTitle}>Payment Recived</Text>
              <View style={Styles.Row}>
                <Text style={Styles.SubTitle2}>Account Number :</Text>
                <Text style={[Styles.SubTitle2, {paddingLeft: 10}]}>
                  {accountDetails?.bankDetails?.accountNumber
                    .toString()
                    .split('', 4)}
                </Text>
              </View>
              <View style={Styles.Row}>
                <Text style={Styles.SubTitle2}>Branch Name :</Text>
                <Text style={[Styles.SubTitle2, {paddingLeft: 10}]}>
                  {accountDetails?.bankDetails?.bankName}
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
                  Amount Credit: ₹ 0{' '}
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(Routes.TRANSACTION_DETAILS)
                  }
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
          </View> */}

          {/* {====================================transaction=================================================} */}
          {transaction.length > 0 ? (
            <ScrollView
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onrefresh} />
              }>
              <View style={{marginBottom: '100%'}}>
                {transaction.map((item, index) =>
                  renderTransactionItem(item, index),
                )}
              </View>
            </ScrollView>
          ) : (
            <View
              style={{
                height: '75%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: COLORS.DARK_GRAY,
                  fontSize: 21,
                  fontWeight: '600',
                }}>
                No transactions available
              </Text>
            </View>
          )}
        </View>
      )}
      {/* {====================================transaction=================================================} */}
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
