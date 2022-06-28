/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthFrame from './src/AuthScreens/AuthFrame'
import MyStack from './src/Navigations/MainStack';
import MyDrawer from './src/Navigations/AuthStack';
// import RootDrawerNav from './src/Navigations/RootDrawerNav';
const App=() => {


  const [Splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false)
    }, 3000);
  }, [])
  if (Splash) {
    return (
      <AuthFrame>
        <Text style={{ fontSize: 30, color: "#fff", fontWeight: 'bold', textAlign: 'center' }}>GST COMMAN</Text>
      </AuthFrame>
    )
  }
  return (
    <>
    
      <NavigationContainer>
        <MyStack />
        
         {/* <MyDrawer/> */}
        {/* <RootDrawerNav/> */}
      </NavigationContainer>
     
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
