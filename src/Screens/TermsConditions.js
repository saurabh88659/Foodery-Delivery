import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import MyHeader from '../Components/MyHeader';
import {COLORS} from '../utils/Colors';
import {fontPixel} from '../Components/Dimensions';
import {recordbutton} from '../utils/Const';

export default function TermsConditions({navigation}) {
  return (
    <SafeAreaView style={Styles.CONTAINERMAIN}>
      <MyHeader
        onPress={() => navigation.goBack()}
        title={'Terms and Conditions'}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Styles.BOXONE}>
          <Image source={recordbutton} style={Styles.DOTS} />
          <Text style={Styles.TEXTONE}>
            Grocery delivery apps are trending among people and it won’t be
            wrong to say that the on-demand grocery industry will continue to
            grow. The benefits and ease grocery shopping apps offer to
            customers,
          </Text>
        </View>
        <View style={[Styles.BOXONE, {marginVertical: 3}]}>
          <Image source={recordbutton} style={Styles.DOTS} />
          <Text style={Styles.TEXTONE}>
            Grocery delivery apps are trending among people and it won’t be
            wrong to say that the on-demand grocery industry will continue to
            grow. The benefits and ease grocery shopping apps offer to
            customers,
          </Text>
        </View>
        <View style={[Styles.BOXONE, {marginVertical: 10}]}>
          <Image source={recordbutton} style={Styles.DOTS} />
          <Text style={Styles.TEXTONE}>
            Grocery delivery apps are trending among people and it won’t be
            wrong to say that the on-demand grocery industry will continue to
            grow. The benefits and ease grocery shopping apps offer to
            customers,
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  CONTAINERMAIN: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  BOXONE: {
    marginHorizontal: 15,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  DOTS: {height: 10, width: 10, marginTop: 4},
  TEXTONE: {
    fontSize: fontPixel(15),
    color: COLORS.BLACK,
    paddingLeft: 5,
  },
});
