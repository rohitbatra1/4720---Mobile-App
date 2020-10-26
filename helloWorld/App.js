import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {AnnouncementsScreen, AssignmentsScreen, CalendarScreen,
  courseScreen, FolderScreen, generalCalendarScreen, HomeScreen, ResourcesScreen, SyllabusScreen} from './componentIndex.js';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
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

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;