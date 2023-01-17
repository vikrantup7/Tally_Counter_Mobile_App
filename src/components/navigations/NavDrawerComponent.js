import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Linking } from 'react-native';
import {SafeAreaView, View, Text, Image} from 'react-native';
import {Avatar, Divider, Icon} from 'react-native-elements';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import {Colors, height} from '../../constants';
import { setTokenFunction } from '../../redux/Actions/UserAction';

const NavDrawerComponent = ({navigation}) => {
  const tokenfunc = useSelector(state => state?.user?.tokenfunc);
  const dispatch = useDispatch()
  const SignOut = async () => {
    await AsyncStorage.clear();
    // navigation.navigate("AuthScreen")
    // tokenfunc(false)
    dispatch(setTokenFunction(false))
}
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex:1,}}>

      <View style={{flexDirection: 'row',flex:0.2}}>
          <View style={{paddingTop: 15, paddingHorizontal: 13}}>
            <Avatar
              rounded
              size={35}
              containerStyle={{
                backgroundColor: '#ddd',
                borderWidth: 2,
                borderColor: 'darkblue',
              }}
              source={require('../../assets/images/challange.png')}
            />
          </View>
          <View
            style={{
              flex: 1,
              paddingTop: 15,
              paddingHorizontal: 10,
              backgroundColor: '#F5F5DC',
            }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{flexDirection: 'row-reverse'}}>
              <Icon
                name="left"
                type="ant-design"
                size={25}
                color={Colors.orangeShade}
              />
            </TouchableOpacity>
            {/* <View style={{paddingLeft: 7, position:'absolute',top:10}}> */}
              <TouchableOpacity>
                <LinearGradient
                  colors={['#FFBF00', '#FFBF00']}
                  // start={{x: 0, y: 0}}
                  style={{borderRadius: 50, width: '100%'}}>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text
                      style={{paddingVertical: 7,paddingHorizontal:12, color: '#fff', fontSize: 12}}>
                      TopUp Prepaid Plan
                    </Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('Reverification')} style={{marginVertical: 10}}>
                <LinearGradient
                  colors={['#FFBF00', '#FFBF00']}
                  // start={{x: 0, y: 0}}
                  style={{width: '100%', borderRadius: 50}}>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text
                      style={{paddingVertical: 7,paddingHorizontal:12, color: '#fff', fontSize: 12}}>
                      ReVerify Certificate
                    </Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
              {/* <TouchableOpacity onPress={() =>navigation.navigate("SendEmail") }>
                <LinearGradient
                  colors={['#FFBF00', '#FFBF00']}
                  // start={{x: 0, y: 0}}
                  style={{borderRadius: 50, width: '100%'}}>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text
                      style={{paddingVertical: 7,paddingHorizontal:12, color: '#fff', fontSize: 12}}>
                      Compose Email
                    </Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity> */}
            {/* </View> */}
          </View>
        </View> 
        <View style={{marginVertical: 4, flexDirection: 'row',flex:0.3}}>
          <View style={{padding: 10, marginHorizontal: 8}}>
            <Icon name="email" type="fontisto" size={25} color={Colors.orangeShade} />
          </View>

          <View
            style={{
              paddingLeft: 15,
              backgroundColor: '#F5F5DC',
              width: '100%',
              flex:1
            }}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 14,
                color: '#000',
                paddingTop: 14,
              }}>
              SMS
            </Text>
            {/* <TouchableOpacity
              onPress={() => navigation.navigate('home')}
              style={{marginTop: 10, flexDirection: 'row', paddingVertical: 7}}>
              <View style={{marginRight: 10}}>
                <Icon
                  name="md-home-outline"
                  type="ionicon"
                  size={18}
                  // color={Colors.primary}
                />
              </View>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 14,
                  color: '#000',
                }}>
                Inbox
              </Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              onPress={() => navigation.navigate('SuccessSMS')}
              style={{flexDirection: 'row', paddingVertical: 7,marginTop:10}}>
              <View style={{marginRight: 10}}>
                <Icon
                  name="email"
                  type="fontisto"
                  size={18}
                  // color={Colors.primary}
                />
              </View>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 14,
                  color: '#000',
                }}>
                Inbox
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('FailedSMS')}
              style={{flexDirection: 'row', paddingVertical: 7}}>
              <View style={{marginRight: 10}}>
                <Icon
                  name="chat-processing-outline"
                  type="material-community"
                  size={18}
                  // color={Colors.primary}
                />
              </View>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 14,
                  color: '#000',
                }}>
                Failed SMS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('UnprocessSMS')}
              style={{flexDirection: 'row', paddingVertical: 7}}>
              <View style={{marginRight: 10}}>
                <Icon
                  name="addusergroup"
                  type="antdesign"
                  size={18}
                  // color={Colors.primary}
                />
              </View>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 14,
                  color: '#000',
                }}>
                Unprocessed SMS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flexDirection: 'row', paddingVertical: 7}}
              onPress={() => navigation.navigate('AuthScreen')}>
              <View style={{marginRight: 10}}>
                <Icon
                  name="power-off"
                  type="font-awesome"
                  size={18}
                  // color={Colors.primary}
                />
              </View>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 14,
                  color: '#000',
                }}>
                SMS Template
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      
        <View style={{flexDirection: 'row',flex:0.3}}>
          <View style={{padding: 10, marginHorizontal: 8}}>
            <Icon name="email" type="fontisto" size={25} color={Colors.orangeShade} />
          </View>

          <View
            style={{
              paddingLeft: 15,
              backgroundColor: '#F5F5DC',
              width: '100%',
              flex:1
            }}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 14,
                color: '#000',
                paddingTop: 14,
              }}>
              Email
            </Text>
            <TouchableOpacity
              onPress={() =>  navigation.navigate('home')}
              style={{flexDirection: 'row', paddingVertical: 10}}>
              <View style={{height: 20, width: 20, marginRight: 10}}>
                <Icon
                  name="email"
                  type="fontisto"
                  size={18}
                  // color={Colors.primary}
                />
              </View>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 14,
                  color: '#000',
                }}>
                Inbox
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('DisapprovedMails')}
              style={{
                // marginTop: 10,
                flexDirection: 'row',
                paddingVertical: 10,
              }}>
              <View style={{height: 20, width: 20, marginRight: 10}}>
              <Icon
                  name="email"
                  type="fontisto"
                  size={18}
                  // color={Colors.primary}
                />
              </View>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 14,
                  color: '#000',
                }}>
                Disapproved Mails
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('UnprocessMail')}
              style={{flexDirection: 'row', paddingVertical: 10}}>
              <View style={{marginRight: 10}}>
              <Icon
                  name="email"
                  type="fontisto"
                  size={18}
                  // color={Colors.primary}
                />
              </View>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 14,
                  color: '#000',
                }}>
                Unprocessed Mails
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('FailedMail')}
              style={{flexDirection: 'row', paddingVertical: 10}}>
              <View style={{marginRight: 10}}>
              <Icon
                  name="email"
                  type="fontisto"
                  size={18}
                  // color={Colors.primary}
                />
              </View>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 14,
                  color: '#000',
                }}>
                Failed Mail
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginVertical: 4, flexDirection: 'row',flex:0.2,alignItems:'flex-end'}}>
          <View style={{padding: 10, marginHorizontal: 4}}>
            {/* <Avatar
              rounded
              size={'small'}
              containerStyle={{
                backgroundColor: 'gray',
                borderWidth: 2,
                borderColor: 'darkblue',
              }}
              source={require('../../assets/images/challange.png')}
            /> */}
            <Icon size={35} type={'font-awesome'} name="sign-out"  color={Colors.orangeShade}/>
          </View>
          <View
            style={{
              height:'100%',
              paddingLeft: 15,
              backgroundColor: '#F5F5DC',
              width: '100%',
              justifyContent:'flex-end',
              flex:1
            }}>
            <TouchableOpacity
              onPress={() => SignOut()}
              style={{
                flexDirection: 'row',
                paddingVertical: 15,
              }}>
              <View style={{height: 20, width: 20, marginRight: 10}}>
                <Icon name="power-off" type="font-awesome" size={18} />
              </View>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 14,
                  color: '#000',
                }}>
                Log Out
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavDrawerComponent;
