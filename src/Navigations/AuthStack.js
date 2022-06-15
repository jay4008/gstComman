import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import {
    View,
    Text,
} from "react-native";
import React, { useEffect, useState } from 'react';
import LogIn from '../AuthScreens/LogIn';
import ForgotEmail from '../AuthScreens/ForgotEmail';
import Verification from '../AuthScreens/Otp';
import ResetPassword from '../AuthScreens/ResetPassword';
import Registration from '../AuthScreens/Registration';
const headerOptionForStackPage = {
    headerStyle: {
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    headerTintColor: '#000',
    headerShown : false,
    headerTopInsetEnabled: false,
  };
enableScreens();
const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions = {headerOptionForStackPage}>
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="ForgotEmail" component={ForgotEmail} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="Registration" component={Registration} />
    </Stack.Navigator>
  );
}

const Home = () =>{
    return(
        <View>
            <Text>Home</Text>
        </View>
    )
}

export default AuthStack;