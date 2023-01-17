import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Avatar, Icon} from 'react-native-elements';
import commonStyles from '../constants/commonStyles';
import { Colors, Fonts, fontScale } from '../constants';

const Header = props => {
  return (
    <View style={commonStyles.header}>
            <Icon name='notifications' type='material-icons' size={30} onPress={()=>{props.navigation.navigate("Notification")}} color={Colors.redText} style={{backgroundColor:Colors.lightDarkGrayText,borderRadius:200}} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
