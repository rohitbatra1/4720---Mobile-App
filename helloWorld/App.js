import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Image, TouchableOpacity, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <TouchableOpacity onPress={() => {
          /* 1. Navigate to the Course Resources route with params */
          navigation.navigate('Course Page', {
            itemId: 53,
            otherParam: 'anything you want here',
          });
        }}
        style={styles.courseOne}
        >
          
          <Image style={styles.imageStyle} source={require('./AppImages/book.png')} />


        <Text style = {styles.appButtonText}>Course 1</Text>
      </TouchableOpacity>
      

      <TouchableOpacity onPress={() => {
          /* 1. Navigate to the Course Resources route with params */
          navigation.navigate('Course Page', {
            itemId: 53,
            otherParam: 'anything you want here',
          });
        }}
        style={styles.courseTwo}
        >

          <Image style={styles.imageStyle} source={require('./AppImages/book.png')} />

        <Text style = {styles.appButtonText}>Course 2</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => {
          /* 1. Navigate to the Course Resources route with params */
          navigation.navigate('Course Page', {
            itemId: 53,
            otherParam: 'anything you want here',
          });
        }}
        style={styles.courseThree}
        >

          <Image style={styles.imageStyle} source={require('./AppImages/book.png')} />

        <Text style = {styles.appButtonText}>Course 3</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
          /* 1. Navigate to the Course Resources route with params */
          navigation.navigate('Course Page', {
            itemId: 53,
            otherParam: 'anything you want here',
          });
        }}
        style={styles.courseFour}
        >

          <Image style={styles.imageStyle} source={require('./AppImages/book.png')} />

        <Text style = {styles.appButtonText}>Course 4</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
          /* 1. Navigate to the Course Resources route with params */
          navigation.navigate('Course Page', {
            itemId: 53,
            otherParam: 'anything you want here',
          });
        }}
        style={styles.courseFive}
        >

          <Image style={styles.imageStyle} source={require('./AppImages/book.png')} />

        <Text style = {styles.appButtonText}>Course 5</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
          /* 1. Navigate to the Course Resources route with params */
          navigation.navigate('Course Page', {
            itemId: 53,
            otherParam: 'anything you want here',
          });
        }}
        style={styles.courseSix}
        >
          <Image style={styles.imageStyle} source={require('./AppImages/book.png')} />

        <Text style = {styles.appButtonText}>Course 6</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
          /* 1. Navigate to the Course Resources route with params */
          navigation.navigate('General Calender', {
            itemId: 53,
            otherParam: 'anything you want here',
          });
        }}
        style={styles.generalCalenderContainer}
        >

          <Image style={styles.calenderImageStyle} source={require('./AppImages/calender.png')} />

        <Text style = {styles.calenderButtonText}>General Calender</Text>
      </TouchableOpacity>




    </View>
  );
}

function courseScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <TouchableOpacity onPress={() => {
          /* 1. Navigate to the Course Resources route with params */
          navigation.navigate('Course Calender', {
            itemId: 53,
            otherParam: 'anything you want here',
          });
        }}
        style={styles.calenderContainer}
        >
          <Image style={styles.calenderImageStyle} source={require('./AppImages/calender.png')} />

        <Text style = {styles.calenderButtonText}>Course Calender</Text>
      </TouchableOpacity>



      <TouchableOpacity onPress={() => {
          /* 1. Navigate to the Course Resources route with params */
          navigation.navigate('Course Resources', {
            itemId: 53,
            otherParam: 'anything you want here',
          });
        }}
        style={styles.resourcesContainter}
        >

          <Image style={styles.calenderImageStyle} source={require('./AppImages/resources.png')} />  
       
        <Text style = {styles.calenderButtonText}>Course Resources</Text>
      </TouchableOpacity>



      <TouchableOpacity onPress={() => {
          /* 1. Navigate to the Course Resources route with params */
          navigation.navigate('View Assignments', {
            itemId: 53,
            otherParam: 'anything you want here',
          });
        }}
        style={styles.assignmentsContainer}
        >

          
          <Image style={styles.calenderImageStyle} source={require('./AppImages/assignment.png')} /> 
          

        <Text style = {styles.calenderButtonText}>View Assignments</Text>
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
          <Image style={styles.imageStyle} source={require('./AppImages/syllabus.png')} /> 

        <Text style = {styles.appButtonText}>Syllabus</Text>
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
          <Image style={styles.calenderImageStyle} source={require('./AppImages/announcement.png')} /> 

      <Text style = {styles.calenderButtonText}>Announcements</Text>
      </TouchableOpacity>


    </View>
  );
}


function generalCalenderScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId , otherParam} = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>General Calender Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>

      <TouchableOpacity onPress={() =>
          navigation.push('General Calender', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
        style={styles.appButtonContainer}>

              <Text style = {styles.appButtonText}>Go to General Calender... Again</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}
       style={styles.appButtonContainer}>

              <Text style = {styles.appButtonText}>Go to Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}
       style={styles.appButtonContainer}>

              <Text style = {styles.appButtonText}>Go back</Text>
      </TouchableOpacity>
    </View>
  );
}

function CalenderScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId , otherParam} = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Calender Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>

      <TouchableOpacity onPress={() =>
          navigation.push('Course Calender', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
        style={styles.appButtonContainer}>

              <Text style = {styles.appButtonText}>Go to Calender... Again</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}
       style={styles.appButtonContainer}>

              <Text style = {styles.appButtonText}>Go to Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}
       style={styles.appButtonContainer}>

              <Text style = {styles.appButtonText}>Go back</Text>
      </TouchableOpacity>

    </View>
  );
}


function ResourcesScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId , otherParam} = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Course Resources Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>


      <TouchableOpacity onPress={() =>
          navigation.push('Course Resources', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
        style={styles.appButtonContainer}
        >

              <Text style = {styles.appButtonText}>Go to Resources... Again</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}
       style={styles.appButtonContainer}>

              <Text style = {styles.appButtonText}>Go to Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}
       style={styles.appButtonContainer}>

              <Text style = {styles.appButtonText}>Go back</Text>
      </TouchableOpacity>

    </View>
  );
}


function AssignmentsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId , otherParam} = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Assignments Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      
      <TouchableOpacity onPress={() =>
          navigation.push('View Assignments', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
        style={styles.appButtonContainer}>

              <Text style = {styles.appButtonText}>Go to Assignments... Again</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}
       style={styles.appButtonContainer}>

              <Text style = {styles.appButtonText}>Go to Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}
       style={styles.appButtonContainer}>

              <Text style = {styles.appButtonText}>Go back</Text>
      </TouchableOpacity>

    </View>
  );
}


function SyllabusScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId , otherParam} = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Syllabus Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>

      <TouchableOpacity onPress={() =>
          navigation.push('Syllabus', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
        style={styles.appButtonContainer}>

              <Text style = {styles.appButtonText}>Go to Syllabus... Again</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}
       style={styles.appButtonContainer}>

              <Text style = {styles.appButtonText}>Go to Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}
       style={styles.appButtonContainer}>

              <Text style = {styles.appButtonText}>Go back</Text>
      </TouchableOpacity>
    </View>
  );
}

function AnnouncementsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId , otherParam} = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Announcements Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>

      <TouchableOpacity onPress={() =>
          navigation.push('Announcements', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
        style={styles.appButtonContainer}>

              <Text style = {styles.appButtonText}>Go to Announcements... Again</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}
       style={styles.appButtonContainer}>

              <Text style = {styles.appButtonText}>Go to Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}
       style={styles.appButtonContainer}>

              <Text style = {styles.appButtonText}>Go back</Text>
      </TouchableOpacity>
    </View>
  );
}

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

        <Stack.Screen name="General Calender" component={generalCalenderScreen} />

        <Stack.Screen name="Course Page" component={courseScreen} />

        <Stack.Screen name="Course Calender" component={CalenderScreen} />

        <Stack.Screen name="Course Resources" component={ResourcesScreen} />

        <Stack.Screen name="View Assignments" component={AssignmentsScreen} />

        <Stack.Screen name="Syllabus" component={SyllabusScreen} />

        <Stack.Screen name="Announcements" component={AnnouncementsScreen} />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  // ...
  imageStyle: {
    height: 100,
    width: 100,
    position: 'absolute',
    alignSelf: 'center',
  },
  calenderImageStyle: {height: 100,
    width: 100,
    position: 'absolute',
    left: '3%',
    bottom: '15%',
    // alignSelf: 'flex-start',
  },

  courseOne: {
    elevation: 8,
    backgroundColor: "#D3D3D3",
    margin: 10,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    height: 125,
    width: 150,
    position: 'absolute',
    top:0,
    left: 25,
  },
  courseTwo: {
    elevation: 8,
    backgroundColor: "#D3D3D3",
    margin: 10,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    height: 125,
    width: 150,
    position: 'absolute',
    top:0,
    right: 25,
  },
  courseThree: {
    elevation: 8,
    backgroundColor: "#D3D3D3",
    margin: 10,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    height: 125,
    width: 150,
    position: 'absolute',
    top:150,
    left: 25,
  },
  courseFour: {
    elevation: 8,
    backgroundColor: "#D3D3D3",
    margin: 10,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    height: 125,
    width: 150,
    position: 'absolute',
    top:150,
    right: 25,
  },
  courseFive: {
    elevation: 8,
    backgroundColor: "#D3D3D3",
    margin: 10,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    height: 125,
    width: 150,
    position: 'absolute',
    top:300,
    left: 25,
  },
  courseSix: {
    elevation: 8,
    backgroundColor: "#D3D3D3",
    margin: 10,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    height: 125,
    width: 150,
    position: 'absolute',
    top:300,
    right: 25,
  },

  generalCalenderContainer: {
    elevation: 8,
    backgroundColor: "#D3D3D3",
    margin: 10,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    height: 125,
    width: 325,
    position: 'absolute',
    top:450,
  },

  calenderContainer: {
    elevation: 8,
    backgroundColor: "#D3D3D3",
    margin: 10,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    height: 125,
    width: 300,
    position: 'absolute',
    top:0,
  },
  resourcesContainter: {
    elevation: 8,
    backgroundColor: "#D3D3D3",
    margin: 10,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    height: 125,
    width: 300,
    position: 'absolute',
    top:150,
  },

  assignmentsContainer: {
    elevation: 8,
    backgroundColor: "#D3D3D3",
    margin: 10,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    height: 125,
    width: 300,
    position: 'absolute',
    top:300,
  },

  syllabusContainer: {
    elevation: 8,
    backgroundColor: "#D3D3D3",
    margin: 10,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    height: 125,
    width: 125,
    position: 'absolute',
    top:450,
    left: 30,
  },

  announcementsContainer: {
    elevation: 8,
    backgroundColor: "#D3D3D3",
    margin: 10,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    height: 125,
    width: 170,
    position: 'absolute',
    top:450,
    right: 30,
  },

  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#D3D3D3",
    margin: 10,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    height: 100,
    width: 100,
  },
  appButtonText: {
    fontSize: 18,
    color: "#15A4FE",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    position: 'absolute',
    bottom: '10%',
  },
  calenderButtonText: {
    fontSize: 18,
    color: "#15A4FE",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    position: 'absolute',
    right: '10%',
    bottom: '50%',
  }

});

export default App;