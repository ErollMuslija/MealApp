import { View, Text, StyleSheet } from "react-native"

const MealDetails = ({duration, complexity, affordability, style, textSyte}) => {
    return(
    <View style={[MealDetailsStyle.details, style]}>
        <Text style={[MealDetailsStyle.detailItems, textSyte]}>{duration}m</Text>
        <Text style={[MealDetailsStyle.detailItems, textSyte]}>{complexity.toUpperCase()}</Text>
        <Text style={[MealDetailsStyle.detailItems, textSyte]}>{affordability.toUpperCase()}</Text>
    </View>
    )
}

export default MealDetails;

const MealDetailsStyle = StyleSheet.create({
    container:{
        flex: 1
    },
    details:{
        flexDirection:'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center'
    },
    detailItems:{
        marginHorizontal: 4,
        fontSize: 12
    },
})