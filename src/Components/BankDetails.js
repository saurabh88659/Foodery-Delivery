import {
    View,
    Text,
    SafeAreaView,
    StatusBar,
    ScrollView,
    RefreshControl,
    TouchableOpacity,
    Stylesheet,
    StyleSheet,
    Image,
    TextInput,
  } from 'react-native';
  import React, {useState} from 'react';
  import DocumentPicker from 'react-native-document-picker';
  import Colors from '../Utils/Color';
  
  import {format} from 'date-fns';
  import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
  import Icon from 'react-native-vector-icons/Entypo';
  import {Dropdown} from 'react-native-element-dropdown';
  import StepIndicator from 'react-native-step-indicator';
  // import CustomButton from '../Components/CustomButton';
  import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
  } from 'react-native-responsive-dimensions';
  import CustomRadioButton from './CustomRadioButton';
  import ImagePicker from 'react-native-image-crop-picker';
  // {onPress, selected, children}
  
  export default function Bankdetails() {
    const [bankName, onBankName] = useState('');
    const [ifscCode, onIfscCode] = useState('');
    const [accountHolder, onAccountHolder] = useState('');
    const [bankAccount, onBankAccount] = useState('');
    return (
      <View>
        <Text
          style={{
            color: Colors.BLACK,
            fontWeight: '500',
            fontSize: 14,
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}>
          Bank Account Number
        </Text>
        <TextInput
          style={{
            backgroundColor: Colors.WHITE,
            marginHorizontal: 10,
            height: 50,
            borderRadius: 4,
            paddingLeft: 8,
            color: '#000',
            elevation: 2,
          }}
          keyboardType="number-pad"
          onChangeText={onBankAccount}
          value={bankAccount}
        />
  
        <Text
          style={{
            color: Colors.BLACK,
            fontWeight: '500',
            fontSize: 14,
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}>
          Account Holder Name
        </Text>
        <TextInput
          style={{
            backgroundColor: Colors.WHITE,
            marginHorizontal: 10,
            height: 50,
            borderRadius: 4,
            paddingLeft: 8,
            color: '#000',
            elevation: 2,
          }}
          onChangeText={onAccountHolder}
          value={accountHolder}
        />
  
        <Text
          style={{
            color: Colors.BLACK,
            fontWeight: '500',
            fontSize: 14,
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}>
          IFSC Code
        </Text>
        <TextInput
          style={{
            backgroundColor: Colors.WHITE,
            marginHorizontal: 10,
            height: 50,
            borderRadius: 4,
            paddingLeft: 8,
            color: '#000',
            elevation: 2,
          }}
          onChangeText={onIfscCode}
          value={ifscCode}
        />
  
        <Text
          style={{
            color: Colors.BLACK,
            fontWeight: '500',
            fontSize: 14,
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}>
          Bank Name
        </Text>
        <TextInput
          style={{
            backgroundColor: Colors.WHITE,
            marginHorizontal: 10,
            height: 50,
            borderRadius: 4,
            paddingLeft: 8,
            color: '#000',
            elevation: 2,
          }}
          onChangeText={onBankName}
          value={bankName}
        />
  
        <Text
          style={{
            color: Colors.BLACK,
            fontWeight: 'bold',
            fontSize: 16,
            alignSelf: 'center',
            paddingVertical: 10,
          }}>
          OR
        </Text>
  
        <View
          style={{
            //backgroundColor: 'green',
            width: responsiveWidth(92),
            height: responsiveHeight(10),
            alignSelf: 'center',
          }}>
          <Text
            style={{
              color: Colors.BLACK,
              fontWeight: '500',
              fontSize: 12,
              textAlign: 'left',
              paddingVertical: 5,
              marginLeft: 2,
            }}>
            Enter UPI ID
          </Text>
  
          <View
            style={{
              //backgroundColor: 'pink',
              width: responsiveWidth(92),
              height: responsiveHeight(6),
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TextInput
              placeholder="ex.mobilenumber@upi"
              keyboardType="email-address"
              style={{
                backgroundColor: Colors.WHITE,
  
                height: responsiveHeight(5),
                width: responsiveWidth(70),
                borderRadius: 4,
                paddingLeft: 8,
  
                color: '#000',
                //elevation: 2,
                borderWidth: 1,
                borderColor: 'gray',
                alignItems: 'center',
                fontSize: responsiveFontSize(1.5),
              }}
              onChangeText={onIfscCode}
              value={ifscCode}
            />
            <TouchableOpacity
              style={{
                backgroundColor: Colors.DARK_GREEN,
                width: responsiveWidth(20),
                height: responsiveHeight(4),
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: Colors.BLACK,
                  fontWeight: 'bold',
                  fontSize: 12,
                  // textAlign: 'center',
                  color: '#fff',
                }}>
                Verify
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  const styles = StyleSheet.create({});
  