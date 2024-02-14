import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import COLOURS from '../../Constants/Colors'
import styles from './styles';
const RecipieCard = ({ navigation, data }) => {
  return (
    <TouchableOpacity
      
      style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: data.strMealThumb }}
          style={styles.image}
        />
      </View>
      <Text style={styles.productName}>{data.strMeal}</Text>
      
        <View style={styles.availabilityContainer}>
          
        </View>
        <View style={styles.detailCartButton}>
        <TouchableOpacity
         onPress={() => navigation.navigate('RecpieDetailScreen', { productID: data.idMeal })}
          style={[
            styles.detailCartButton,
            { backgroundColor:  COLOURS.blue  },
          ]}
          >
             <Text
             
              style={styles.detailCartButtonText}
            >
              View Details
            </Text>
          </TouchableOpacity>
          </View>
       
    </TouchableOpacity>
  );
};

export default RecipieCard;
