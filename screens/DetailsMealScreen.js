import {View, StyleSheet, Image, Text} from 'react-native'
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import SubTitle from '../components/MealDetails/SubTitle';

const DetailMealScreen = ({route}) => {

    const {mealId } = route.params;

    const selectedMeals = MEALS.find((meal) => {
      return  meal.id === mealId
    })

    const {title, imageUrl, affordability, duration, complexity} = selectedMeals;

    const mealDetailsProps = {
        affordability, duration, complexity
    }

    return (
        <View style={DetailMealScreenStyle.container}>
            <Image source={{uri: imageUrl}} style={DetailMealScreenStyle.image}/>
            <Text style={DetailMealScreenStyle.title}>{title}</Text>
            <MealDetails textSyte={DetailMealScreenStyle.textStyle} {...mealDetailsProps}/>
            <SubTitle>Ingredients</SubTitle>
            {selectedMeals.ingredients.map(item => <Text key={item}>{item}</Text>)}
            <SubTitle>Steps</SubTitle>
            {selectedMeals.steps.map(item => <Text key={item}>{item}</Text>)}
        </View>
    )
}

export default DetailMealScreen;

const DetailMealScreenStyle = StyleSheet.create({
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
    }
})