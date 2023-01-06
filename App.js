import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOvervievScreen';
import DetailMealScreen from './screens/DetailsMealScreen';
import Favorites from './screens/Favorites';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          title: 'Categories',
          headerStyle: {backgroundColor: '#351401'},
          headerTintColor: 'white',
          headerBackTitle:"Back",
          contentStyle: {backgroundColor: '#3f2f25'}
        }}>
          <Stack.Screen name='MealCategories' component={CategoriesScreen} options={{title: 'Categories'}}/>
          <Stack.Screen name='MealDetails' component={MealsOverviewScreen}/>
          <Stack.Screen name='DetailMeal' component={DetailMealScreen} options={{title:'Meal Details'}}/>
          <Stack.Screen name='Favorites' component={Favorites} options={{title:'Favorites'}}/>
        </Stack.Navigator>
      </NavigationContainer>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
