import React from "react";
import { View, Text } from 'react-native'
import Icons from "../../themes/Icons";
import styles from "./styles";

export default function Rating({rate=5}) {
    let arr = [...Array(rate).keys()]
    let arrL = [...Array(5 - rate).keys()]
    return (
        <View style={styles.rating_container}>
            {arr.map((item, index) => {
                return (
                    <View key={index} style={styles.star}>
                        {Icons.Icons({ name: "star_red", height: 12, width: 13 })}
                    </View>
                )
            })}
            {arrL.map((item, index) => {
                return (
                    <View key={index} style={styles.star}>
                        {Icons.Icons({ name: "star_gray", height: 12, width: 13 })}
                    </View>
                )
            })}
        </View>
    )
}