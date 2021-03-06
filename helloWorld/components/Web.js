import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { WebView } from 'react-native-webview';




import {styles} from '../index.js';

let collabData = new Map()

let courseIDs = new Map()

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
    if (url == ('https://collab.its.virginia.edu/portal/') || url == 'https://collab.its.virginia.edu/portal?containerLogin=true') {

      // gather the course IDS's from the home page
      
      var jsCode;
      
      setTimeout(function () {
        jsCode = "window.ReactNativeWebView.postMessage(document.getElementById('topnav').innerHTML)"
        webview.injectJavaScript(jsCode)
      }, 5000);

      setTimeout(function () {
        let newURL = 'https://collab.its.virginia.edu/direct/calendar/my.json';
        let redirectTo = 'window.location = "' + newURL + '"';
        webview.injectJavaScript(redirectTo);
      }, 10000);

      
      setTimeout(function () {
        jsCode = "window.ReactNativeWebView.postMessage(document.documentElement.innerHTML)"
        webview.injectJavaScript(jsCode)
      }, 15000);

      
      setTimeout(function () {
        newURL = 'https://collab.its.virginia.edu/direct/assignment/my.json';
        redirectTo = 'window.location = "' + newURL + '"';
        webview.injectJavaScript(redirectTo);
      }, 20000);


      setTimeout(function () {
        jsCode = "window.ReactNativeWebView.postMessage(document.documentElement.innerHTML)"
        webview.injectJavaScript(jsCode)
      }, 25000);

      setTimeout(function () {
        newURL = 'https://collab.its.virginia.edu/direct/announcement/user.json?n=2000&d=365';
        redirectTo = 'window.location = "' + newURL + '"';
        webview.injectJavaScript(redirectTo);
      }, 30000);


      setTimeout(function () {
        jsCode = "window.ReactNativeWebView.postMessage(document.documentElement.innerHTML)"
        webview.injectJavaScript(jsCode)
      }, 35000);

      
      // navigation.navigate('Home', {
      //   itemId: 53,
      //   otherParam: 'anything you want here',
      // })


      setTimeout(function () {
        // console.log(courseIDs);
        // console.log(collabData);

        navigation.navigate('Home', {
          otherParam: 'anything you want here',
        })
      }, 40000);

    }
  };

  
   return (
        <WebView
            ref={ref => (webview = ref)}
            originWhitelist={['*']}
            source={{ uri: 'https://collab.its.virginia.edu/portal/login?containerLogin=true' }}
            onNavigationStateChange={handleWebViewNavigationStateChange}
            // injectedJavaScript={'window.ReactNativeWebView.postMessage(fetch("https://collab.its.virginia.edu/direct/calendar/my.json"));'}
            onMessage={(event) => {

              if (event.nativeEvent.loading == true){

              }

              else if (event.nativeEvent.url.includes('calendar/my.json')){
                // console.log(event.nativeEvent.data);
                

                var calendarJSON = event.nativeEvent.data.slice(event.nativeEvent.data.indexOf("{"), event.nativeEvent.data.lastIndexOf("}") + 1);
                
                var calendarObject = JSON.parse(calendarJSON)
                
                collabData.set('Calendar', calendarObject);
              }
              
              else if (event.nativeEvent.url.includes('assignment/my.json')){

                var assignmentsJSON = event.nativeEvent.data.slice(event.nativeEvent.data.indexOf("{"), event.nativeEvent.data.lastIndexOf("}") + 1);

                var assignmentsObject = JSON.parse(assignmentsJSON);
                
                collabData.set('Assignments', assignmentsObject)
              }
              else if (event.nativeEvent.url.includes('announcement/user')) {

                var announcementsJSON = event.nativeEvent.data.slice(event.nativeEvent.data.indexOf("{"), event.nativeEvent.data.lastIndexOf("}") + 1);

                var announcementsObject = JSON.parse(announcementsJSON);
                
                collabData.set('Announcements', announcementsObject)

              }
              
              else{

                var dataArray = event.nativeEvent.data.split("=");

                var i;
                for (i = 0; i < dataArray.length; i++) {
                    if (dataArray[i].includes("title")){

                      if (!dataArray[i+1].includes('Home')){
                        
                        dataArray[i] = dataArray[i].replace("https://collab.its.virginia.edu/portal/site/", '')
                        dataArray[i] = dataArray[i].replace(" title", '')
                        
                        dataArray[i + 1] = dataArray[i + 1].replace(" role", '');


                        dataArray[i] = dataArray[i].replace(/['"]+/g, '');
                        dataArray[i + 1] = dataArray[i + 1].replace(/['"]+/g, '');


                        courseIDs.set(dataArray[i + 1], dataArray[i]);
                      }

                    }
                }

              }

            }
          }
        />
  
   );
 }

 export {courseIDs, collabData};

 export default WebScreen;
 