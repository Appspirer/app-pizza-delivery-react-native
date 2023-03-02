import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import Icons from "../../themes/Icons";
import styles from "./styles";

export default function ListItem({ data, onPress }) {
    return (
        <View style={styles.container}>
            <View style={styles.block}>
                {data.filter((_, i) => i % 2 === 0).map((item, index) => {
                    return (
                        <TouchableOpacity key={index} style={styles.item} onPress={onPress}>
                            <Image source={item.img} style={styles.img} />
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.price}>Starts from ₹{item.price}</Text>
                            {item.check && <View style={styles.check}>
                                {Icons.Icons({ name: 'check', height: 15, width: 15 })}
                            </View>}
                        </TouchableOpacity>
                    )
                })}
            </View>
            <View style={styles.block}>
                {data.filter((_, i) => i % 2 !== 0).map((item, index) => {
                    return (
                        <TouchableOpacity key={index} style={styles.item} onPress={onPress}>
                            <Image source={item.img} style={styles.img} />
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.price}>Starts from ₹{item.price}</Text>
                            {item.check && <View style={styles.check}>
                                {Icons.Icons({ name: 'check', height: 15, width: 15 })}
                            </View>}
                        </TouchableOpacity>
                    )
                })}
            </View>
        </View>
    )
}