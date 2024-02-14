import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image  } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Screens/Home/Home';
import RecipeDetailScreen from './src/Screens/RecpieDetailScreen/RecpieDetailScreen';
export default function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);
  
  const fetchRecipes = async () => {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian');
      setRecipes(response.data.meals);
   
      // console.log(recipes);
    } catch (error) {
      console.error(error);
    }
  };
  const Stack = createStackNavigator();
  return (
    <NavigationContainer >
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
 
      <Stack.Screen name="Home" >
        {(props)=>
        <Home {...props} prd={recipes}/>
        }
        
      </Stack.Screen>
      <Stack.Screen name="RecpieDetailScreen" >
        {(props)=>
        <RecipeDetailScreen {...props} />
        }
        </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
  );
};
