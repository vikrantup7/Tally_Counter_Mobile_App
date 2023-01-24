import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Registration from '../screens/authScreens/Registration';
import Login from '../screens/authScreens/Login';
import Splash from '../screens/authScreens/Splash';
import DrawerNavigation from './DrawerNavigation';

const AuthStack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
      <AuthStack.Screen
        options={{headerShown: false}}
        name="Registration_screen"
        component={Registration}
      />
    </AuthStack.Navigator>
  );
};
export default AuthNavigation;
