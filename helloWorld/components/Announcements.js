import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

import { styles, TableClassAnnouncements } from '../index.js';


var announcementsToPass;

function AnnouncementsScreen({ route, navigation }) {
   /* 2. Get the param */
   const {announcements} = route.params;

   announcementsToPass = announcements
   
   return (
     
     <TableClassAnnouncements />
 
   );
 }

 export {announcementsToPass}
 
 export default AnnouncementsScreen;