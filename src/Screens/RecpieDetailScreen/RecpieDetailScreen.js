import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
  StyleSheet,
} from 'react-native';
import COLOURS from '../../Constants/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import  styles  from './styles';
import axios from 'axios';

const RecipeDetailScreen= ({ route, navigation}) => {
  const { productID } = route.params;

  const [recipe, setRecipe] = useState({});


  
  const openYouTube = () => {
    
  };
  const shareRecipeVideo = () => {
    
  };
  useEffect(() => {
    // setProduct(getProductById(productID));
     fetchRecipe()
  }, []);
 const fetchRecipe = async () => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${productID}`);
      setRecipe(response.data.meals[0]);
   
    
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        backgroundColor={COLOURS.backgroundLight}
        barStyle="dark-content"
      />
      <ScrollView style={styles.container}> 
      <View style={styles.imageContainer}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack('Home')}>
              <Entypo
                name="chevron-left"
                style={styles.backButton}
              />
            </TouchableOpacity>
          </View>
          </View>
        
        <Image source={{ uri: recipe.strMealThumb }} style={styles.image} />
        <View style={styles.detailContainer}>
          <Text style={styles.title}>{recipe.strMeal}</Text>

          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Category:</Text>
            <Text style={styles.infoContent}>{recipe.strCategory}</Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Cuisine:</Text>
            <Text style={styles.infoContent}>{recipe.strArea}</Text>
          </View>

          <Text style={styles.subTitle}>Ingredients</Text>
          {Object.keys(recipe).map((key) => {
            if (key.startsWith('strIngredient') && recipe[key]) {
              const measureKey = `strMeasure${key.slice('strIngredient'.length)}`;
              return (
                <Text key={key} style={styles.ingredient}>
                  - {recipe[key]}: {recipe[measureKey]}
                </Text>
              );
            }
          })}

          <Text style={styles.subTitle}>Instructions</Text>
          <Text style={styles.instructions}>{recipe.strInstructions}</Text>

          <View style={styles.buttonContainer}>
  <TouchableOpacity onPress={openYouTube} style={[styles.button, styles.watchButton]}>
  <FontAwesome name="youtube-play" size={18} color="#ffffff" style={styles.icon} />
  <Text style={styles.buttonText}>Watch Video</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={shareRecipeVideo} style={[styles.button, styles.shareButton]}>
  <FontAwesome name="share" size={18} color="#ffffff" style={styles.icon} />
  <Text style={styles.buttonText}>Share</Text>
  </TouchableOpacity>
</View>
        </View>
      </ScrollView>
    </SafeAreaView>
    );
  };
  
  
  export default RecipeDetailScreen; 



