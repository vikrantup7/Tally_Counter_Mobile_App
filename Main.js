import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AuthNavigation from './components/navigations/AuthNavigation';
import DrawerNavigation from './components/navigations/DrawerNavigation';

const Main = () => {
  useEffect(()=>{
    getToken()
  },[])

  const  [Token,setToken] = useState()
  const getToken=async()=>{
    let res = await AsyncStorage.getItem("key")
    console.log(res);
    setToken(res)
  }
  const tokenfunc = useSelector(state => state.user.tokenfunc);
  return (
    <NavigationContainer>
      {tokenfunc ?<DrawerNavigation/> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default Main;
