import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import {COLORS} from '../utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {fontPixel, heightPixel} from './Dimensions';
import {Ionicon} from '../utils/Const';

const MyHeader = props => {
  return (
    <View style={{}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[COLORS.PURPLE, COLORS.PINK]}
        style={Styles.linearGradient}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
            <Ionicon
              title="arrow-back-outline"
              size={30}
              IconColor={COLORS.WHITE}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: COLORS.WHITE,
              paddingLeft: 8,
              fontSize: fontPixel(17),
              fontWeight: '500',
              letterSpacing: 0.6,
            }}>
            {props.title}
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const Styles = StyleSheet.create({
  linearGradient: {
    paddingHorizontal: '3%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    elevation: 10,
    // paddingVertical: StatusBar.currentHeight,
    paddingVertical: 14,
  },
});

export default MyHeader;
