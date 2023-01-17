import {
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';
import React, { useEffect } from 'react';
import {Colors, fontScale} from '../../../constants';
import {Avatar, Card, Icon} from 'react-native-elements';

const MessageScreen = () => {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../../assets/images/patt.png')}>
      <View style={{marginHorizontal: 10, marginVertical: 10}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image
            resizeMode="contain"
            source={require('../../../assets/images/logo.png')}
          />
          <Icon
            name="user"
            type="ant-design"
            color={Colors.white}
            style={{backgroundColor: Colors.blue, borderRadius: 6, padding: 4}}
          />
        </View>
        <View style={{marginTop:60}}>
          <Text style={{alignSelf:'center',fontSize:18,color:'#000',fontWeight:'600'}}>Cars</Text>
                  <Card containerStyle={{padding:0,margin:0,backgroundColor:Colors.blue,height:60,borderRadius:12,}}>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                      <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:'#fff', borderRadius:12, height:60,width:60,alignItems:'center',justifyContent:'center'}}>
            <Icon name='minus' type='ant-design'/>
          </TouchableOpacity>
          <Text style={{fontSize:20,color:'#fff'}}>200</Text>
          <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:'#fff',borderRadius:12, height:60,width:60,alignItems:'center',justifyContent:'center'}}>
            <Icon name='plus' type='ant-design'/>
          </TouchableOpacity>
          </View>

        </Card>
        </View>

      </View>
    </ImageBackground>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({});
