import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import ListItem from "../../components/ListItem";
import Rating from "../../components/Rating";
import Size from "../../components/Size";
import Colors from "../../themes/Colors";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

const dataPrice = [
    {
        id: 0,
        name: "Medium",
        price: "₹450"
    },
    {
        id: 1,
        name: "Large",
        price: "₹990"
    },
    {
        id: 2,
        name: "Small",
        price: "₹200"
    }
]

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
    
]

export default function Home({navigation}) {

    const [priceSelected, setPriceSelected] = useState(0)

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <View style={{}}>
                    <View style={styles.location}>
                        {Icons.Icons({ name: "location", height: 10, width: 7 })}
                        <Text style={styles.delivery}>DELIVERY</Text>
                    </View>
                    <Text style={styles.location_text}>Bangalore, India</Text>
                </View>
                <Image source={Images.avatar} style={styles.avatar} />
            </View>
            <View style={styles.recommend_row}>
                <Text style={styles.recommend}>Recommended</Text>
                <TouchableOpacity>
                    <Text style={styles.view_all}>View All</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.recommend_text}>Based on your purchase history</Text>
            <View style={styles.recommend_container}>
                <View style={styles.img_container}>
                    <Image source={Images.recommend} style={styles.img} />
                </View>
                <Text style={styles.recommend_name}>Veggie Cheese Extravaganza</Text>
                <Rating rate={4}/>

                <Size data={dataPrice} selected={priceSelected} setSelected={setPriceSelected}/>
                <TouchableOpacity style={[styles.button, { backgroundColor: Colors.transparent, marginTop: 20 }]}>
                    <Text style={[styles.text, { color: Colors.black_text }]}>Customize & Add</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, { backgroundColor: Colors.red, marginTop: 10 }]}>
                    <Text style={[styles.text, { color: Colors.white }]}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.recommend_row}>
                <Text style={styles.recommend}>Menu</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("MenuList")}>
                    <Text style={styles.view_all}>View All</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.recommend_text}>What’s on our menu</Text>
            <ListItem data={data} onPress={()=>navigation.navigate("Details")}/>
            <View style={{height:110}}/>
        </ScrollView>
    )
}