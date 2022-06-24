import React ,{useState} from "react";
import {
    View, FlatList, Text, Image, TouchableOpacity, Alert
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Ainput } from "../CommonComponents/common/Ainput";
import { CusButtom } from "../CommonComponents/common/CusButtom";

const Scan = (props) =>{
    return(
        <View>
          <CusButtom onpress = {() => props.navigation.goBack() } text ={props?.route?.params?.token + "   " + props?.route?.params?.name} BTNstyle = {{backgroundColor :'#9370DB' , marginHorizontal : 15 , borderRadius :40 }}/>
          <CusButtom  onpress = {() => Alert.alert(props?.route?.params?.alert) }  text ={"My Document"} BTNstyle = {{backgroundColor :'#9370DB' , marginHorizontal : 15 , borderRadius :40 }}/>
          <CusButtom text ={"My Document"} BTNstyle = {{backgroundColor :'#9370DB' , marginHorizontal : 15 , borderRadius :40 }}/>
        </View>
    )
}

export default Scan;