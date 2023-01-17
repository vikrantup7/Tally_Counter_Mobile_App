import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'

const Notification = () => {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../../assets/images/patt.png')}>
      <Text>Notification</Text>
    </ImageBackground>
  )
}

export default Notification

const styles = StyleSheet.create({})