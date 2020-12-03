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
  const {siteID} = route.params;

  
  var curCourseAssignments = []
  // gather the assignments specific to this course
  for (var index in collabData.get("Assignments")['assignment_collection']){
    if (collabData.get("Assignments")['assignment_collection'][index].context == siteID){
      curCourseAssignments.push(collabData.get("Assignments")['assignment_collection'][index])
    }
  }

  var curCourseAnnouncements = []

  for (var index in collabData.get("Announcements")['announcement_collection']){
    if (collabData.get("Announcements")['announcement_collection'][index].siteId == siteID){
      curCourseAnnouncements.push(collabData.get("Announcements")['announcement_collection'][index])
    }
  }

  var curCourseCalendarEvents = []

  for (var index in collabData.get("Calendar")['calendar_collection']){
    if (collabData.get("Calendar")['calendar_collection'][index].siteId == siteID){
      curCourseCalendarEvents.push(collabData.get("Calendar")['calendar_collection'][index])
    }
  }



  


  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <TouchableOpacity onPress={() => {
          /* 1. Navigate to the Course Resources route with params */
          navigation.navigate('Course Calendar', {
            calendarEvents: curCourseCalendarEvents,
          });
        }}
        style={styles.CalendarContainer}
        >
          <Image style={styles.CalendarImageStyle} source={require('./AppImages/calendar.png')} />

        <Text style = {[styles.buttonText, styles.bottom]}>Course Calendar</Text>

      </TouchableOpacity>



      



      <TouchableOpacity onPress={() => {
          /* 1. Navigate to the Course Resources route with params */
          navigation.navigate('View Assignments', {
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
            courseID: siteID,
          });
        }}
        style={styles.syllabusContainer}
        >
          <Image style={styles.CalendarImageStyle} source={require('./AppImages/syllabus.png')} /> 

        <Text style = {[styles.buttonText, styles.bottom]}>Syllabus</Text>
      </TouchableOpacity>




      <TouchableOpacity onPress={() => {
          /* 1. Navigate to the Course Resources route with params */
          navigation.navigate('Announcements', {
            announcements: curCourseAnnouncements,
          });
        }}
        style={styles.announcementsContainer}
        >
          <Image style={styles.CalendarImageStyle} source={require('./AppImages/announcement.png')} /> 

      <Text style = {[styles.buttonText, styles.bottom]}>Announcements</Text>
      </TouchableOpacity>


    </View>
  );
}

export default courseScreen;