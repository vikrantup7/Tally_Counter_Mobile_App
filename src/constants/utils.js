import React from 'react';
import Toast from 'react-native-simple-toast';
import {Dimensions, Platform, PixelRatio} from 'react-native';

const {height, width} = Dimensions.get('screen');

const showToastMessage = (msg, duration = 1000) => {
  if (Platform.OS === 'ios')
    return Toast.showWithGravity(msg, Toast.LONG, Toast.BOTTOM);
  else return Toast.show(msg, duration);
};

const ValidationRegex = {
  emailRegex:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

// based on iphone 5s's scale

const scale = width / 320;

const normalize = (size)=>{
  const newSize = size * scale 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

export {showToastMessage, normalize, ValidationRegex, height, width};