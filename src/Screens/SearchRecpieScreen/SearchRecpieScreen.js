
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';

import COLOURS from '../../Constants/Colors';
import styles from './styles';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import RecipieCard from '../../Components/RecipieCard/RecipieCard';
const SearchRecpieScreen = ({ navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recpies, setRecpies] = useState([])
 

 

  
  

  const handleSearch =async () => {
    // Implement search logic here
    try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`);
      //   setRecipe(response.data.meals[0]);
     
     setRecpies(response.data.meals);
      } catch (error) {
        console.error(error);
      }
  };



  return (
    <View style={styles.container}>
         <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack('Home')}>
            <Entypo
              name="chevron-left"
              style={styles.shoppingBagIcon}
            />
          </TouchableOpacity>
          
        </View>
        <View style={{ padding: 16, flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={{
            flex: 1,
            height: 40,
            borderColor: COLOURS.gray,
            borderWidth: 1,
            borderRadius: 8,
            paddingLeft: 10,
            marginRight: 8,
          }}
          placeholder="Search products..."
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity onPress={handleSearch} style={styles.shoppingBagIcon}>
          <MaterialCommunityIcons name="magnify" size={24}  />
        </TouchableOpacity>
      </View>
     
        <View style={styles.productCategoryContainer}>
          
          <View style={styles.productCardContainer}>
          
             {recpies.map(data => (
              <RecipieCard data={data} key={data.idMeal} navigation={navigation}  />
            ))}
          </View>
        </View>
        </ScrollView>
    </View>
  );
};

export default SearchRecpieScreen;
