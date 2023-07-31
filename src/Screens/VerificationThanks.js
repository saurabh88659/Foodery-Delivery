import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../utils/Colors';
import MyHeader from '../Components/MyHeader';
import Lottie from 'lottie-react-native';
import {thankyou} from '../utils/Const';
import {fontPixel, heightPixel} from '../Components/Dimensions';
import Button from '../Components/Button';
import Routes from '../Navigation/Routes';

export default function VerificationThanks({navigation}) {
  return (
    <SafeAreaView style={Styles.CONTAINER}>
      <MyHeader onPress={() => navigation.goBack()} title={'Verification'} />
      <Lottie
        source={thankyou}
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
        }}>
        Your selfie has been verified Thank You!
      </Text>
      <View style={{justifyContent: 'flex-end', flex: 1, marginBottom: 20}}>
        <Button
          title={'Go Back to Main Menu'}
          onPress={() => navigation.navigate(Routes.HOME_SCREEN)}
          //   onPress={onGallary}
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
