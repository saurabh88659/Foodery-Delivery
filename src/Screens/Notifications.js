import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../utils/Colors';
import {CustomStatusBar, Entypos} from '../utils/Const';
import MyHeader from '../Components/MyHeader';
import {heightPixel, widthPixel} from '../Components/Dimensions';
import {_getNotifications} from '../utils/Controllers/EpicControllers';

export default function Notifications({navigation}) {
  const [notifications, setNotifications] = useState([]);
  const [errormess, setErrormess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    _notifications();
  }, []);

  /**
   * The function `_notifications` retrieves notifications and handles the response and error messages.
   */
  const _notifications = async () => {
    const result = await _getNotifications();
    if (result?.data) {
      console.log('notifications response:', result?.data?.result);
      setNotifications(result?.data?.result);
    } else {
      console.log(
        'catch error notifications:',
        result?.response?.data?.message,
      );
      setErrormess(result?.response?.data?.message);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.WHITE}}>
      <CustomStatusBar />
      <MyHeader onPress={() => navigation.goBack()} title={'Notifications'} />

      {errormess ? (
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
          showsVerticalScrollIndicator={false}
          data={notifications}
          renderItem={({item, index}) => (
            <View
              key={index}
              style={{
                marginHorizontal: 20,
                marginVertical: 10,
                backgroundColor: COLORS.GRAY,
                borderRadius: 6,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingVertical: 10,
              }}>
              <Entypos title="dot-single" size={25} IconColor={COLORS.PINK} />
              <View>
                <Text style={{color: COLORS.BLACK, fontSize: 15}}>
                  {item?.title}
                </Text>
                <Text
                  style={{
                    color: COLORS.BLACK,
                    fontSize: 12,
                    width: widthPixel(320),
                  }}>
                  {item?.body}
                </Text>
              </View>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}
