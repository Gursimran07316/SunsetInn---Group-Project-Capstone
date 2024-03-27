import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Screens/Home/Home';
import RecipeDetailScreen from './src/Screens/RecpieDetailScreen/RecpieDetailScreen';
import SearchRecpieScreen from './src/Screens/SearchRecpieScreen/SearchRecpieScreen';
import * as Notifications from 'expo-notifications';
import Settings from './src/Screens/Settings/Settings';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true
  }),
  handleSuccess: (notificationId) => {
    //console.log("***Success*****")
    console.log('Handle Success:', notificationId);
  },
  handleError: (notificationId, error) => {
    console.log("####Error#####")
    console.log('Handle Error:', error);
  }
  
})


export default function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log("Notification received: ", notification)
      }
    )
    //console.log("subscription: ", subscription)
  
    return () => {
      subscription.remove()
    }
  }, [])
  
  //listen to interacted notification
useEffect(() => {
  const subscription = Notifications.addNotificationResponseReceivedListener(
    (response) => {
      console.log("Tap response: ", response)
    }
  )
  //console.log("Tap subscription: ", subscription)
  return () => {
    subscription.remove()
  }
}, []) 

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
        <Stack.Screen name="SearchRecpieScreen" >
        {(props)=>
        <SearchRecpieScreen {...props} />
        }
        </Stack.Screen>
        <Stack.Screen name="Settings" >
        {(props)=>
        <Settings {...props} />
        }
        </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
  );
};
