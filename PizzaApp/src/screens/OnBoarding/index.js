import React, { useState } from "react";
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native'
import styles from "./styles";
import Carousel from 'react-native-reanimated-carousel';
import Images from "../../themes/Images";
import Colors from "../../themes/Colors";

const width = Dimensions.get('window').width;

const data = [
    {
        id: 0,
        img: Images.carousel0
    },
    {
        id: 1,
        img: Images.carousel1
    },
    {
        id: 2,
        img: Images.carousel2
    }
]

export default function OnBoarding({navigation}) {

    const [selected, setSelected] = useState(0)

    return (
        <View style={styles.container}>
            <Carousel
                loop
                width={width}
                height={width}
                autoPlay={true}
                mode="parallax"
                data={data}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => setSelected(index)}
                renderItem={({ item, index }) => (
                    <View key={index} style={styles.item}>
                        <Image source={item.img} style={styles.img} />
                        <View style={styles.info}>
                            <Text style={styles.name}>Soft & Crispy</Text>
                            <Text style={styles.content}>Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus, scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque.</Text>
                        </View>
                    </View>
                )}
            />
            <View style={styles.dot_container}>
                {data.map((item, index) => {
                    return (
                        <View key={index} style={[styles.dot, {
                            backgroundColor: selected === index ? Colors.gray : Colors.gray_white
                        }]} />
                    )
                })}
            </View>
            <View style={styles.login_container}>
                <TouchableOpacity style={[styles.button_container,{backgroundColor:Colors.blue_fb}]}>
                    <Text style={[styles.text,{color: Colors.white}]}>Signup with Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button_container,{backgroundColor:Colors.red}]}>
                    <Text style={[styles.text,{color: Colors.white}]}>Signup with Google</Text>
                </TouchableOpacity>
                <Text style={styles.or}>or</Text>
                <TouchableOpacity style={[styles.button_container,{backgroundColor: Colors.transparent}]}>
                    <Text style={[styles.text,{color: Colors.black_text}]}>Signup with Email</Text>
                </TouchableOpacity>
                <View style={styles.bottom_container}>
                    <Text style={styles.question}>Existing user?</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate("HomeScreen")}>
                        <Text style={styles.login}>Login now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}