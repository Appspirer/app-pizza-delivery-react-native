import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var {height, width} = Dimensions.get('window')

export default StyleSheet.create({
    price_item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width / 3,
        borderRadius: 3,
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 10,
    },
    price_container: {
        marginTop: 20
    },
    price_item_name: {
        fontSize: 10,
        fontWeight: '500'
    },
    price_item_price: {
        fontSize: 10,
        fontWeight: '500',
        color: Colors.black_text
    }
})