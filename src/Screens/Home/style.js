import { StyleSheet } from 'react-native';
import COLOURS from '../../Constants/Colors'

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: COLOURS.white,
    // paddingTop:25,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  shoppingBagIcon: {
    fontSize: 18,
    color: COLOURS.backgroundMedium,
    padding: 12,
    borderRadius: 10,
    backgroundColor: COLOURS.backgroundLight,
  },
  cartIcon: {
    fontSize: 18,
    color: COLOURS.backgroundMedium,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLOURS.backgroundLight,
  },
  shopInfoContainer: {
    marginBottom: 10,
    padding: 16,
  },
  shopName: {
    fontSize: 26,
    color: COLOURS.black,
    fontWeight: '500',
    letterSpacing: 1,
    marginBottom: 10,
  },
  shopDescription: {
    fontSize: 14,
    color: COLOURS.black,
    fontWeight: '400',
    letterSpacing: 1,
    lineHeight: 24,
  },
  productCategoryContainer: {
    padding: 16,
  },
  productCategoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productCategoryTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productCategoryText: {
    fontSize: 18,
    color: COLOURS.black,
    fontWeight: '500',
    letterSpacing: 1,
  },
  productCategoryCount: {
    fontSize: 14,
    color: COLOURS.black,
    fontWeight: '400',
    opacity: 0.5,
    marginLeft: 10,
  },
  seeAllText: {
    fontSize: 14,
    color: COLOURS.blue,
    fontWeight: '400',
  },
  productCardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  accessoryContainer: {
    padding: 16,
  },
  accessoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  accessoryTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accessoryText: {
    fontSize: 18,
    color: COLOURS.black,
    fontWeight: '500',
    letterSpacing: 1,
  },
  accessoryCount: {
    fontSize: 14,
    color: COLOURS.black,
    fontWeight: '400',
    opacity: 0.5,
    marginLeft: 10,
  },
  accessoryCardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

