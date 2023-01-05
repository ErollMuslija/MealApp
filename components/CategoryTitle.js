import {View, Text, Pressable, StyleSheet, Platform} from 'react-native'

const CategoryTitle = ({title, color, onPress}) => {
    return(
        <View style={[CategoryTitleStyle.gridItem]}>
            <Pressable android_ripple={{color: '#ccc'}} style={({pressed}) => [CategoryTitleStyle.button, pressed ? CategoryTitleStyle.pressedButton : null]}
            onPress={onPress}
            >
                <View style={[CategoryTitleStyle.innerContainer, {backgroundColor: color}]}>
                    <Text style={CategoryTitleStyle.title} >{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryTitle;

const CategoryTitleStyle = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
        },
    innerContainer:{
        flex: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    button: {
        flex: 1,
    },
    pressedButton:{
        opacity: 0.25
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})