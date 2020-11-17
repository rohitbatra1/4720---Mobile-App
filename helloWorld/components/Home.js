import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

import {styles} from '../index.js';

import {courseIDs, collabData} from '../components/Web.js'

function HomeScreen({ navigation }) {

    console.log(courseIDs);

    var courses = [
    ]

    var i = 0;
    function insertToCoursesArr(value, key, map) {
      if (i < 6){
        courses.push({name: `${key}`, id: i})
        i += 1;
      }
      // console.log(`${key}`)
    }

    courseIDs.forEach(insertToCoursesArr)

   
   var courseMap = courses.map(courseInfo =>
     <TouchableOpacity onPress={() => {
       /* 1. Navigate to the Course Resources route with params */
       navigation.navigate('Course Page', {
         itemId: 53,
         otherParam: 'anything you want here',
       });
     }}
     key = {courseInfo.id}
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