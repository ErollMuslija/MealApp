import {View, Text, StyleSheet, FlatList} from 'react-native'
import MealItem from './MealItem'
import { useNavigation } from '@react-navigation/native'

const MealsList = ({items}) => {

    const navigation = useNavigation();
    function renderMealItem (itemData) {
        function presHandler(){
            navigation.navigate('DetailMeal',{
                mealId: itemData.item.id,
                image : itemData.item.imageUrl,
                duration: itemData.item.duration,
                complexity: itemData.item.complexity,
                affordability: itemData.item.affordability,
            })
        }

        const mealItemPropfs = {
            title: itemData.item.title,
            image : itemData.item.imageUrl,
            duration: itemData.item.duration,
            complexity: itemData.item.complexity,
            affordability: itemData.item.affordability,
            presHandler: presHandler,
        }
        return <MealItem {...mealItemPropfs}/>
    }

    return (
        <View style={MealsListStyle.container}>
            <FlatList data={items} keyExtractor={(item)=> item.id}
            renderItem={renderMealItem}/>
        </View>
    )
}

export default MealsList;

const MealsListStyle = StyleSheet.create({
    container:{
        flex :1
     }
})