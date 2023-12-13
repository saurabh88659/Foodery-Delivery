import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import moment from 'moment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../utils/Colors';
import {CustomStatusBar} from '../utils/Const';
import MyHeader from '../Components/MyHeader';

const TransactionDetailsAccountReceiveScreen = ({navigation, route}) => {
  const [accountTransactionDetails, setAccountTransactionDetails] =
    useState('');
  const Transaction = route.params.data;
  console.log('TransactionId====>>>====>', Transaction);

  return (
    <View
      style={{
        height: '100%',
        backgroundColor: '#fff',
      }}>
      <CustomStatusBar />
      <MyHeader
        onPress={() => navigation.goBack()}
        title={'Transaction Details'}
      />
      <View
        style={{
          paddingHorizontal: 10,
          // elevation: 5,
          // marginTop: 25,

          // marginHorizontal: 15,
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            borderBottomColor: COLORS.DARK_GRAY,
            borderBottomWidth: 1,
            paddingTop: 28,
            paddingBottom: 18,
          }}>
          <Text style={{color: '#000', fontSize: 19, marginBottom: 2}}>
            Amount
          </Text>
          <Text style={{color: '#000', fontSize: 27, marginBottom: 5}}>
            ₹{Transaction.amount}
          </Text>
          <Text style={{color: COLORS.DARK_GRAY, fontSize: 11.5}}>
            Debited from your wallet and crediet into your bank account
          </Text>
        </View>
        <View
          style={{
            backgroundColor: COLORS.GRAYLIGHT,
            borderRadius: 5,
            marginTop: 20,
            elevation: 6,
            // paddingTop: 18,
            // paddingHorizontal: 10,
          }}>
          <View
            style={{
              borderBottomColor: COLORS.DARK_GRAY,
              borderBottomWidth: 1,
              paddingHorizontal: 10,
              paddingTop: 20,
              paddingBottom: 18,
            }}>
            <Text style={{color: '#000', fontSize: 18.5}}>From</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 20, color: '#000', fontWeight: '400'}}>
                Foodery Payment
              </Text>
              <TouchableOpacity
                activeOpacity={1}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                  backgroundColor: '#fff',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: COLORS.DARK_GRAY,
                }}>
                <FontAwesome name={'opencart'} size={20} color={'green'} />
                {/* <Text style={{color: '#000'}}>Logo</Text> */}
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{paddingTop: 15, paddingHorizontal: 10, paddingBottom: 30}}>
            <Text style={{color: '#000', fontSize: 18.5}}>TO</Text>
            <Text style={{fontSize: 20, color: '#000', fontWeight: '400'}}>
              {Transaction?.deliveryBoyId?.bankDetails.accountHolder}
            </Text>
            <Text style={{color: '#000', marginBottom: 25, fontSize: 16}}>
              {Transaction?.deliveryBoyId?.bankDetails?.bankName}-{' '}
              {Transaction?.deliveryBoyId?.bankDetails?.accountNumber
                .toString()
                .slice(-4)}
              {/* Punjab national bank - 9856 */}
            </Text>
            <Text style={{color: '#000', fontSize: 15.5}}>
              Recived at{' '}
              {moment(accountTransactionDetails.createdAt).format(
                'HH:mm A, DD MMM YYYY',
              )}
              {/* 06:30, 21 NOV 2023 */}
            </Text>
            <Text style={{color: '#000', fontSize: 15.5}}>
              Transaction Id: {Transaction.transactionId}
            </Text>
            {/* <Text style={{color: '#000', fontSize: 15.5}}>
              UPI Ref No: 55241671662
            </Text> */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default TransactionDetailsAccountReceiveScreen;
