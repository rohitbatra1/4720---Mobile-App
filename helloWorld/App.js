import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {AnnouncementsScreen, AssignmentsScreen, CalendarScreen,
  courseScreen, FileScreen, FolderScreen, generalCalendarScreen, HomeScreen, LoginScreen, ResourcesScreen, SyllabusScreen, WebScreen} from './componentIndex.js';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Overview' }}
        />
 
        <Stack.Screen name="General Calendar" component={generalCalendarScreen} />

        <Stack.Screen name="Course Page" component={courseScreen} />

        <Stack.Screen name="Course Calendar" component={CalendarScreen} />

        <Stack.Screen name="Course Resources" component={ResourcesScreen} />

        <Stack.Screen name="View Assignments" component={AssignmentsScreen} />

        <Stack.Screen name="Syllabus" component={SyllabusScreen} />

        <Stack.Screen name="Announcements" component={AnnouncementsScreen} />
      
        <Stack.Screen name="Resources" component={ResourcesScreen} />
        
        <Stack.Screen name="Folder" component={FolderScreen} />

        <Stack.Screen name="Web" component={WebScreen} />

        <Stack.Screen name="File" component={FileScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;