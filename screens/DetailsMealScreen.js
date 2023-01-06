import { useContext, useLayoutEffect } from 'react';
import {View, StyleSheet, Image, Text, ScrollView, Button} from 'react-native'
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import SubTitle from '../components/MealDetails/SubTitle';
import List from '../components/MealDetails/List';
import IconButton from '../components/IconButton';
import { FavoriteContext } from '../Store/Context/favorites-context';

const DetailMealScreen = ({route, navigation}) => {

    const favoritesMealContext = useContext(FavoriteContext);

    const {mealId } = route.params;

    const mealIsFavorite = favoritesMealContext.ids.includes(mealId)


    const selectedMeals = MEALS.find((meal) => {
      return  meal.id === mealId
    })

    function changeFavoriteStatusHandler(){
        if(mealIsFavorite){
            favoritesMealContext.removeFavorire(mealId)
        } else{
            favoritesMealContext.addFavorite(mealId)
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon={mealIsFavorite ? 'star' : 'star-outline'} onPress={changeFavoriteStatusHandler} color={'white'}/>
            }
        });
    }, [navigation, changeFavoriteStatusHandler])

    const {title, imageUrl, affordability, duration, complexity} = selectedMeals;

    const mealDetailsProps = {
        affordability, duration, complexity
    }

    return (
    <ScrollView style={DetailMealScreenStyle.rootContainer}>
        <View style={DetailMealScreenStyle.container}>
            <Image source={{uri: imageUrl}} style={DetailMealScreenStyle.image}/>
            <Text style={DetailMealScreenStyle.title}>{title}</Text>
            <MealDetails textSyte={DetailMealScreenStyle.textStyle} {...mealDetailsProps}/>
            <View style={DetailMealScreenStyle.listOuterContainer}>
                <View style={DetailMealScreenStyle.listCintainer}>
                    <SubTitle>Ingredients</SubTitle>
                    <List data={selectedMeals.ingredients}/>
                    <SubTitle>Steps</SubTitle>
                    <List data={selectedMeals.steps}/>
                </View>
            </View>
        </View>
    </ScrollView>
    )
}

export default DetailMealScreen;

const DetailMealScreenStyle = StyleSheet.create({
    rootContainer:{
        marginBottom: 32
    },
    container: {
        flex: 1,
    },
    title:{
        fontWeight: 'bold',
        margin: 8,
        fontSize: 24,
        textAlign: 'center',
        color: 'white'
    },
    image:{
        height: 350,
        width: '100%'
    },
    detailItems:{
        marginHorizontal: 4,
        fontSize: 12
    },
    textStyle:{
        color: 'white'
    },
    listCintainer:{
        width: '80%',
    },
    listOuterContainer:{
        alignItems: 'center'
    }
})