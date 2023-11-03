import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../utils/Colors';
import {CustomStatusBar} from '../utils/Const';
import MyHeader from '../Components/MyHeader';
import {heightPixel} from '../Components/Dimensions';

export default function OrderInviteScreen({navigation, route}) {
  const usevendoritem = route.params;
  console.log('usevendoritem--------', usevendoritem);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.WHITE}}>
      <CustomStatusBar />
      <MyHeader onPress={() => navigation.goBack()} title={'Order Invite'} />
      <View style={Styles.invitebox}>
        <Text>OrderInviteScreen</Text>
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
    backgroundColor: COLORS.BLUE,
  },
});
