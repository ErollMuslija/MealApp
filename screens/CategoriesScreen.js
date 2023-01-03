import {View, Text} from 'react-native'
import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryTitle from '../components/CategoryTitle';

function renderItem (item) {
    return <CategoryTitle title={item.item.title} color={item.item.color}/>
}

const CategoriesScreen = () => {

    return <FlatList
    data={CATEGORIES}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    numColumns={2} />
}

export default CategoriesScreen;