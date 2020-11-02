import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { WebView } from 'react-native-webview';


import {styles} from '../index.js';

function WebScreen({ navigation }) {
 
   return (
        <WebView
            originWhitelist={['*']}
            source={{ uri: 'https://collab.its.virginia.edu/portal' }}
        />
   );
 }

 export default WebScreen;