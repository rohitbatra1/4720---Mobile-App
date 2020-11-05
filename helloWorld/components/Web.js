import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { WebView } from 'react-native-webview';


import {styles} from '../index.js';


function WebScreen({ navigation }) {
 
  var webview = null;
  
  var handleWebViewNavigationStateChange = newNavState => {
    // newNavState looks something like this:
    // {
    //   url?: string;
    //   title?: string;
    //   loading?: boolean;
    //   canGoBack?: boolean;
    //   canGoForward?: boolean;
    // }

    const { url } = newNavState;
    if (!url) return;

    // redirect somewhere else
    if (url.includes('https://collab.its.virginia.edu/portal')) {
      // const newURL = 'https://logrocket.com/';
      // const redirectTo = 'window.location = "' + newURL + '"';
      // webview.injectJavaScript(redirectTo);
      
      navigation.navigate('Home', {
        itemId: 53,
        otherParam: 'anything you want here',
      })
    }
  };

  

   return (
        <WebView
            ref={ref => (webview = ref)}
            originWhitelist={['*']}
            source={{ uri: 'https://collab.its.virginia.edu/portal/login?containerLogin=true' }}
            onNavigationStateChange={handleWebViewNavigationStateChange}
            injectedJavaScript={'window.ReactNativeWebView.postMessage(String(document.getElementsByName("eventSubmit_doView")[0].value));'}
            onMessage={(event) => {
              console.log(event.nativeEvent.data);
              alert(event.nativeEvent.data);
            }}
        />

        
   );
 }

 export default WebScreen;