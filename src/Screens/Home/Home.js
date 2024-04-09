import React from 'react';
import { View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native';

import styles from './style';
import { Feather,Entypo,MaterialIcons } from '@expo/vector-icons';

import RecipieCard from '../../Components/RecipieCard/RecipieCard';


const Home = ({ navigation, prd,toggleTheme,isDarkTheme }) => {
  const backgroundColor = isDarkTheme ? "black" : 'white';
  const textStyle=isDarkTheme?styles.darkText:styles.lightText
  console.log(prd);
  return (
    <View style={styles.container} backgroundColor={backgroundColor} >
      <StatusBar backgroundColor={backgroundColor} barStyle="#6a51ae" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('SearchRecpieScreen')}>

<Entypo
  name="shopping-bag"
  style={[styles.shoppingBagIcon,textStyle]}
/>
</TouchableOpacity>
<View style={{
  flexDirection: 'row',
  gap:25
}}>

<TouchableOpacity onPress={toggleTheme}>
<MaterialIcons name="mode-night" size={24} style={textStyle} />
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
<Feather name="settings" size={24}   style={[textStyle]} />
</TouchableOpacity>

</View>
        </View>
        <View style={styles.shopInfoContainer}>
          <Text style={[styles.shopName,textStyle]}>
          Sunsetinn 
          </Text>
          <Text style={[styles.shopDescription,textStyle]}>
          Welcome to Sunset Inn Recipes {"\n"} Where Every Dish Tells a Story
            
          </Text>
        </View>
        <View style={styles.productCategoryContainer}>
          <View style={styles.productCategoryHeader}>
            <View style={styles.productCategoryTitle}>
              <Text style={[styles.productCategoryText,textStyle]}>Featured recipies</Text>
              <Text style={[styles.productCategoryCount,textStyle]}>{prd.length}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('SearchRecpieScreen')}>
            <Text style={styles.seeAllText}>Search</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.productCardContainer}>
            {prd.map(data => (
              <RecipieCard data={data} key={data.idMeal} navigation={navigation} isDarkTheme={isDarkTheme}  />
            ))}
          </View>
        </View>
        
      </ScrollView>
    </View>
  );
};

export default Home;
