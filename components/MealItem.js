import {View, Text, StyleSheet, Pressable, Image, Platform} from 'react-native'
import MealDetails from './MealDetails';

const MealItem = ({title, image, duration, complexity, affordability, presHandler}) => {
    
    const mealDetailsProps = {
        duration,
        complexity,
        affordability,
    }
    
    return (
        <View style={MealItemStyle.mealItem}>
            <View style={MealItemStyle.innerContainer}>
            <Pressable android_ripple={{opacity: 0.5}}
            style={({pressed}) => [pressed ? {opacity: 0.75} : null]}
            onPress={presHandler}
            >
            <View>
                <Image source={{uri: image}} style={MealItemStyle.imageStyle}/>
            </View>
            <Text style={MealItemStyle.title}>{title}</Text>
            <MealDetails {...mealDetailsProps}/>
            </Pressable>
            </View> 
        </View>
    )
}

export default MealItem;

const MealItemStyle = StyleSheet.create({
    imageStyle:{
        width: '100%',
        height: 200,
    },
    title:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    mealItem:{
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
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
    innerContainer:{
        overflow:'hidden',
        borderRadius: 8
    }
})