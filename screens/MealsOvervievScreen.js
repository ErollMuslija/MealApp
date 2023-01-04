import {View, Text, StyleSheet, FlatList} from 'react-native'
import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';

const MealsOverviewScreen = ({route}) => {
    const {categoryId, categoryTitle, categoryColor } = route.params

    const displayMeal = MEALS.filter(item => {
        return item.categoryIds.indexOf(categoryId) >= 0;
    })

    function renderMealItem (itemData) {
        return <MealItem title={itemData.item.title}/>
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