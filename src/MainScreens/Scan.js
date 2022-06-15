import React ,{useState} from "react";
import {
    View, FlatList, Text, Image, TouchableOpacity
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Ainput } from "../CommonComponents/common/Ainput";
import { CusButtom } from "../CommonComponents/common/CusButtom";

const Scan = () =>{
    return(
        <View>
          <CusButtom text ={"My Document"} BTNstyle = {{backgroundColor :'#9370DB' , marginHorizontal : 15 , borderRadius :40 }}/>
          <CusButtom text ={"My Document"} BTNstyle = {{backgroundColor :'#9370DB' , marginHorizontal : 15 , borderRadius :40 }}/>
          <CusButtom text ={"My Document"} BTNstyle = {{backgroundColor :'#9370DB' , marginHorizontal : 15 , borderRadius :40 }}/>
        </View>
    )
}

export default Scan;