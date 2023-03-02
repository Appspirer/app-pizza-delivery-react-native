import {StyleSheet} from 'react-native'
import Colors from '../../themes/Colors'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.white,
        paddingHorizontal:16,
        paddingTop:60
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingBottom:10
    },
    right_icon:{
        width:20
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color: Colors.black_text
    }
})