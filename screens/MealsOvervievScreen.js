import { useLayoutEffect } from 'react';
import {View, StyleSheet, FlatList} from 'react-native'
import MealItem from '../components/MealItem';
import { MEALS, CATEGORIES } from '../data/dummy-data';

const MealsOverviewScreen = ({route, navigation}) => {
    const { categoryId } = route.params

    const displayMeal = MEALS.filter(item => {
        return item.categoryIds.indexOf(categoryId) >= 0;
    })

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title

        navigation.setOptions({
            title: categoryTitle
        })
    }, [categoryId, navigation])

  

    function renderMealItem (itemData) {
        function presHandler(){
            navigation.navigate('DetailMeal')
        }

        const mealItemPropfs = {
            title: itemData.item.title,
            image : itemData.item.imageUrl,
            duration: itemData.item.duration,
            complexity: itemData.item.complexity,
            affordability: itemData.item.affordability,
            presHandler: presHandler
        }
        return <MealItem {...mealItemPropfs}/>
    }

    return (
        <View style={MealsOverviewScreenStyle.container}>
            <FlatList data={displayMeal} keyExtractor={(item)=> item.id}
            renderItem={renderMealItem}/>
        </View>
    )
}

export default MealsOverviewScreen;

const MealsOverviewScreenStyle = StyleSheet.create({
     container:{
        flex :1
     }
}) 