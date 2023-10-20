import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MyHeader from '../Components/MyHeader';
import {COLORS} from '../utils/Colors';
import {fontPixel, widthPixel} from '../Components/Dimensions';
import Routes from '../Navigation/Routes';
import {SimpleToast, manlogo} from '../utils/Const';
import {_getallBokking} from '../utils/Controllers/EpicControllers';
import moment from 'moment';
export default function Booking({navigation}) {
  const [isbookingdata, setIsbookingdata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setmessage] = useState(null);

  useEffect(() => {
    _AllBooking();
  }, []);

  const _AllBooking = async () => {
    const result = await _getallBokking();
    setIsLoading(true);
    if (result?.data) {
      setIsLoading(false);
      console.log('result data------>>>>', result?.data?.result);
      setIsbookingdata(result?.data?.result);
    } else {
      setIsLoading(false);
      SimpleToast({title: result?.response?.data?.message, isLong: true});
      console.log(result?.response?.data?.message);
      setmessage(result?.response?.data?.message);
    }
  };

  return (
    <SafeAreaView style={Styles.CONTAINERMAIN}>
      <MyHeader onPress={() => navigation.goBack()} title={'My Booking'} />
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" color={COLORS.PINK} />
        </View>
      ) : message ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: COLORS.GRAY}}>data not found</Text>
        </View>
      ) : (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{paddingBottom: 20}}
          showsVerticalScrollIndicator={false}
          data={isbookingdata}
          renderItem={({item, index}) => (
            <View key={index} style={Styles.BOXMAIN}>
              <View style={Styles.JUSTIBOXMAIN}>
                <View style={Styles.MAINBOX}>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    {item?.user?.profilePic ? (
                      <Image
                        source={{uri: item?.user?.profilePic}}
                        style={Styles.MANLOGOSTYL}
                      />
                    ) : (
                      <Image source={manlogo} style={Styles.MANLOGOSTYL} />
                    )}
                    <View>
                      <Text style={Styles.QTEXTSTY}>{item?.user?.name}</Text>
                      <Text style={[Styles.QTEXTSTY, {marginVertical: 6}]}>
                        +91 {item?.user?.phone}
                      </Text>
                      <Text
                        numberOfLines={3}
                        style={[
                          Styles.QTEXTSTY,
                          {width: widthPixel(220), fontWeight: '400'},
                        ]}>
                        {/* Plot no. A, 40, Block A, Industrial Area, Sector 62,
                      Noida, Uttar Pradesh 201301 */}
                        {item?.currentAddress}
                      </Text>
                      <Text
                        numberOfLines={1}
                        style={[
                          Styles.QTEXTSTY,
                          {
                            marginTop: 5,
                            fontWeight: '400',
                          },
                        ]}>
                        Delivered Date:{' '}
                        {moment(item?.delieveredAt).format('DD/MM/YYYY')}
                      </Text>
                      <Text
                        style={[
                          Styles.QTEXTSTY,
                          {marginTop: 5, fontWeight: '400'},
                        ]}>
                        Delivered Time:{' '}
                        {moment(item?.delieveredAt).format('h:mm a')}
                      </Text>
                    </View>
                  </View>

                  <View>
                    <Text style={[Styles.QTEXTSTY, {left: widthPixel(20)}]}>
                      Order No.
                    </Text>
                    <Text style={Styles.ORDERIDTEXT}>{item?.orderId}</Text>
                    <Text style={Styles.QPAMENT}>Payment Status</Text>
                    <Text style={Styles.GREYTEXT}>Prepaid</Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate(Routes.VIEW_DETAILS)}
                      style={Styles.VIEWBTN}>
                      <Text style={Styles.VIEWTEXT}>View Details</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}
const Styles = StyleSheet.create({
  CONTAINERMAIN: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  BOXMAIN: {
    paddingVertical: 10,
    borderWidth: 1,
    marginVertical: 8,
    marginHorizontal: 10,
    borderColor: COLORS.PINK,
    borderRadius: 15,
  },
  MANLOGOSTYL: {
    height: 50,
    width: 50,
    resizeMode: 'cover',
    borderRadius: 50 / 2,
  },
  JUSTIBOXMAIN: {
    marginTop: 10,
  },
  MAINBOX: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  QTEXTSTY: {
    color: COLORS.BLACK,
    fontSize: fontPixel(16),
    fontWeight: '500',
    left: widthPixel(10),
  },
  QPAMENT: {
    color: COLORS.BLACK,
    fontSize: fontPixel(16),
    fontWeight: '500',
    left: widthPixel(20),
    marginTop: 30,
    paddingVertical: 5,
    width: widthPixel(100),
  },
  GREYTEXT: {
    color: COLORS.GRAYDARK,
    fontSize: fontPixel(16),
    left: widthPixel(20),
    fontWeight: '500',
  },
  ORDERIDTEXT: {
    color: COLORS.BLACK,
    fontSize: fontPixel(16),
    // left: widthPixel(20),
  },
  VIEWBTN: {
    backgroundColor: COLORS.PINK,
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginRight: widthPixel(10),
  },
  VIEWTEXT: {color: COLORS.WHITE, fontWeight: '500', fontSize: 11},
});
