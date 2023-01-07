import { useLayoutEffect } from 'react';
import {View, StyleSheet, FlatList} from 'react-native'
import MealItem from '../components/MealItem';
import MealsList from '../components/MealsList';
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

    return (
        <MealsList items={displayMeal}/>
    )
}

export default MealsOverviewScreen;

const MealsOverviewScreenStyle = StyleSheet.create({
     container:{
        flex :1
     }
}) 