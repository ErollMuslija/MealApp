import {StyleSheet, Pressable} from 'react-native'
import {Ionicons} from '@expo/vector-icons';

const IconButton = ({onPress, color, icon}) => {
    return (
       <Pressable onPress={onPress} style={({pressed}) => pressed && IconButtonStyle.buttonStyle}>
        <Ionicons name={icon} size={24} color={color} />
       </Pressable>
    )
}

export default IconButton

const IconButtonStyle = StyleSheet.create({
    buttonStyle:{
        opacity: 0.5
    }
})