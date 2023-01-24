import {StyleSheet, Image, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ImageBackground} from 'react-native';
import {Card, Icon} from 'react-native-elements';
import {Colors, showToastMessage} from '../../../constants';
import {TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import database from '@react-native-firebase/database';
import firebase from '@react-native-firebase/app';
import { addData, adddata } from '../../../API';

const CreditHistory = ({navigation}) => {
  // const reference = database().ref('users');
  // const reference = firebase
  //   .app()
  //   .database('https://caterersapp7248-default-rtdb.firebaseio.com')
  //   .ref('/users/');

  const [name, setName] = useState();
  const [value, setValue] = useState();
  // const [list, setList] = useState([1]);

  // useEffect(() => {
  //   // save()
  //   get();
  // }, []);

  // const handleInputData = async () => {
  //   try {
  //     await database()
  //       .ref('users')
  //       .on('value', snapshot => {
  //         console.log('User data: ', snapshot.val());
  //         setList(snapshot.val());
  //       });
  //     if (list == null) setList([1]);

  //     const index = list.length;
  //     if (name.length > 0 && value.length > 0) {
  //       await database()
  //         .ref(`/users/${index}`)
  //         .set({
  //           name: name,
  //           value: value,
  //         })
  //         .then(() => console.log('Data set.'));
  //     }

  //     setName('')
  //     setValue('')
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const save = () => {
  //   AsyncStorage.setItem('user', JSON.stringify(data))
  //     .then(() => console.log('Data saved successfully'))
  //     .catch(error => console.log('Error saving data:', error));
  // };
  // const get = () => {
  //   AsyncStorage.getItem('user');
  // };


  const onClickAdd=async()=>{
    if(name, value){
      let token = await AsyncStorage.getItem("userId")
      var raw = JSON.stringify({
      "name": name,
      "count": value,
      "userId": token,
      "state":false
    });
    addData(raw).then(response=>{
      console.log(response);
      showToastMessage("Added Successfully")
      navigation.navigate("home");
      setName();
      setValue()
    })
    }
    else{
      showToastMessage("both filed")
    }
  }

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
            value={name}
            onChangeText={text => setName(text)}
            placeholder="Add Name"
            style={{
              backgroundColor: '#eee',
              borderRadius: 8,
              paddingHorizontal: 12,
            }}
          />
          <TextInput
            placeholder="Value"
            value={value}
            keyboardType='phone-pad'
            onChangeText={text => setValue(text)}
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
            }}
            onPress={() => onClickAdd()}>
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
