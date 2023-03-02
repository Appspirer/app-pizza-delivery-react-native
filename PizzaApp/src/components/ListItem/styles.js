import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    block: {
        width: (width - 32 - 16) / 2
    },
    img: {
        width: (width - 32 - 16) / 2,
        height: (width - 32 - 16) / 2,
    },
    item:{
        marginTop:24
    },
    name:{
        fontSize:14,
        color: Colors.black_text,
        fontWeight:'600',
        marginTop:15
    },
    price:{
        fontSize:12,
        color: Colors.gray_text,
        marginTop:3
    },
    check:{
        position:'absolute',
        top:10,
        right:15
    }
})