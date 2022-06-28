import React, { useEffect, useState } from "react";
import {
    View, FlatList, Text, Image, TouchableOpacity
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Ainput } from "../CommonComponents/common/Ainput";
import { Rtext } from "../CommonComponents/common/Rtext";
import { request } from "../utility/common";

const Home = (props) => {
const [flatListData , setFlatlistData] = useState([])
    const [bill, setBill] = useState(false);
    const [paid, setPaid] = useState(false);
    const [history, setHisory] = useState(false);



    const ApiCallTodos = async () => {

        try {
            let data = await request("get", "/todos");
            console.log('jay shah', data.data , 'jay shah')
            setFlatlistData(data.data);
        } catch (e) {

        }



    }

    useEffect(() =>{
        ApiCallTodos();
    },[])





    const renderItem = ({ item }) => {

        return (
            <TouchableOpacity onPress={() => props.navigation.navigate('Scan', { token: "Koushik  paul", name: "jay shah", alert: "some data " })} style={{ flexDirection: 'row', paddingVertical: 10, borderColor: '#9370DB', borderWidth: 1, marginTop: 10, marginHorizontal: 10, borderRadius: 8 }}>
                <View style={{ width: '100%', borderRadius: 5, borderColor: 'black', paddingLeft: 10, flexDirection: 'row' }}>

                    <Image source={require('../assets/xyz.png')} style={{ height: 30, width: 30, resizeMode: 'contain', marginRight: 10 }} />
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ width: 80 }}>Bill Name :</Text>
                            <Text style={{ color: "silver" , width : 150 }}> {item?.title}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ width: 80 }}>Date :</Text>
                            <Text style={{ color: "silver" }}>{item.Date}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ width: 80 }}>Desc :</Text>
                            <Text style={{ color: "silver" }}>{item.Description}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )

    }

    return (
        <View style={{ flex: 1 }}>
            {/* <Rtext>Home</Rtext>
             */}
            {/**/}
            <ScrollView>



                <TouchableOpacity onPress={() => setBill(!bill)} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 12 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 7, paddingBottom: 10, paddingLeft: 10, paddingTop: 10 }}>Bill</Text>
                    <Image style={{ height: 25, width: 25, resizeMode: 'contain', tintColor: '#9370DB' }} source={bill ? require('../assets/downarr.png') : require('../assets/uparr.png')} />

                </TouchableOpacity>
                {
                    bill && <FlatList
                        // contentContainerStyle = {{paddingBottom: 200,}}
                        // style={{ paddingBottom: 200, }}
                        data={flatListData}
                        renderItem={renderItem}




                    />
                }


                <TouchableOpacity onPress={() => setPaid(!paid)} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 12 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 7, paddingBottom: 10, paddingLeft: 10, paddingTop: 10 }}>Paid</Text>
                    <Image style={{ height: 25, width: 25, resizeMode: 'contain', tintColor: '#9370DB' }} source={paid ? require('../assets/downarr.png') : require('../assets/uparr.png')} />

                </TouchableOpacity>


                {
                    paid && <FlatList
                        // contentContainerStyle = {{paddingBottom: 200,}}
                        // style={{ paddingBottom: 200, }}
                        data={dataFlatList}
                        renderItem={renderItem}


                    />
                }


                <TouchableOpacity onPress={() => setHisory(!history)} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 12 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 7, paddingBottom: 10, paddingLeft: 10, paddingTop: 10 }}>History</Text>
                    <Image style={{ height: 25, width: 25, resizeMode: 'contain', tintColor: '#9370DB' }} source={history ? require('../assets/downarr.png') : require('../assets/uparr.png')} />

                </TouchableOpacity>

                {
                    history && <FlatList
                        contentContainerStyle={{ paddingBottom: 200, }}
                        // style={{ paddingBottom: 200, }}
                        data={dataFlatList}
                        renderItem={renderItem}


                    />
                }
            </ScrollView>

        </View>
    )
}
export default Home;



var dataFlatList = [
    {
        Name: "Gst Bill",
        Date: "1-2-2021 to 1-2-2022",
        Description: "Please Clear the amount",
    },
    {
        Name: "Tds Bill",
        Date: "1-2-2020 to 1-2-2022",
        Description: "Please Clear the amount",
    },
    {
        Name: "Gst Bill",
        Date: "1-2-2021 to 1-2-2022",
        Description: "Please Clear the amount",
    },
    {
        Name: "Tds Bill",
        Date: "1-2-2020 to 1-2-2022",
        Description: "Please Clear the amount",
    }
    ,
    {
        Name: "Gst Bill",
        Date: "1-2-2021 to 1-2-2022",
        Description: "Please Clear the amount",
    },
    {
        Name: "Tds Bill",
        Date: "1-2-2020 to 1-2-2022",
        Description: "Please Clear the amount",
    },
    {
        Name: "Gst Bill",
        Date: "1-2-2021 to 1-2-2022",
        Description: "Please Clear the amount",
    },
    {
        Name: "Tds Bill",
        Date: "1-2-2020 to 1-2-2022",
        Description: "Please Clear the amount",
    },
    {
        Name: "Gst Bill",
        Date: "1-2-2021 to 1-2-2022",
        Description: "Please Clear the amount",
    },
    {
        Name: "Tds Bill",
        Date: "1-2-2020 to 1-2-2022",
        Description: "Please Clear the amount",
    }, {
        Name: "Gst Bill",
        Date: "1-2-2021 to 1-2-2022",
        Description: "Please Clear the amount",
    },
    {
        Name: "ffTds Bill",
        Date: "1-2-2020 to 1-2-2022",
        Description: "Please Clear the amount",
    }


]