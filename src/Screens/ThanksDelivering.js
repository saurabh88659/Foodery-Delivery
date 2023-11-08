import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../utils/Colors';
import MyHeader from '../Components/MyHeader';
import Lottie from 'lottie-react-native';
import {CustomStatusBar, thankyoudelivering} from '../utils/Const';
import {fontPixel, heightPixel} from '../Components/Dimensions';
import Button from '../Components/Button';
import Routes from '../Navigation/Routes';

export default function ThanksDelivering({navigation}) {
  return (
    <SafeAreaView style={Styles.CONTAINER}>
      <CustomStatusBar />
      <MyHeader onPress={() => navigation.goBack()} title={'Verification'} />
      <Lottie
        source={thankyoudelivering}
        autoPlay
        loop={true}
        style={{height: heightPixel(300), marginTop: 30}}
      />
      <Text
        style={{
          fontSize: fontPixel(30),
          alignSelf: 'center',
          color: COLORS.BLACK,
          textAlign: 'center',
          fontWeight: '500',
        }}>
        Thank you for delivering Your order on time
      </Text>
      <Text
        style={{
          fontSize: fontPixel(30),
          alignSelf: 'center',
          color: COLORS.BLACK,
          textAlign: 'center',
          fontWeight: '500',
          top: heightPixel(20),
        }}>
        keep up the good work!
      </Text>
      <View style={{justifyContent: 'flex-end', flex: 1, marginBottom: 20}}>
        <Button
          title={'Proceed for selfie verification'}
          onPress={() => navigation.navigate(Routes.VERIFICATION_SELFIE)}
        />
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  CONTAINER: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
});
