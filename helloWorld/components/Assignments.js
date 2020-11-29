import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

import { styles, TableClassAssignments } from '../index.js';


var assignmentToPass;

function AssignmentsScreen({ route, navigation }) {
   /* 2. Get the param */

  
   const {assignments} = route.params;

   assignmentToPass = assignments

   console.log(assignments);

   return (
 
     <TableClassAssignments />
 
   );
 }

 export {assignmentToPass}

 export default AssignmentsScreen;