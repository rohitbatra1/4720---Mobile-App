import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

import {styles} from '../index.js';

function ResourcesScreen({ route, navigation}) {
   /* 2. Get the param */
   const { itemId , otherParam} = route.params;
   var resources = [
     {name: 'Folder Name', type: 'Folder', id: 0}, 
     {name: 'Folder Name', type: 'Folder', id: 1},
     {name: 'Folder Name', type: 'Folder', id: 2}, 
     {name: 'File Name', type: 'File', id: 3},
     {name: 'File Name', type: 'File', id: 4},
     {name: 'File Name', type: 'File', id: 5},
   ]
   
   var resourcesMap = resources.map(resourcesInfo => 
   <TouchableOpacity onPress={() => {
       navigation.navigate(resourcesInfo.type, {
         itemId: 53,
         otherParam: 'anything you want here',
       });
     }}
     style={[styles.verticalPosition(resourcesInfo.id), styles.FolderContainer]}
     >
       <Image style={styles.ResourcesImageStyle} source={require('./AppImages/folder.png')} />
 
     <Text style = {[styles.buttonText, styles.bottom]}>{resourcesInfo.name}</Text>
   </TouchableOpacity>)
 
   return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
 
       {resourcesMap}
 
     </View>
   );
 }

 export default ResourcesScreen;