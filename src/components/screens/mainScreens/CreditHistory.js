import {StyleSheet, Image, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {ImageBackground} from 'react-native';
import {Card, Icon} from 'react-native-elements';
import {Colors} from '../../../constants';
import {TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CreditHistory = () => {
  const userId = '1232121';
  const data = {name: 'vkvkv'};
  const uniqueKey = `user_${userId}`;
  useEffect(() => {
    // save()
    get();
  }, []);
  const save = () => {
    AsyncStorage.setItem(uniqueKey, JSON.stringify(data))
      .then(() => console.log('Data saved successfully'))
      .catch(error => console.log('Error saving data:', error));
  };
  const get = () => {
    AsyncStorage.getItem(uniqueKey)
      .then(data => {
        console.log('Data retrieved:', JSON.parse(data));
      })
      .catch(error => console.log('Error retrieving data:', error));
  };

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
        <Card containerStyle={{borderRadius: 12}}>
          <Text
            style={{
              alignSelf: 'center',
              color: '#000',
              fontWeight: '600',
              marginBottom: 20,
            }}>
            Add Field
          </Text>
          <TextInput
            placeholder="Add Name"
            style={{
              backgroundColor: '#eee',
              borderRadius: 8,
              paddingHorizontal: 12,
            }}
          />
          <TextInput
            placeholder="Value"
            style={{
              backgroundColor: '#eee',
              borderRadius: 8,
              paddingHorizontal: 12,
              marginTop: 20,
            }}
          />

          <TouchableOpacity
            style={{
              backgroundColor: Colors.blue,
              paddingVertical: 12,
              marginTop: 20,
              borderRadius: 12,
              alignItems: 'center',
            }}>
            <Text style={{color: '#fff', fontWeight: '600', fontSize: 20}}>
              Add
            </Text>
          </TouchableOpacity>
        </Card>
      </View>
    </ImageBackground>
  );
};

export default CreditHistory;

const styles = StyleSheet.create({});
