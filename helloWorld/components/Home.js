import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

import {styles} from '../index.js';

function HomeScreen({ navigation }) {

   var courses = [
     {name: 'MATH1100', id: 0}, 
     {name: 'PHYS1010', id: 1},
     {name: 'CS2150', id: 2}, 
     {name: 'CS4720', id: 3},
     {name: 'CS3240', id: 4},
     {name: 'Course 6', id: 5},
   ]
   
   var courseMap = courses.map(courseInfo =>
     <TouchableOpacity onPress={() => {
       /* 1. Navigate to the Course Resources route with params */
       navigation.navigate('Course Page', {
         itemId: 53,
         otherParam: 'anything you want here',
       });
     }}
     style={[styles.course,styles.coursePosition(Math.floor(courseInfo.id/2), courseInfo.id%2 == 0)]}
     >
       
       <Image style={styles.imageStyle} source={require('./AppImages/book.png')} />
 
 
     <Text style = {styles.coursebuttonText}>{courseInfo.name}</Text>
   </TouchableOpacity>
   )
 
   return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
 
       {courseMap}
 
       <TouchableOpacity onPress={() => {
           /* 1. Navigate to the Course Resources route with params */
           navigation.navigate('General Calendar', {
             itemId: 53,
             otherParam: 'anything you want here',
           });
         }}
         style={styles.generalCalendarContainer}
         >
 
           <Image style={styles.CalendarImageStyle} source={require('./AppImages/calendar.png')} />
 
         <Text style = {[[styles.buttonText, styles.bottom]]}>General Calendar</Text>
       </TouchableOpacity>
 
     </View>
   );
 }

 export default HomeScreen;