import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

import {styles} from '../index.js';

function LoginScreen({ navigation }) {
   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#002F6C" }}>

         <Image style={styles.LogoImageStyle} source={require('./AppImages/collablogo.png')} />
  
        <TouchableOpacity onPress={() => {
            /* 1. Navigate to the Course Resources route with params */
            navigation.navigate('Web', {
              otherParam: 'anything you want here',
            });
          }}
          style={styles.LoginContainer}
          >
  
          <Text style = {[styles.LoginText, styles.middleText]}>Login</Text>
        </TouchableOpacity>
      </View>
   );
}

export default LoginScreen;