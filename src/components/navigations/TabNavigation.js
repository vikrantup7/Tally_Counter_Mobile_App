import * as React from 'react';
import {Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Avatar, Icon } from 'react-native-elements';
import Stats from '../screens/mainScreens/Stats';
import { Colors, Fonts, fontScale } from '../../constants';
import Home from '../screens/mainScreens/Home';
import AddField from '../screens/mainScreens/AddField';
const HomeStack = createNativeStackNavigator();
const stack = createNativeStackNavigator();
const HomeScreenStack = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="home" component={Home} />
      <HomeStack.Screen name="Stats" component={Stats} />
      <HomeStack.Screen name="AddField" component={AddField} />

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
        component={AddField}
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
        component={Stats}
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