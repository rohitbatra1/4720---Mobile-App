import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

const styles = StyleSheet.create({

   verticalPosition: function(place) {
     return {
       top: 10+(100 * place)
     }
   },
   
   coursePosition: function(place, isLeft) {
     return {
       top: 10+(150 * place),
       left: isLeft ? 25: null,
       right: isLeft ? null: 25
     }
   },
 
   // ...
   imageStyle: {
     height: 100,
     width: 100,
     position: 'absolute',
     alignSelf: 'center',
   },
   CalendarImageStyle: {
     height: 100,
     width: 100,
     position: 'absolute',
     left: '3%',
     bottom: '15%',
     // alignSelf: 'flex-start',
   },
   ResourcesImageStyle: {
     height: 80,
     width: 80,
     position: 'relative',
     bottom: '25%',
     // alignSelf: 'flex-start',
   },
   FileImageStyle: {
     height: 50,
     width: 50,
     position: 'relative',
     top: "10%",
     left: '5%',
     // alignSelf: 'flex-start',
   },
 
   course: {
     elevation: 8,
     backgroundColor: "#D3D3D3",
     margin: 10,
     borderRadius: 10,
     paddingVertical: 10,
     paddingHorizontal: 12,
     height: 125,
     width: 150,
     position: 'absolute',
   },
   
   generalCalendarContainer: {
     elevation: 8,
     backgroundColor: "#D3D3D3",
     margin: 10,
     borderRadius: 10,
     paddingVertical: 10,
     paddingHorizontal: 12,
     height: 125,
     width: 325,
     position: 'absolute',
     top:450,
   },
 
   CalendarContainer: {
     elevation: 8,
     backgroundColor: "#D3D3D3",
     margin: 10,
     borderRadius: 10,
     paddingVertical: 10,
     paddingHorizontal: 12,
     height: 125,
     width: 300,
     position: 'absolute',
     top:0,
   },
   resourcesContainer: {
     elevation: 8,
     backgroundColor: "#D3D3D3",
     margin: 10,
     borderRadius: 10,
     paddingVertical: 10,
     paddingHorizontal: 12,
     height: 125,
     width: 300,
     position: 'absolute',
     top:150,
   },
 
   assignmentsContainer: {
     elevation: 8,
     backgroundColor: "#D3D3D3",
     margin: 10,
     borderRadius: 10,
     paddingVertical: 10,
     paddingHorizontal: 12,
     height: 125,
     width: 300,
     position: 'absolute',
     top:300,
   },
 
   syllabusContainer: {
     elevation: 8,
     backgroundColor: "#D3D3D3",
     margin: 10,
     borderRadius: 10,
     paddingVertical: 10,
     paddingHorizontal: 12,
     height: 125,
     width: 125,
     position: 'absolute',
     top:450,
     left: 30,
   },
 
   announcementsContainer: {
     elevation: 8,
     backgroundColor: "#D3D3D3",
     margin: 10,
     borderRadius: 10,
     paddingVertical: 10,
     paddingHorizontal: 12,
     height: 125,
     width: 170,
     position: 'absolute',
     top:450,
     right: 30,
   },
 
   appButtonContainer: {
     elevation: 8,
     backgroundColor: "#D3D3D3",
     margin: 10,
     borderRadius: 10,
     paddingVertical: 10,
     paddingHorizontal: 12,
     height: 100,
     width: 100,
   },
   
   buttonText: {
     fontSize: 18,
     color: "#15A4FE",
     fontWeight: "bold",
     alignSelf: "center",
     textTransform: "uppercase",
     position: 'absolute',
     bottom: '10%',
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
     margin: 10,
     borderRadius: 10,
     paddingVertical: 10,
     paddingHorizontal: 12,
     height: 75,
     width: 300,
     position: 'absolute',
   },

   LoginContainer: {
    elevation: 8,
    backgroundColor: "#1E90FF",
    margin: 10,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    height: 75,
    width: 300,
    position: 'absolute',
   },

   LoginText: {
    fontSize: 30,
    color: "#FFFAF0",
    fontWeight: "bold",
    textTransform: "uppercase",
    position: 'absolute',
    bottom: '45%',
  },

  LogoImageStyle: {
    position: 'absolute',
    top: '15%',
  }
 
 });

 export default styles;