import {View, Text, StyleSheet} from 'react-native'

const MealItem = ({title}) => {
    return (
        <View style={MealItemStyle.container}>
            <Text>{title}</Text>
        </View>
    )
}

export default MealItem;

const MealItemStyle = StyleSheet.create({
    container:{
        flex: 1
    }
})