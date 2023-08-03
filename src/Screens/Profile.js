import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
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
  Feathers,
  FontAwesome,
  MaterialCommunityIcon,
  MaterialIcon,
} from '../utils/Const';
import Routes from '../Navigation/Routes';

export default function Profile({navigation}) {
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
          <View style={{alignItems: 'center', margin: 'auto'}}>
            <View style={Styles.IMAGEBOX}>
              <Image
                source={require('../Assets/Ravi.jpg')}
                style={Styles.IMAGE}
              />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate(Routes.EDIT_PROFILE)}
              activeOpacity={0.6}
              style={{left: widthPixel(140), top: heightPixel(-25)}}>
              <Feathers title={'edit'} size={25} IconColor={COLORS.WHITE} />
            </TouchableOpacity>
          </View>
        </LinearGradient>
        <TouchableOpacity activeOpacity={0.5} style={Styles.QBOXONE}>
          <MaterialCommunityIcon
            title={'wallet'}
            size={30}
            IconColor={COLORS.PINK}
          />
          <Text style={Styles.QTEXTONE}>Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={()=>navigation.naviagte(Routes)}
          activeOpacity={0.5}
          style={[Styles.QBOXONE, {marginTop: pixelSizeVertical(20)}]}>
          <FontAwesome
            title={'calendar-alt'}
            size={30}
            IconColor={COLORS.PINK}
          />
          <Text style={Styles.QTEXTONE}>My Booking</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={[Styles.QBOXONE, {marginTop: pixelSizeVertical(20)}]}>
          <MaterialIcon title={'error'} size={30} IconColor={COLORS.PINK} />
          <Text style={Styles.QTEXTONE}>Abouts us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={[Styles.QBOXONE, {marginTop: pixelSizeVertical(20)}]}>
          <MaterialIcon
            title={'assignment'}
            size={30}
            IconColor={COLORS.PINK}
          />
          <Text style={Styles.QTEXTONE}>Terms & Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={[Styles.QBOXONE, {marginTop: pixelSizeVertical(20)}]}>
          <MaterialIcon title={'beenhere'} size={30} IconColor={COLORS.PINK} />
          <Text style={Styles.QTEXTONE}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={[Styles.QBOXONE, {marginTop: pixelSizeVertical(20)}]}>
          <Feathers title={'power'} size={30} IconColor={COLORS.PINK} />
          <Text style={Styles.QTEXTONE}>Logout</Text>
        </TouchableOpacity>
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
    top: heightPixel(90),
    borderRadius: 130 / 2,
    borderColor: COLORS.PINK,
    alignItems: 'center',
    justifyContent: 'center',
  },
  IMAGE: {
    height: 122,
    width: 122,
    resizeMode: 'contain',
    borderRadius: 130 / 2,
  },
  QBOXONE: {
    height: heightPixel(70),
    marginTop: pixelSizeVertical(100),
    marginHorizontal: 20,
    elevation: 6,
    borderRadius: 1,
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  QTEXTONE: {
    fontSize: fontPixel(18),
    color: COLORS.BLACK,
    paddingLeft: widthPixel(25),
    fontWeight: '500',
  },
});
