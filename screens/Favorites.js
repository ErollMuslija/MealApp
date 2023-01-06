import {View, Text, StyleSheet} from 'react-native'

const Favorites = () => {
    return (
        <View style={FavoriteStyle.container}>
            <Text>
                Favorite Screen
            </Text>
        </View>
    )
}

export default Favorites;

const FavoriteStyle = StyleSheet.create({
    container:{
        flex: 1
    }
})