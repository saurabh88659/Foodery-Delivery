import {View, Text, SafeAreaView, RefreshControl, FlatList} from 'react-native';
import React from 'react';
import {COLORS} from '../utils/Colors';
import {CustomStatusBar} from '../utils/Const';
import MyHeader from '../Components/MyHeader';

export default function TransactionDetails({navigation}) {
  const dataSrt = [
    {
      date: '05/01/2023',
      item: [
        {
          name: 'ravi',
          amount: '10',
          time: '10:23 AM',
          range: '2km',
        },
        {
          name: 'dablu',
          amount: '10',
          time: '10:23 AM',
          range: '2km',
        },
        {
          name: 'ravi',
          amount: '10',
          time: '10:23 AM',
          range: '2km',
        },
        {
          name: 'dablu',
          amount: '10',
          time: '10:23 AM',
          range: '2km',
        },
        {
          name: 'ravi',
          amount: '10',
          time: '10:23 AM',
          range: '2km',
        },
        {
          name: 'dablu',
          amount: '10',
          time: '10:23 AM',
          range: '2km',
        },
        {
          name: 'ravi',
          amount: '10',
          time: '10:23 AM',
          range: '2km',
        },
        {
          name: 'dablu',
          amount: '10',
          time: '10:23 AM',
          range: '2km',
        },
      ],
    },
    {
      date: '02/12/2023',
      item: [
        {
          name: 'ravi',
          amount: '10',
          time: '10:23 AM',
          range: '2km',
        },
        {
          name: 'ravi',
          amount: '10',
          time: '10:23 AM',
          range: '2km',
        },
        {
          name: 'ravi',
          amount: '10',
          time: '10:23 AM',
          range: '2km',
        },
        {
          name: 'ravi',
          amount: '10',
          time: '10:23 AM',
          range: '2km',
        },
        {
          name: 'ravi',
          amount: '10',
          time: '10:23 AM',
          range: '2km',
        },
      ],
    },
    {
      date: '09/11/2023',
      item: [
        {
          name: 'ravi',
          amount: '10',
          time: '10:23 AM',
          range: '2km',
        },
        {
          name: 'ravi',
          amount: '10',
          time: '10:23 AM',
          range: '2km',
        },
        {
          name: 'ravi',
          amount: '10',
          time: '10:23 AM',
          range: '2km',
        },
        {
          name: 'ravi',
          amount: '10',
          time: '10:23 AM',
          range: '2km',
        },
        {
          name: 'ravi',
          amount: '10',
          time: '10:23 AM',
          range: '2km',
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.WHITE}}>
      <CustomStatusBar />
      <MyHeader
        onPress={() => navigation.goBack()}
        title={'Transaction Details'}
      />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        data={dataSrt}
        contentContainerStyle={{paddingBottom: 15}}
        renderItem={({item, index}) => (
          <View key={index} style={{marginVertical: 10, marginHorizontal: 10}}>
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
                      style={{
                        color: COLORS.BLACK,
                        fontSize: 16,
                        fontWeight: '500',
                      }}>
                      {item?.name}
                    </Text>
                    <Text
                      style={{
                        color: COLORS.BLACK,
                        fontSize: 14,
                        fontWeight: '500',
                      }}>
                      &#10011;{item?.amount}
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
    </SafeAreaView>
  );
}
