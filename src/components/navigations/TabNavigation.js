import * as React from 'react';
import {Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Avatar, Icon } from 'react-native-elements';
import Profile from '../screens/mainScreens/Profile';
import { Colors, Fonts, fontScale } from '../../constants';
import MessageScreen from '../screens/mainScreens/MessageScreen';
import CreditHistory from '../screens/mainScreens/CreditHistory';
import Notification from '../screens/mainScreens/Notification';
const HomeStack = createNativeStackNavigator();
const stack = createNativeStackNavigator();
const HomeScreenStack = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="home" component={MessageScreen} />
      <HomeStack.Screen name="profile" component={Profile} />
      <HomeStack.Screen name="CreditHistory" component={CreditHistory} />
      <HomeStack.Screen name="Notification" component={Notification} />

    </HomeStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#fff',
        tabBarLabelStyle: {
          fontSize: fontScale.text,
          fontFamily: Fonts.mediumBold
        },
        tabBarStyle: {
          backgroundColor:Colors.black,
          // borderTopLeftRadius: 15,
          paddingTop: 10,
          paddingBottom: 10,
          height: 60,
          // borderTopRightRadius: 15
        },
      }}>

<Tab.Screen
        name="Home"
        component={HomeScreenStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ flex: 1, }}>
                  <Icon
                    name="home"
                    type="simple-line-icon"
                    color={'#fff'}
                    size={18}
                  />
              </View>
            );
          },
        }}
      />


<Tab.Screen
        name="Add"
        component={CreditHistory}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ flex: 1,}}>

                    <Icon
                      name="plus"
                      type="feather"
                      color={'#fff'}
                      size={18}
                    />
              </View>
            );
          },
        }}
      />


<Tab.Screen
        name="Stats"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ flex: 1}}>
                  <Icon
                    name="barschart"
                    type="ant-design"
                    color={'#fff'}
                    size={26}
                  />
              </View>
            );
          },
        }}
      />
     
    </Tab.Navigator>
  );
};
export default TabNavigation;