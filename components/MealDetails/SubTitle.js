import {View, Text, StyleSheet} from 'react-native'

const SubTitle = ({children}) => {
    return(
        <View style={SubTitleStyle.subTitleContainer}>
        <Text style={SubTitleStyle.subTitle}>{children}</Text>
        </View>
    )
}
export default SubTitle;

const SubTitleStyle = StyleSheet.create({
    subTitle:{
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
       
    },
    subTitleContainer:{
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
        padding: 6,
        marginVertical: 4,
        marginHorizontal: 12
    }

})

