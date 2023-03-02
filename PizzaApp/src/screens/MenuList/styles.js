import {StyleSheet} from 'react-native'
import Colors from '../../themes/Colors'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.white,
        paddingHorizontal:16,
        paddingTop:60
    },
    filter_container:{
        position:'absolute',
        height:60,
        width:60,
        borderRadius:30,
        backgroundColor:Colors.white,
        shadowColor:Colors.black_text,
        shadowOffset:{
            height:2
        },
        shadowOpacity:0.3,
        bottom:60,
        right:10,
        justifyContent:'center',
        alignItems:'center'
    }
})