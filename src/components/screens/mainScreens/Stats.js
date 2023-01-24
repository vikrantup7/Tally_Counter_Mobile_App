import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ImageBackground} from 'react-native';
import {Card, Icon} from 'react-native-elements';
import {Colors, Fonts, showToastMessage} from '../../../constants';
import {getData} from '../../../API';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {onDeleteSave} from './Home.js';
import moment from 'moment/moment';
import {ScrollView} from 'react-native';

const Profile = () => {
  const [list, setList] = useState([]);
  const getDatas = async () => {
    try {
      let token = await AsyncStorage.getItem('userId');
      getData('state=true&userId=', token).then(response => {
        console.log(response, 'vikrkrk');
        setList(response.cars.reverse());
      });
    } catch (error) {
      console.log(error);
    }
  };

  const focused = useIsFocused();
  useEffect(() => {
    getDatas();
  }, [focused]);

  const onClickDelete = async id => {
    let res = await onDeleteSave(id);
    if (res) {
      showToastMessage('Data deleted successfully');
      getDatas();
    }
  };
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../../assets/images/patt.png')}>
      <View style={{flex:1,marginHorizontal: 10, marginVertical: 10}}>
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

        <Text
          style={{
            marginTop: 50,
            alignSelf: 'center',
            fontWeight: '600',
            fontSize: 20,
          }}>
          Stats
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {list.map(item => {
            if (item !== null)
              return (
                <Card
                  containerStyle={{borderRadius: 12, justifyContent: 'center'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{fontSize: 14, fontWeight: '600'}}>
                      {item.name}
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text>
                        {item.count} {'   '}
                      </Text>
                      <TouchableOpacity onPress={() => onClickDelete(item._id)}>
                        <Icon
                          name="delete"
                          type="ant-design"
                          color={Colors.redText}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: '600',
                      color: Colors.darkSand,
                    }}>
                    {moment(item.updatedAt).format('DD-MM-YYYY hh:mm')}
                  </Text>
                </Card>
              );
          })}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Profile;

const styles = StyleSheet.create({});
