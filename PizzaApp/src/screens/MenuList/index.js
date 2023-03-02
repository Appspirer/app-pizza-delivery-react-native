import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import Header from "../../components/Header";
import ListItem from "../../components/ListItem";
import Icons from "../../themes/Icons";
import styles from "./styles";
import Images from "../../themes/Images";

const data = [
    {
        id:0,
        img: Images.item1,
        name:"Veg Pizza",
        price:199,
        check:true
    },
    {
        id:1,
        img: Images.item2,
        name:"Meat Delights",
        price:299,
        check:false
    },
    {
        id:2,
        img: Images.item3,
        name:"Crispies",
        price:99,
        check:false
    },
    {
        id:3,
        img: Images.item4,
        name:"Burgers",
        price:149,
        check:false
    },
    {
        id:4,
        img: Images.item5,
        name:"Crispies",
        price:99,
        check:false
    },
    {
        id:5,
        img: Images.item6,
        name:"Burgers",
        price:149,
        check:false
    },
    {
        id:6,
        img: Images.item3,
        name:"Crispies",
        price:99,
        check:false
    },
    {
        id:7,
        img: Images.item4,
        name:"Burgers",
        price:149,
        check:false
    },
    
]

export default function MenuList({ navigation }) {
    return (
        <View style={styles.container}>
            <Header onLeftPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <ListItem data={data} onPress={()=>navigation.navigate("Details")}/>
                <View style={{height:60}}/>
            </ScrollView>
            <View style={styles.filter_container}>
                {Icons.Icons({name:'filter', height:17, width:18})}
            </View>
        </View>
    )
}