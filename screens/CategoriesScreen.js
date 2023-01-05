import {View, Text} from 'react-native'
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

    return <FlatList
    data={CATEGORIES}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    numColumns={2} />
}

export default CategoriesScreen;