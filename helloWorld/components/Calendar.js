import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

import Agenda from '../components/Agenda';

import {styles} from '../index.js';

var calendarPass

function CalendarScreen({ route, navigation }) {
   /* 2. Get the param */

   const {calendarEvents} = route.params;
  
   calendarPass = calendarEvents;

  //  console.log(calendarPass[0].siteId)

   return (
    <Agenda/>
   );
 }
 
 export {calendarPass}

 export default CalendarScreen;