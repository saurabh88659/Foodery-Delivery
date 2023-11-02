import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {COLORS} from '../utils/Colors';
import {CustomStatusBar} from '../utils/Const';
import MyHeader from '../Components/MyHeader';

export default function Notifications({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.WHITE}}>
      <CustomStatusBar />
      <MyHeader onPress={() => navigation.goBack()} title={'Notifications'} />
      <View style={{marginHorizontal: 20, marginVertical: 20}}>
        <Text style={{color: COLORS.BLACK}}>Notifications</Text>
      </View>
    </SafeAreaView>
  );
}
