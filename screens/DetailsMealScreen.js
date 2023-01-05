import {View, Text, StyleSheet} from 'react-native'

const DetailMealScreen = () => {
    return (
        <View style={DetailMealScreenStyle.container}>
            <Text>Welcome to the detaild meal text screen</Text>
        </View>
    )
}

export default DetailMealScreen;

const DetailMealScreenStyle = StyleSheet.create({
    container: {
        flex: 1
    }
})