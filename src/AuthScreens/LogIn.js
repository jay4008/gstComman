import React from "react";
import {
    View,
} from "react-native";
import { Ainput } from "../CommonComponents/common/Ainput";
import { CusButtom } from "../CommonComponents/common/CusButtom";
import { Rtext } from "../CommonComponents/common/Rtext";
import LoginStyle from "../Styles/Login";
import AuthFrame from "./AuthFrame";

const LogIn = (props) =>{
    return(
        <AuthFrame>
             <Rtext
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            color: '#fff',
          }}>
          {' '}
         Log In
        </Rtext>
            <Ainput placeholder = {"Email"}></Ainput>
            <Ainput placeholder = {"Password"}></Ainput>
            <View style = {{flexDirection :'row-reverse'}}>
            <Rtext style = {LoginStyle.ForgetPassword} onPress = {() => props.navigation.navigate('ForgotEmail') }>Forget Password ? </Rtext>
            </View>
            <CusButtom text = {"Login"} ></CusButtom>
            <Rtext style = {LoginStyle.ForgetPassword} onPress = {() => props.navigation.navigate('Registration')}> <Rtext style = {{color : "#224585"}}>New User </Rtext>: Register Account ?</Rtext>
        </AuthFrame>
    )
}
export default LogIn;