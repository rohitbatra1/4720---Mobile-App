import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

import {styles} from '../index.js';

function generalCalendarScreen({ route, navigation }) {
   /* 2. Get the param */
   const { itemId , otherParam} = route.params;
   return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text>General Calendar Screen</Text>
       <Text>itemId: {JSON.stringify(itemId)}</Text>
       <Text>otherParam: {JSON.stringify(otherParam)}</Text>
 
       <TouchableOpacity onPress={() =>
           navigation.push('General Calendar', {
             itemId: Math.floor(Math.random() * 100),
           })
         }
         style={styles.appButtonContainer}>
 
               <Text style = {styles.buttonText}>Go to General Calendar... Again</Text>
       </TouchableOpacity>
 
       <TouchableOpacity onPress={() => navigation.navigate('Home')}
        style={styles.appButtonContainer}>
 
               <Text style = {styles.buttonText}>Go to Home</Text>
       </TouchableOpacity>
 
       <TouchableOpacity onPress={() => navigation.goBack()}
        style={styles.appButtonContainer}>
 
               <Text style = {styles.buttonText}>Go back</Text>
       </TouchableOpacity>
     </View>
   );
 }

export default generalCalendarScreen;