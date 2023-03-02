import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import Colors from "../../themes/Colors";
import styles from "./styles";

export default function Size({ data, selected, setSelected, style, home = true }) {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={[styles.price_container, style]}>
            {data.map((item, index) => {
                return (
                    <TouchableOpacity key={index} style={[styles.price_item, {
                        marginRight: index === data.length - 1 ? (home ? 0 : 32) : 16,
                        borderColor: selected === item.id ? Colors.red : Colors.border
                    }]}
                        onPress={() => setSelected(item.id)}
                    >
                        <Text style={[styles.price_item_name, {
                            color: selected === item.id ? Colors.red : Colors.black_text
                        }]}>{item.name}</Text>
                        <Text style={styles.price_item_price}>{item.price}</Text>
                    </TouchableOpacity>
                )
            })}
        </ScrollView>
    )
}