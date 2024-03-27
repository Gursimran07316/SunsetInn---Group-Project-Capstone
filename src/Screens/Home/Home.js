import React from 'react';
import { View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native';

import styles from './style';
import { Feather,Entypo } from '@expo/vector-icons';

import RecipieCard from '../../Components/RecipieCard/RecipieCard';


const Home = ({ navigation, prd }) => {
  console.log(prd);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle="#6a51ae" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('SearchRecpieScreen')}>

<Entypo
  name="shopping-bag"
  style={styles.shoppingBagIcon}
/>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
<Feather name="settings"   style={styles.settingIcon} />
</TouchableOpacity>
        </View>
        <View style={styles.shopInfoContainer}>
          <Text style={styles.shopName}>
          Sunsetinn 
          </Text>
          <Text style={styles.shopDescription}>
          Welcome to Sunset Inn Recipes {"\n"} Where Every Dish Tells a Story
            
          </Text>
        </View>
        <View style={styles.productCategoryContainer}>
          <View style={styles.productCategoryHeader}>
            <View style={styles.productCategoryTitle}>
              <Text style={styles.productCategoryText}>Featured recipies</Text>
              <Text style={styles.productCategoryCount}>{prd.length}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('SearchRecpieScreen')}>
            <Text style={styles.seeAllText}>Search</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.productCardContainer}>
            {prd.map(data => (
              <RecipieCard data={data} key={data.idMeal} navigation={navigation}  />
            ))}
          </View>
        </View>
        
      </ScrollView>
    </View>
  );
};

export default Home;
