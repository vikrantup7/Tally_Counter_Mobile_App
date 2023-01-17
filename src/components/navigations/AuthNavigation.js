import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Forgot from '../screens/authScreens/Forgot';
import Registration from '../screens/authScreens/Registration';
import Splash from '../screens/authScreens/Splash';

const AuthStack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{headerShown: false}}
        name="Splash"
        component={Splash}
      />
      <AuthStack.Screen
        options={{headerShown: false}}
        name="Registration_screen"
        component={Registration}
      />
      <AuthStack.Screen
        options={{headerShown: false}}
        name="Forgot"
        component={Forgot}
      />
    </AuthStack.Navigator>
  );
};
export default AuthNavigation;
