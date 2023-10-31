import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../utils/Colors';
import {fontPixel, heightPixel, widthPixel} from '../Components/Dimensions';
import Routes from '../Navigation/Routes';
import {_getStorage} from '../utils/Storage';
import moment from 'moment';
import {_getOrderHistory} from '../utils/Controllers/EpicControllers';
import {SimpleToast, manlogo} from '../utils/Const';

export default function DeliveryServices({navigation}) {
  const [isServicesData, setIsServicesData] = useState([]);
  const [refresh, setRfresh] = useState(false);
  const [message, setmessage] = useState('');

  setTimeout(() => {
    setRfresh(false);
  }, 5000);

  useEffect(() => {
    _Services_Delivery();
  }, []);

  const _Services_Delivery = async () => {
    const result = await _getOrderHistory();
    if (result?.data) {
      console.log('result', result?.data?.message);
      setIsServicesData(result?.data?.result);
      SimpleToast({title: result?.data?.message, isLong: true});
    } else {
      SimpleToast({title: result?.response?.data?.message, isLong: true});
      setmessage(result?.response?.data?.message);
    }
  };

  return (
    <SafeAreaView style={Styles.CONTAINERMAIN}>
      {message ? (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Text style={{color: COLORS.GRAY}}>data not found</Text>
        </View>
      ) : (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refresh}
              onRefresh={_Services_Delivery}
              tintColor={COLORS.GREEN}
              colors={[COLORS.PINK]}
            />
          }
          data={isServicesData}
          renderItem={({item, index}) => (
            <View style={Styles.BOXMAIN}>
              <View style={Styles.JUSTIBOXMAIN}>
                <View style={Styles.MAINBOX}>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        height: heightPixel(60),
                        width: widthPixel(50),
                        borderRadius: 50,
                      }}>
                      {item?.user?.profilePic ? (
                        <Image
                          source={{uri: item?.user?.profilePic}}
                          style={Styles.JUSTISTYLES}
                        />
                      ) : (
                        <Image source={manlogo} style={Styles.JUSTISTYLES} />
                      )}
                    </View>
                    <View>
                      <Text style={Styles.QTEXTSTY}>{item?.user?.name}</Text>
                      <Text style={[Styles.QTEXTSTY, {marginVertical: 6}]}>
                        +91 {item?.user?.phone}
                      </Text>
                      <Text
                        numberOfLines={3}
                        style={[
                          Styles.QTEXTSTY,
                          {
                            width: widthPixel(220),
                            fontWeight: '400',
                            color: COLORS.BLACK,
                          },
                        ]}>
                        {/* Plot no. A, 40, Block A, Industrial Area, Sector 62,
                          Noida, Uttar Pradesh 201301 */}
                        {item?.delieveryAddress?.completeAddress}
                      </Text>
                      <Text
                        style={[
                          Styles.QTEXTSTY,
                          {marginTop: 5, fontWeight: '400'},
                        ]}>
                        Delivered Date:
                        {moment(item?.delieveredAt).format('DD/MM/YYYY')}
                      </Text>
                      <Text
                        style={[
                          Styles.QTEXTSTY,
                          {marginTop: 5, fontWeight: '400'},
                        ]}>
                        Delivered Time:{' '}
                        {moment(item?.delieveredAt).format('h:mm:ss a')}
                      </Text>
                    </View>
                  </View>

                  <View>
                    <Text style={[Styles.QTEXTSTY, {left: widthPixel(20)}]}>
                      Order No.
                    </Text>
                    <Text style={Styles.ORDERIDTEXT}>{item?.orderId}</Text>
                    <Text style={Styles.QPAMENT}>Payment Status</Text>
                    <Text style={Styles.GREYTEXT}>
                      {item?.paymentInfo?.status}
                    </Text>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate(Routes.VIEW_DETAILS, item)
                      }
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
    // height: heightPixel(200),
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
    resizeMode: 'contain',
    borderRadius: 25,
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
    left: widthPixel(20),
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
  JUSTISTYLES: {
    height: heightPixel(50),
    width: widthPixel(50),
    borderRadius: 50 / 2,
  },
});
