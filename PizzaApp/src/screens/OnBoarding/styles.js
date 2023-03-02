import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

const width = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingTop: 30
    },
    img: {
        width:width,
        borderRadius: 16
    },
    info:{
        marginTop:20,
        alignItems:'center',
        paddingHorizontal:16
    },
    name:{
        fontSize: 20,
        color: Colors.black_text,
        fontWeight:'bold'
    },
    content:{
        fontSize:12,
        color: Colors.gray_text,
        marginTop:5,
        textAlign:'center'
    },
    dot_container:{
        flexDirection:'row',
        alignSelf:'center',
    },
    dot:{
        height:5,
        width:5,
        borderRadius:3,
        marginHorizontal:3
    },
    login_container:{
        position:'absolute',
        bottom:60,
        width:width,
        alignItems:'center',
    },
    button_container:{
        paddingVertical:10,
        width:width*0.66,
        alignItems:'center',
        borderRadius:8,
        marginTop:15
    },
    or:{
        fontSize:10,
        color: Colors.gray_text1,
        marginTop:15
    },
    text:{
        fontSize:12,
        fontWeight:'600'
    },
    bottom_container:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:25
    },
    question:{
        fontSize:12,
        color: Colors.black_text,
        marginRight:8
    },
    login:{
        color: Colors.red,
        fontSize:12,
        fontWeight:'600'
    }
})