import { StyleSheet } from 'react-native';
import COLOURS from '../../Constants/Colors';

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f8f9fa',
      },
      container: {
        flex: 1,
      },
      containerr: {
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
        position: 'relative',
        paddingTop:25,
      },
      imageContainer: {
        width: '100%',
        backgroundColor: COLOURS.backgroundLight,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 4,
      },
      headerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 16,
        paddingLeft: 16,
      },
      backButton: {
        fontSize: 18,
        color: '#ffffff',
        padding: 12,
        backgroundColor: '#007bff',
        borderRadius: 10,
      },
      image: {
        width: '100%',
        height: 300,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        overflow: 'hidden',
      },
      detailContainer: {
        padding: 20,
      },
      title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
      },
      infoContainer: {
        flexDirection: 'row',
        marginBottom: 5,
      },
      infoTitle: {
        fontWeight: 'bold',
        color: '#6c757d',
      },
      infoContent: {
        marginLeft: 5,
        color: '#495057',
      },
      subTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 15,
        marginBottom: 5,
      },
      ingredient: {
        fontSize: 16,
        color: '#495057',
        marginBottom: 2,
      },
      instructions: {
        fontSize: 16,
        color: '#495057',
        marginTop: 5,
        marginBottom: 15,
        lineHeight: 22,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
      },
      button: {
    flexDirection: 'row', // Align icon and text horizontally
    justifyContent: 'center', // Center the content
    alignItems: 'center', // Align items vertically
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#4CAF50', // A green color for the share button
    flex: 1,
    marginLeft: 10, // Adjust based on your layout
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10, // Space between the icon and the text
  },
      watchButton: {
        marginRight: 10, // Adds spacing between the buttons
        backgroundColor: '#007bff',
      },
      shareButton: {
        marginLeft: 10, // Adds spacing between the buttons
        backgroundColor: '#28a745',
      },darkText:{
        color:COLOURS.white,
      },
      lightText:{
        color:COLOURS.black,
      }
});
