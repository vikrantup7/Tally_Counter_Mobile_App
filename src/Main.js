import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AuthNavigation from './components/navigations/AuthNavigation';
import TabNavigation from './components/navigations/TabNavigation';

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
      {/* <TabNavigation/> */}
      {/* <AuthNavigation/> */}
      {tokenfunc ?<TabNavigation/> : <AuthNavigation />}

    </NavigationContainer>
  );
};

export default Main;
