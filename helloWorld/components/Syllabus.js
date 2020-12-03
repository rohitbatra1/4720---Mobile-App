import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

import { WebView } from 'react-native-webview';


import {styles} from '../index.js';
import PDFReader from 'rn-pdf-reader-js';

function SyllabusScreen({ route, navigation }) {
   /* 2. Get the param */
   const {courseID} = route.params;
   var webview;

   var syllabusJSON;

   var syllabusObject;

   var syllabusLink;


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

      if (syllabusLink){
      
         newURL = 'https://collab.its.virginia.edu' + syllabusLink;
         redirectTo = 'window.location = "' + newURL + '"';
         webview.injectJavaScript(redirectTo);

         syllabusLink = null;
      }
  
    };

   return (


      // https://collab.its.virginia.edu/direct/syllabus/site/872cefd0-ac38-4783-88b2-fe6b2e76d991.json
      <WebView
            ref={ref => (webview = ref)}
            originWhitelist={['*']}
            source={{ uri: 'https://collab.its.virginia.edu/direct/syllabus/site/' + courseID + ".json" }}
            onNavigationStateChange={handleWebViewNavigationStateChange}
            injectedJavaScript={"window.ReactNativeWebView.postMessage(document.documentElement.innerHTML)"}
            onMessage={(event) => {
                  // console.log(event.nativeEvent.data)

                  syllabusJSON = event.nativeEvent.data.slice(event.nativeEvent.data.indexOf("{"), event.nativeEvent.data.lastIndexOf("}") + 1);
                  syllabusObject = JSON.parse(syllabusJSON)
               

                  console.log(syllabusJSON)
                  syllabusLink = syllabusObject['items'][0]['attachments'][0]['url']

               }
            }
        />
      // <PDFReader source={{uri: 'https://collab.its.virginia.edu///access//content//attachment//872cefd0-ac38-4783-88b2-fe6b2e76d991//Syllabus//6dd42758-2fe3-4656-b314-6b3c2d30b1a9//CS3710_Syllabus.pdf',}} />
   );
 }

 export default SyllabusScreen;