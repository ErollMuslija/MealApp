import {View, Text, StyleSheet} from 'react-native'

const List = ({data}) => {
    return (
        <>
        {data.map(item => <View key={item} style={ListStyle.listItem}><Text style={ListStyle.itemText} >{item}</Text></View>)}
        </>
    )
}

export default List;

const ListStyle = StyleSheet.create({
    listItem:{
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 8,
        marginHorizontal: 12,
        backgroundColor: '#e2b497'
    },
    itemText:{
        color: '#351401',
        textAlign: 'center'
    }
})