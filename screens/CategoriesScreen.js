import {View, Text, Pressable} from 'react-native'
import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryTitle from '../components/CategoryTitle';



const CategoriesScreen = ({navigation}) => {



    function renderItem (item) {
        function pressHandler(){
            navigation.navigate('MealDetails', {
                categoryId: item.item.id,
                categoryTitle: item.item.title,
                categoryColor: item.item.color
            });
        }
    
        return <CategoryTitle title={item.item.title} color={item.item.color} onPress={pressHandler}/>
    }

    function navigationHandler(){
        navigation.navigate('Favorites')
    }

    return (
        <View style={{flex: 1}}>
            <Pressable onPress={navigationHandler} style={({pressed}) => pressed && {opacity: 0.5}}>
                <View style={{backgroundColor: 'gold', height: 50, width: '90%', alignSelf: 'center', borderRadius: 5, marginTop: 20, justifyContent: 'center'}}>
                    <Text style={{textAlign: 'center'}}>Favorite</Text>
                </View>
            </Pressable>
    
        <FlatList
        data={CATEGORIES}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2} />
        </View>
    )
   
}

export default CategoriesScreen;