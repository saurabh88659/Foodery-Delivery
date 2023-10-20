import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';
import {_getProfile} from '../utils/Controllers/EpicControllers';
import {useIsFocused} from '@react-navigation/native';

export default function Profile({navigation}) {
  const [modalVisibleone, setModalVisibleone] = useState(false);
  const [isProfiledata, setIsProfiledata] = useState('');
  const isFocused = useIsFocused();

  const _Logout = async () => {
    await AsyncStorage.removeItem('token');
    navigation.replace(Routes.LOG_IN_SCREEN);
  };

  useEffect(() => {
    if (isFocused) {
      _ProfileData();
    }
  }, [isFocused]);

  const _ProfileData = async () => {
    const result = await _getProfile();
    if (result?.data) {
      console.log('profile response data', result?.data?.result);
      setIsProfiledata(result?.data?.result);
    } else {
      console.log('Profile catch error', result?.data);
    }
  };

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
              {isProfiledata.verification?.selfie1 ? (
                <Image
                  source={{uri: isProfiledata.verification?.selfie1}}
                  style={Styles.IMAGE}
                />
              ) : (
                <Image
                  source={require('../Assets/man.png')}
                  style={Styles.IMAGE}
                />
              )}
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
          onPress={() => navigation.navigate(Routes.BOOKING_STACK)}
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
          onPress={() => navigation.navigate(Routes.ABOUT_US)}
          activeOpacity={0.5}
          style={[Styles.QBOXONE, {marginTop: pixelSizeVertical(20)}]}>
          <MaterialIcon title={'error'} size={30} IconColor={COLORS.PINK} />
          <Text style={Styles.QTEXTONE}>Abouts us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(Routes.TERMS_CONDITIONS)}
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
          onPress={() => navigation.navigate(Routes.PRIVACY_POLICY)}
          activeOpacity={0.5}
          style={[Styles.QBOXONE, {marginTop: pixelSizeVertical(20)}]}>
          <MaterialIcon title={'beenhere'} size={30} IconColor={COLORS.PINK} />
          <Text style={Styles.QTEXTONE}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={_Logout}
          onPress={() => setModalVisibleone(!modalVisibleone)}
          activeOpacity={0.5}
          style={[Styles.QBOXONE, {marginTop: pixelSizeVertical(20)}]}>
          <Feathers title={'power'} size={30} IconColor={COLORS.PINK} />
          <Text style={Styles.QTEXTONE}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
      <Modal
        transparent={true}
        isVisible={modalVisibleone}
        animationInTiming={1000}
        animationOutTiming={1000}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={1000}
        onRequestClose={() => {
          setModalVisibleone(false);
        }}>
        <View style={Styles.centeredView}>
          <View style={Styles.modalView}>
            <Text style={Styles.Modalsubtext}>
              Are you sure you want to LogOut?
            </Text>
            <View style={Styles.modalmaincon}>
              <TouchableOpacity
                onPress={_Logout}
                style={{
                  paddingVertical: 8,
                  backgroundColor: COLORS.PINK,
                  width: widthPixel(90),
                  alignItems: 'center',
                  borderRadius: 5,
                }}>
                <Text
                  style={{
                    color: COLORS.WHITE,
                    fontSize: 15,
                    fontWeight: '500',
                  }}>
                  Yes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setModalVisibleone(!modalVisibleone)}
                style={{
                  paddingVertical: 8,
                  width: widthPixel(90),
                  alignItems: 'center',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: COLORS.PINK,
                }}>
                <Text
                  style={{color: COLORS.PINK, fontWeight: '500', fontSize: 15}}>
                  No
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
    backgroundColor: COLORS.PINK,
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
  modalView: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    borderRadius: 7,
    padding: 25,
    shadowColor: '#000',
    shadowRadius: 4,
    elevation: 5,
  },
  Modalsubtext: {
    alignSelf: 'center',
    color: COLORS.BLACK,
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'center',
  },
  modalmaincon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 8,
  },
});
