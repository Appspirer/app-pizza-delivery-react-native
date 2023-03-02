import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    img: {
        width: width,
        height: width + 5,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius:8
    },
    header:{
        position:'absolute',
        top:60,
        width: width - 32,
        alignSelf:'center'
    },
    content_container:{
        marginHorizontal:16,
        marginTop:20
    },
    name:{
        fontSize:20,
        color: Colors.black_text,
        fontWeight:'bold'
    },
    description:{
        fontSize:12,
        color: Colors.gray_text,
        marginTop:10
    },
    title:{
        fontSize:14,
        color:Colors.black_text,
        marginTop:5,
        fontWeight:'500',
        marginLeft:16
    },
    size:{
        paddingLeft:16,
        marginTop:10
    },
    button:{
        position:'absolute',
        bottom:30,
        width: width-32,
        alignSelf:'center',
        alignItems:'center',
        backgroundColor: Colors.red,
        paddingVertical:12,
        borderRadius:8,
        shadowColor:Colors.black_text,
        shadowOffset:{
            height:10
        },
        shadowRadius:10,
        shadowOpacity:0.3
    },
    text:{
        fontSize:12,
        color: Colors.white,
        fontWeight:'600'
    }
})