import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Image, StyleSheet, Dimensions, TouchableOpacity, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';


const styles = StyleSheet.create({
  
   verticalPosition: function(place) {
     return {
       top:  Dimensions.get('window').height * 0.02 + (Dimensions.get('window').height * 0.13 * place),
     }
   },
   
   
   coursePosition: function(place, isLeft) {
     return {
       top: Dimensions.get('window').height * 0.02 +(Dimensions.get('window').height * 0.195 * place),
       left: isLeft ? '7%': null,
       right: isLeft ? null: '7%'
     }
   },
 
   // ...
   imageStyle: {
     resizeMode: 'contain',
     height: '100%',
     width: '100%',
     position: 'absolute',
     alignSelf: 'center',
   },

   syllabusimageStyle: {
    resizeMode: 'contain',
    height: '80%',
    width: '80%',
    top: '10%',
    position: 'absolute',
    alignSelf: 'center',
  },
   CalendarImageStyle: {
     resizeMode: 'contain',
     height: '100%',
     width: '100%',
     position: 'absolute',
     right: '37%',
     bottom: '15%',
     // alignSelf: 'flex-start',
   },
   AnnouncementImageStyle: {
    resizeMode: 'contain',
    height: '80%',
    width: '80%',
    position: 'absolute',
    left: '25%',
    bottom: '30%',
    // alignSelf: 'flex-start',
  },
   ResourcesImageStyle: {
      resizeMode: 'contain',
      height: '100%',
      width: '100%',
      position: 'absolute',
      left: '3%',
      bottom: '15%',
     // alignSelf: 'flex-start',
   },
   FileImageStyle: {
    resizeMode: 'contain',
     height: '100%',
     width: '100%',
     position: 'relative',
     top: "9%",
     right: '33%',
     // alignSelf: 'flex-start',
   },
   
   FolderImageStyle: {
    resizeMode: 'contain',
    height: '150%',
    width: '150%',
    position: 'relative',
    top: "-21%",
    right: '57%',
    // alignSelf: 'flex-start',
  },
 
   course: {
     elevation: 8,
     backgroundColor: "#D3D3D3",
     margin: '1%',
     borderRadius: 10,
     paddingVertical: '5%',
     paddingHorizontal: '6%',
     height: '18%',
     width: '38%',
     position: 'absolute',
   },
   
   generalCalendarContainer: {
     elevation: 8,
     backgroundColor: "#D3D3D3",
     margin: '5%',
     borderRadius: 10,
     paddingVertical: 10,
     paddingHorizontal: 12,
     height: '18%',
     width: '85%',
     position: 'absolute',
     top:'67%',
   },
 
   CalendarContainer: {
     elevation: 8,
     backgroundColor: "#D3D3D3",
     margin: '3%',
     borderRadius: 10,
     paddingVertical: 10,
     paddingHorizontal: 12,
     height: '18%',
     width: '85%',
     position: 'absolute',
     top: '1%',
   },
   resourcesContainer: {
     elevation: 8,
     backgroundColor: "#D3D3D3",
     margin: '3%',
     borderRadius: 10,
     paddingVertical: 10,
     paddingHorizontal: 12,
     height: '18%',
     width: '85%',
     position: 'absolute',
     top:'23%',
   },
 
   assignmentsContainer: {
     elevation: 8,
     backgroundColor: "#D3D3D3",
     margin: '3%',
     borderRadius: 10,
     paddingVertical: 10,
     paddingHorizontal: 12,
     height: '18%',
     width: '85%',
     position: 'absolute',
     top:'23%',
   },
 
   syllabusContainer: {
     elevation: 8,
     backgroundColor: "#D3D3D3",
     margin: '1%',
     borderRadius: 10,
     paddingVertical: 10,
     paddingHorizontal: 12,
     height: '18%',
     width: '85%',
     position: 'absolute',
     top:'45%',
   },
 
   announcementsContainer: {
     elevation: 8,
     backgroundColor: "#D3D3D3",
     margin: '1%',
     borderRadius: 10,
     paddingVertical: 10,
     paddingHorizontal: 12,
     height: '18%',
     width: '85%',
     position: 'absolute',
     top:'67%',
   },
   
   buttonText: {
     fontSize: 18,
     color: "#15A4FE",
     fontWeight: "bold",
     alignSelf: "center",
     textTransform: "uppercase",
     position: 'absolute',
     bottom: '40%',
     left: '40%'
   },

  coursebuttonText: {
    fontSize: 15,
    color: "#15A4FE",
    fontWeight: "bold",
    alignSelf: "stretch",
    textAlign: 'center',
    textTransform: "uppercase",
    position: 'absolute',
    bottom: '20%',
    left: '30%'
  },
   
   syllabusbuttonText: {
    fontSize: 16,
    color: "#15A4FE",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    position: 'absolute',
    bottom: '6%',
    left: '30%'
  },

  announcementsbuttonText: {
    fontSize: 14,
    color: "#15A4FE",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    position: 'absolute',
    bottom: '10%',
    left: '20%'
  },
 
  bottomText: {
     right: '10%',
     bottom: '50%'
   },

  middleText: {
    alignSelf: "center"
   },
 
   FolderContainer: {
     elevation: 8,
     backgroundColor: "#D3D3D3",
     margin: '3%',
     borderRadius: 10,
     paddingVertical: 10,
     paddingHorizontal: 12,
     height: '11%',
     width: '85%',
     position: 'absolute',
   },

   LoginContainer: {
    elevation: 8,
    backgroundColor: "#1E90FF",
    margin: '3%',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    height: Dimensions.get('window').height * 0.07,
    width: Dimensions.get('window').width * 0.40,
    position: 'absolute',
   },

   LoginText: {
    fontSize: 25,
    color: "#FFFAF0",
    fontWeight: "bold",
    textTransform: "uppercase",
    position: 'absolute',
    bottom: '40%',
  },

  LogoImageStyle: {
    position: 'absolute',
    top: '15%',
  }
 
 });

 export default styles;