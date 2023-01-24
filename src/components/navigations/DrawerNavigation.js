import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NavDrawerComponent from './NavDrawerComponent';
import TabNavigation from './TabNavigation';


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      // screenOptions={{ headerShown: false }}
      screenOptions={{
        headerShown: false ,
        drawerStyle:{
        width:'80%'
      }}}
      drawerContent={({ navigation }) => (
        <NavDrawerComponent
          navigation={navigation}
        />
      )}>
      <Drawer.Screen name="TabScreen" component={TabNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;