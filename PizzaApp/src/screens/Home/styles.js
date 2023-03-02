import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 16,
        backgroundColor: Colors.white
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    location: {
        flexDirection: "row",
        alignItems: 'center'
    },
    avatar: {
        height: 30,
        width: 30,
        borderRadius: 15
    },
    delivery: {
        fontSize: 10,
        color: Colors.red,
        marginLeft: 5
    },
    location_text: {
        fontSize: 16,
        color: Colors.black_text,
        fontWeight: '500',
        marginTop: 5
    },
    recommend_row: {
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    recommend: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.black_text
    },
    view_all: {
        fontSize: 14,
        color: Colors.red,
        fontWeight: '600'
    },
    recommend_text: {
        fontSize: 12,
        color: Colors.gray_text,
        marginTop: 5
    },
    recommend_container: {
        padding: 16,
        marginTop: 20,
        backgroundColor: Colors.white,
        shadowColor: Colors.black_text,
        shadowOpacity: 0.2,
        shadowOffset: {
            height: 2
        },
        borderRadius: 16,
        shadowRadius:10
    },
    img: {
        alignSelf: 'center',
        width: width - 64,
        height: (width - 64) * 172 / 295,
        borderRadius: 16
    },
    img_container:{
        backgroundColor:Colors.white,
        shadowColor:Colors.black_text,
        shadowOffset:{
            height:5
        },
        shadowOpacity:0.4,
        borderRadius: 16,
        shadowRadius:10
    },
    rating_container:{
        flexDirection:'row',
        marginTop:10
    },
    star:{
        marginHorizontal:2
    },
    recommend_name:{
        fontSize:18,
        color: Colors.black_text,
        fontWeight:'500',
        marginTop:24
    },
    price_item:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width: width/3,
        borderRadius:3,
        borderWidth:1,
        paddingVertical:8,
        paddingHorizontal:10,
    },
    price_container:{
        marginTop:20
    },
    button:{
        paddingVertical:10,
        alignItems:'center',
        borderRadius:8
    },
    text:{
        fontSize:12,
        fontWeight:'600',
    },
    price_item_name:{
        fontSize:10,
        fontWeight:'500'
    },
    price_item_price:{
        fontSize:10, 
        fontWeight:'500',
        color: Colors.black_text
    }
})