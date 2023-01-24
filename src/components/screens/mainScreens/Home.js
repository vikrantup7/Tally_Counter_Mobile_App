import {
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors, fontScale, showToastMessage} from '../../../constants';
import {Avatar, Card, Icon} from 'react-native-elements';
import database from '@react-native-firebase/database';
import firebase from '@react-native-firebase/app';
import {ScrollView} from 'react-native-gesture-handler';
import {setTokenFunction} from '../../../redux/Actions/UserAction';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {deleteData, getData, updateData} from '../../../API';
import {useIsFocused} from '@react-navigation/native';

export async function onDeleteSave(id) {
  let token = await AsyncStorage.getItem('userId');
  var raw = JSON.stringify({
    userId: token,
    carId: id,
  });
  deleteData(raw).then(response => {
    console.log(response, 'vikku');
  });
  return true;
}
const MessageScreen = () => {
  const [value, setValue] = useState();
  const [list, setList] = useState([]);
  const getDatas = async () => {
    try {
      let token = await AsyncStorage.getItem('userId');
      getData("state=false&userId=",token).then(response => {
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
    setDatas();
  }, [focused]);

  const onClickSave = async (id, istrue) => {
    let token = await AsyncStorage.getItem('userId');
    var raw = JSON.stringify({
      name: value,
      count: count,
      userId: token,
      carId: id,
      state: istrue,
    });
    updateData(raw).then(response => {
      showToastMessage(istrue ? 'Data save to stats' : 'Data updated successfully');
      getDatas();
      setDatas();
    });
  };

  const deleteBtn = async id => {
    let res = await onDeleteSave(id);
    if (res) {
      showToastMessage('Data deleted successfully');
      setDatas();
      getDatas();
    }
  };
  const [data, setDatas] = useState();
  console.log(data);
  const [count, setCount] = useState();
  const [textVisible, setTextVisible] = useState(false);
  const [TextInputVisible, setTextInputVisible] = useState(false);
  const dispatch = useDispatch();
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../../assets/images/patt.png')}>
      <View style={{flex: 1, marginHorizontal: 10, marginVertical: 10}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image
            resizeMode="contain"
            source={require('../../../assets/images/logo.png')}
          />
          <TouchableOpacity onPress={() => setTextVisible(!textVisible)}>
            <Icon
              name="user"
              type="ant-design"
              color={Colors.white}
              style={{
                backgroundColor: Colors.blue,
                borderRadius: 6,
                padding: 4,
              }}
            />
          </TouchableOpacity>

          {textVisible && (
            <Card
              containerStyle={{
                borderRadius: 8,
                paddingHorizontal: 20,
                position: 'absolute',
                right: 20,
                marginRight: 0,
                top: 20,
              }}>
              <TouchableOpacity
                onPress={() => dispatch(setTokenFunction(false))}>
                <Text>Logout</Text>
              </TouchableOpacity>
            </Card>
          )}
        </View>

        {data && (
          <View style={{marginBottom:130,marginTop:20}}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TextInput
                value={TextInputVisible ? value : data.name}
                editable={TextInputVisible}
                style={{
                  alignSelf: 'center',
                  fontSize: 18,
                  color: '#000',
                  fontWeight: '600',
                  backgroundColor: '#ffffffc5',
                  minWidth: 120,
                  maxWidth: '100%',
                  borderRadius: 12,
                  paddingHorizontal: 12,
                  textAlign: 'center',
                }}
                onChangeText={text => setValue(text)}
              />
              <Icon
                name="edit"
                type="ant-design"
                onPress={() => setTextInputVisible(true)}
              />
            </View>
            <Card
              containerStyle={{
                padding: 0,
                margin: 0,
                backgroundColor: Colors.blue,
                height: 60,
                borderRadius: 12,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setCount(count ? count - 1 : parseInt(data.count) - 1);
                    // handleUpdateDataM(data.id);
                  }}
                  activeOpacity={0.8}
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: 12,
                    height: 60,
                    width: 60,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icon name="minus" type="ant-design" />
                </TouchableOpacity>
                <Text style={{fontSize: 20, color: '#fff'}}>
                  {count ? count : data.count}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setCount(count ? count + 1 : parseInt(data.count) + 1);
                    // handleUpdateData(data.id);
                  }}
                  activeOpacity={0.8}
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: 12,
                    height: 60,
                    width: 60,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icon name="plus" type="ant-design" />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 20,
                }}>
                <TouchableOpacity
                  onPress={() => deleteBtn(data._id)}
                  style={{
                    backgroundColor: Colors.redText,
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{color: '#fff', fontWeight: '600', fontSize: 16}}>
                    Delete
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => onClickSave(data._id, false)}
                  style={{
                    backgroundColor: Colors.blue,
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{color: '#fff', fontWeight: '600', fontSize: 16}}>
                    Update
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                  onPress={() => onClickSave(data._id, true)}
                  style={{
                    backgroundColor: Colors.greenText,
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 10,
                    alignSelf:'center',
                    marginTop:10
                  }}>
                  <Text
                    style={{color: '#fff', fontWeight: '600', fontSize: 16}}>
                    Save to stats
                  </Text>
                </TouchableOpacity>
            </Card>
          </View>
        )}

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{marginTop: data ? 0 :120}}>
          <FlatList
            data={list}
            renderItem={({item}) => (
              <View style={{marginTop: 15}}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 18,
                    color: '#DF2727',
                    fontWeight: '600',
                    marginBottom: 5,
                  }}>
                  {item?.name}
                </Text>
                <Card
                  containerStyle={{
                    padding: 0,
                    margin: 0,
                    backgroundColor: Colors.blue,
                    height: 60,
                    borderRadius: 12,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      setTextInputVisible(false),
                        setValue(),
                        setDatas(),
                        setCount(),
                        setDatas(item);
                    }}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={{
                        backgroundColor: '#fff',
                        borderRadius: 12,
                        height: 60,
                        width: 60,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Icon name="minus" type="ant-design" />
                    </TouchableOpacity>
                    <Text style={{fontSize: 20, color: '#fff'}}>
                      {item?.count}
                    </Text>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={{
                        backgroundColor: '#fff',
                        borderRadius: 12,
                        height: 60,
                        width: 60,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Icon name="plus" type="ant-design" />
                    </TouchableOpacity>
                  </TouchableOpacity>
                </Card>
              </View>
            )}
          />
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({});
