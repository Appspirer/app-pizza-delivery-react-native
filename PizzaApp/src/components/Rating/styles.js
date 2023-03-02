import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    rating_container:{
        flexDirection:'row',
        marginTop:10
    },
    star:{
        marginHorizontal:2
    },
})