import React, { useState } from "react";
import { View, Text, Image, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import Header from "../../components/Header";
import Rating from "../../components/Rating";
import Size from "../../components/Size";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

const sizeData = [
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
const crustData = [
    {
        id: 0,
        name: "Standard",
        price: null
    },
    {
        id: 1,
        name: "Garlic Roasted",
        price: "Free"
    },
    {
        id: 2,
        name: "Cheese Burst",
        price: "Free"
    }
]
const toppingData = [
    {
        id: 0,
        name: "Standard",
        price: null
    },
    {
        id: 1,
        name: "Extra Cheese",
        price: "₹99"
    },
    {
        id: 2,
        name: "Extra Spice",
        price: null
    }
]

export default function Details({ navigation }) {
    const [sizeSelected, setSizeSelected] = useState(0)
    const [crustSelected, setCrustSelected] = useState(0)
    const [toppingSelected, setToppingSelected] = useState(0)
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle='light-content'
            />
            <Image source={Images.details} style={styles.img} />
            <Header
                onLeftPress={() => navigation.goBack()}
                shownTitle={false}
                rightIcon={Icons.Icons({ name: "heart", height: 18, width: 19 })}
                leftIcon={Icons.Icons({ name: "back_w", height: 14, width: 21 })}
                style={styles.header}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content_container}>
                    <Text style={styles.name}>Paneer Pan Pizza</Text>
                    <Rating rate={4} />
                    <Text style={styles.description}>For a vegetarian looking for a BIG treat that goes easy on the spices, this one's got it all.. The onions, the capsicum, those delectable mushrooms - with paneer and golden corn to top it all.</Text>
                </View>
                <View>
                    <Text style={styles.title}>Sizes</Text>
                    <Size data={sizeData} selected={sizeSelected} setSelected={setSizeSelected} style={styles.size} home={false} />
                    <Text style={[styles.title, { marginTop: 20 }]}>Crust</Text>
                    <Size data={crustData} selected={crustSelected} setSelected={setCrustSelected} style={styles.size} home={false} />
                    <Text style={[styles.title, { marginTop: 20 }]}>Toppings</Text>
                    <Size data={toppingData} selected={toppingSelected} setSelected={setToppingSelected} style={styles.size} home={false} />
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
    )
}