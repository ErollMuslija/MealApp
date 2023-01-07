import { useContext } from 'react';
import {View, Text, StyleSheet} from 'react-native'
import MealsList from '../components/MealsList';
import {FavoriteContext} from '../Store/Context/favorites-context'
import { MEALS } from '../data/dummy-data';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Favorites = () => {

    const favoriteMealsContext = useContext(FavoriteContext);

    const favoriteMeals = MEALS.filter(meal => favoriteMealsContext.ids.includes(meal.id))


    if(favoriteMeals.length === 0){
        return <View style={FavoriteStyle.contentMsg}>
            <Text style={FavoriteStyle.text}>
                No Favorites Available
            </Text>
            <MaterialCommunityIcons name="food-takeout-box" size={94} color="white" />
        </View>
    }

    return (
      <MealsList items={favoriteMeals}/>
    )
}

export default Favorites;

const FavoriteStyle = StyleSheet.create({
    contentMsg:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    }
})