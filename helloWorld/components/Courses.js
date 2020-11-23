import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

import {styles} from '../index.js';

import {courseIDs, collabData} from '../components/Web.js'

function courseScreen({ route, navigation }) {

  // the site id of each specific course page passed to the current screen
  const { itemId, siteID } = route.params;

  
  var curCourseAssignments = []
  // gather the assignments specific to this course
  for (var index in collabData.get("Assignments")['assignment_collection']){
    if (collabData.get("Assignments")['assignment_collection'][index].context == siteID){
      curCourseAssignments.push(collabData.get("Assignments")['assignment_collection'][index])
    }
  }
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <TouchableOpacity onPress={() => {
          /* 1. Navigate to the Course Resources route with params */
          navigation.navigate('Course Calendar', {
            itemId: 53,
            otherParam: 'anything you want here',
          });
        }}
        style={styles.CalendarContainer}
        >
          <Image style={styles.CalendarImageStyle} source={require('./AppImages/calendar.png')} />

        <Text style = {[styles.buttonText, styles.bottom]}>Course Calendar</Text>

      </TouchableOpacity>



      <TouchableOpacity onPress={() => {
          /* 1. Navigate to the Course Resources route with params */
          navigation.navigate('Course Resources', {
            itemId: 53,
            otherParam: 'anything you want here',
          });
        }}
        style={styles.resourcesContainer}
        >

          <Image style={styles.CalendarImageStyle} source={require('./AppImages/resources.png')} />  
       
        <Text style = {[styles.buttonText, styles.bottom]}>Course Resources</Text>
      </TouchableOpacity>



      <TouchableOpacity onPress={() => {
          /* 1. Navigate to the Course Resources route with params */
          navigation.navigate('View Assignments', {
            itemId: 53,
            assignments: curCourseAssignments,
          });
        }}
        style={styles.assignmentsContainer}
        >

          
          <Image style={styles.CalendarImageStyle} source={require('./AppImages/assignment.png')} /> 
          

        <Text style = {[styles.buttonText, styles.bottom]}>View Assignments</Text>
      </TouchableOpacity>



      <TouchableOpacity onPress={() => {
          /* 1. Navigate to the Course Resources route with params */
          navigation.navigate('Syllabus', {
            itemId: 53,
            otherParam: 'anything you want here',
          });
        }}
        style={styles.syllabusContainer}
        >
          <Image style={styles.syllabusimageStyle} source={require('./AppImages/syllabus.png')} /> 

        <Text style = {[styles.syllabusbuttonText, styles.bottom]}>Syllabus</Text>
      </TouchableOpacity>




      <TouchableOpacity onPress={() => {
          /* 1. Navigate to the Course Resources route with params */
          navigation.navigate('Announcements', {
            itemId: 53,
            otherParam: 'anything you want here',
          });
        }}
        style={styles.announcementsContainer}
        >
          <Image style={styles.AnnouncementImageStyle} source={require('./AppImages/announcement.png')} /> 

      <Text style = {[styles.announcementsbuttonText, styles.bottom]}>Announcements</Text>
      </TouchableOpacity>


    </View>
  );
}

export default courseScreen;