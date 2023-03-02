import React from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import Icons from "../../themes/Icons";
import styles from "./styles";

export default function Header({ onLeftPress, style, shownTitle = true, rightIcon, leftIcon }) {
    return (
        <View style={[styles.header, style]}>
            <TouchableOpacity onPress={onLeftPress ? onLeftPress : null}>
                {leftIcon ? leftIcon : Icons.Icons({ name: 'back', height: 14, width: 21 })}
            </TouchableOpacity>
            {shownTitle && <Text style={styles.title}>Menu</Text>}
            <TouchableOpacity style={styles.right_icon}>
                {rightIcon ? rightIcon : null}
            </TouchableOpacity>
        </View>
    )
}