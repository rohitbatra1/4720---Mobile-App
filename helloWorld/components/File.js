import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

// import {styles} from '../index.js';
 
import PDFReader from 'rn-pdf-reader-js';
 
function FileScreen({ navigation }) {
   return (
      <PDFReader source={{uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',}} />
   )
}
 

export default FileScreen;