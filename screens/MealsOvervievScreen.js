import {View, Text, StyleSheet} from 'react-native'
import { MEALS } from '../data/dummy-data';

const MealsOverviewScreen = ({route}) => {
    const {categoryId, categoryTitle, categoryColor } = route.params

    return (
        <View style={MealsOverviewScreenStyle.container}>
            <Text>New Screen</Text>
        </View>
    )
}

export default MealsOverviewScreen;

const MealsOverviewScreenStyle = StyleSheet.create({
     container:{
        flex :1
     }
}) 