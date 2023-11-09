import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../utils/Colors';
import {CustomStatusBar} from '../utils/Const';
import MyHeader from '../Components/MyHeader';
import {_getTransitionDetails} from '../utils/Controllers/EpicControllers';

export default function TransactionDetails({navigation}) {
  const [transitions, setTransitions] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    _TransitionDetails();
  }, []);

  const _TransitionDetails = async () => {
    const result = await _getTransitionDetails();
    if (result?.data) {
      console.log('transitions details reaponse', result?.data?.result);
      setTransitions(result?.data?.result);
      setLoading(false);
    } else {
      console.log('transitions error:', result?.response?.data);
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.WHITE}}>
      <CustomStatusBar />
      <MyHeader
        onPress={() => navigation.goBack()}
        title={'Transaction Details'}
      />
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" color={COLORS.PINK} />
        </View>
      ) : (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          data={transitions}
          contentContainerStyle={{paddingBottom: 15}}
          renderItem={({item, index}) => (
            <View
              key={index}
              style={{marginVertical: 10, marginHorizontal: 10}}>
              <Text
                style={{
                  color: COLORS.BLACK,
                  fontSize: 15,
                  fontWeight: '400',
                  paddingLeft: 10,
                }}>
                {item?.date}
              </Text>
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                scrollEnabled={false}
                data={item?.item}
                renderItem={({item, index}) => (
                  <View
                    key={index}
                    style={{
                      borderBottomWidth: 1,
                      paddingVertical: 10,
                      borderColor: COLORS.GRAY,
                      marginHorizontal: 10,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        numberOfLines={1}
                        style={{
                          color: COLORS.BLACK,
                          fontSize: 16,
                          fontWeight: '500',
                          width: 280,
                        }}>
                        {item?.delieveryAddress?.completeAddress}
                      </Text>
                      <Text
                        style={{
                          color: COLORS.BLACK,
                          fontSize: 14,
                          fontWeight: '500',
                        }}>
                        &#10011;{item?.commission}
                      </Text>
                    </View>
                    <Text
                      style={{
                        color: COLORS.GRAY,
                        fontSize: 11,
                        top: 2,
                      }}>
                      {item?.time}
                    </Text>
                    <Text
                      style={{
                        color: COLORS.GRAY,
                        fontSize: 11,
                        top: 2,
                      }}>
                      Range: {item?.range}
                    </Text>
                  </View>
                )}
              />
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}
