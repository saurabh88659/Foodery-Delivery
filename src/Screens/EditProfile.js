import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';
import {COLORS} from '../utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {
  fontPixel,
  heightPixel,
  pixelSizeVertical,
  widthPixel,
} from '../Components/Dimensions';
import {
  FontAwesome,
  FontAwesome6s,
  Ionicon,
  MaterialIcon,
} from '../utils/Const';
import Button from '../Components/Button';

export default function EditProfile({navigation}) {
  return (
    <SafeAreaView style={Styles.CONTAINERMAIN}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: heightPixel(30)}}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[COLORS.PURPLE, COLORS.PINK]}
          style={Styles.linearGradient}>
          <View style={{}}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              activeOpacity={0.6}
              style={Styles.BACKICONSTYL}>
              <Ionicon
                title="arrow-back-outline"
                size={30}
                IconColor={COLORS.WHITE}
              />
            </TouchableOpacity>
            <View style={Styles.IMAGEBOX}>
              <Image
                source={require('../Assets/Ravi.jpg')}
                style={Styles.IMAGE}
              />
            </View>
          </View>
        </LinearGradient>
        <View style={Styles.sectionStyle}>
          <FontAwesome title="user" size={25} IconColor={COLORS.PINK} />
          <TextInput
            style={Styles.input}
            placeholder="Phone or Email"
            placeholderTextColor="#888888"
            // onChangeText={handleChange('email')}
            // onBlur={handleBlur('email')}
            // value={values.email}
          />
        </View>
        <View style={[Styles.sectionStyle, {marginTop: pixelSizeVertical(20)}]}>
          <MaterialIcon title="redeem" size={25} IconColor={COLORS.PINK} />
          <TextInput
            style={Styles.input}
            placeholder="Phone or Email"
            placeholderTextColor="#888888"
            // onChangeText={handleChange('email')}
            // onBlur={handleBlur('email')}
            // value={values.email}
          />
        </View>
        <View style={[Styles.sectionStyle, {marginTop: pixelSizeVertical(20)}]}>
          <MaterialIcon title="domain" size={25} IconColor={COLORS.PINK} />
          <TextInput
            style={Styles.input}
            placeholder="Phone or Email"
            placeholderTextColor="#888888"
            // onChangeText={handleChange('email')}
            // onBlur={handleBlur('email')}
            // value={values.email}
          />
        </View>
        <View style={[Styles.sectionStyle, {marginTop: pixelSizeVertical(20)}]}>
          <FontAwesome6s
            title="map-location-dot"
            size={25}
            IconColor={COLORS.PINK}
          />
          <TextInput
            style={Styles.input}
            placeholder="Phone or Email"
            placeholderTextColor="#888888"
            // onChangeText={handleChange('email')}
            // onBlur={handleBlur('email')}
            // value={values.email}
          />
        </View>
        <View style={[Styles.sectionStyle, {marginTop: pixelSizeVertical(20)}]}>
          <MaterialIcon
            title="location-city"
            size={25}
            IconColor={COLORS.PINK}
          />
          <TextInput
            style={Styles.input}
            placeholder="Phone or Email"
            placeholderTextColor="#888888"
            // onChangeText={handleChange('email')}
            // onBlur={handleBlur('email')}
            // value={values.email}
          />
        </View>
        <View style={{marginVertical: heightPixel(30)}}>
          <Button title={'Save Changes'} />
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
  linearGradient: {
    paddingVertical: 20,
    height: heightPixel(200),
  },
  IMAGEBOX: {
    height: 130,
    width: 130,
    borderWidth: 4,
    top: heightPixel(70),
    borderRadius: 130 / 2,
    borderColor: COLORS.PINK,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  IMAGE: {
    height: 122,
    width: 122,
    resizeMode: 'contain',
    borderRadius: 130 / 2,
  },
  QBOXONE: {
    marginTop: pixelSizeVertical(100),
    paddingHorizontal: 20,
  },
  QTEXTONE: {
    fontSize: fontPixel(18),
    color: COLORS.BLACK,
    paddingLeft: widthPixel(25),
    fontWeight: '500',
  },
  BACKICONSTYL: {
    top: heightPixel(55),
    justifyContent: 'center',
    alignItems: 'cenetr',
    marginHorizontal: 20,
    width: 70,
  },
  sectionStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    marginHorizontal: 15,
    borderRadius: 5,
    marginTop: pixelSizeVertical(100),
    paddingHorizontal: 20,
    // elevation: 1,
    borderWidth: 1,
    borderColor: COLORS.PINK,
  },
  input: {
    height: 40,
    color: COLORS.BLACK,
    fontSize: 15,
    paddingHorizontal: 20,
  },
});
