import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

import Agenda from '../components/Agenda';

import {styles} from '../index.js';

function generalCalendarScreen({ route, navigation }) {
   /* 2. Get the param */
   const {otherParam} = route.params;
  
   return (
    <Agenda/>
    //  <Agenda
    //   // markedDates={{
    //   //   '2020-11-25': {dots: [exam, assignment], marked: true},
    //   //   '2020-11-26': {dots: [exam]}
    //   // }}
    //   // markingType={'multi-dot'}
    //   items={{
    //     '2020-11-25': [{name: 'item 1 - any js object'}],
    //     '2020-11-26': [{name: 'item 2 - any js object', height: 80}],
    //   }}
    //   // renderItem={(item, firstItemInDay) => { return (renderItem(item, firstItemInDay))}}
    // />
   );
 }

export default generalCalendarScreen;