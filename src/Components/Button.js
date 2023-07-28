import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {heightPixel, widthPixel} from './Dimensions';

const Button = props => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[COLORS.PURPLE, COLORS.PINK]}
      style={Styles.linearGradient}>
      <TouchableOpacity
        onPress={props.onPress}
        style={{
          paddingHorizontal: widthPixel(100),
        }}>
        <Text
          style={{
            color: COLORS.WHITE,
            fontWeight: '500',
            letterSpacing: 0.5,
          }}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Button;

const Styles = StyleSheet.create({
  linearGradient: {
    marginHorizontal: 10,
    borderRadius: 50,
    paddingVertical: 17,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
});
