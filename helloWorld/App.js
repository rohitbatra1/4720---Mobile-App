import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Button, Image, TouchableOpacity, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export class TableClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
      tableData: [
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd']
      ]
    }
  }

  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }

  render() {
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={tableStyles.btn}>
          <Text style={tableStyles.btnText}>button</Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View style={tableStyles.container}>
        <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={state.tableHead} style={tableStyles.head} textStyle={tableStyles.text}/>
          {
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={tableStyles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={tableStyles.text}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
      </View>
    )
  }
}

const tableStyles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#808B97', borderTopStartRadius: 20, borderTopEndRadius: 20},
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: '#D3D3D3' },
  btn: { width: 58, height: 18, backgroundColor: '#15A4FE',  borderRadius: 5 },
  btnText: { textAlign: 'center', color: '#fff' }
});

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
          navigation.navigate('General Calendar', {
            itemId: 53,
            otherParam: 'anything you want here',
          });
        }}
        style={styles.generalCalendarContainer}
        >

          <Image style={styles.CalendarImageStyle} source={require('./AppImages/calendar.png')} />

        <Text style = {styles.CalendarButtonText}>General Calendar</Text>
      </TouchableOpacity>




    </View>
  );
}

function courseScreen({ navigation }) {
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

        <Text style = {styles.CalendarButtonText}>Course Calendar</Text>
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
       
        <Text style = {styles.CalendarButtonText}>Course Resources</Text>
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

          
          <Image style={styles.CalendarImageStyle} source={require('./AppImages/assignment.png')} /> 
          

        <Text style = {styles.CalendarButtonText}>View Assignments</Text>
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
          <Image style={styles.CalendarImageStyle} source={require('./AppImages/announcement.png')} /> 

      <Text style = {styles.CalendarButtonText}>Announcements</Text>
      </TouchableOpacity>


    </View>
  );
}


function generalCalendarScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId , otherParam} = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>General Calendar Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>

      <TouchableOpacity onPress={() =>
          navigation.push('General Calendar', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
        style={styles.appButtonContainer}>

              <Text style = {styles.appButtonText}>Go to General Calendar... Again</Text>
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

function CalendarScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId , otherParam} = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Calendar Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>

      <TouchableOpacity onPress={() =>
          navigation.push('Course Calendar', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
        style={styles.appButtonContainer}>

              <Text style = {styles.appButtonText}>Go to Calendar... Again</Text>
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

    <TableClass />

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
    
    <TableClass />

  );
}

function ResourcesScreen({ route, navigation}) {
  /* 2. Get the param */
  const { itemId , otherParam} = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <TouchableOpacity onPress={() => {
          /* 1. Navigate to the Course Resources route with params */
          navigation.navigate('Folder', {
            itemId: 53,
            otherParam: 'anything you want here',
          });
        }}
        style={[styles.verticalPosition(0), styles.FolderContainer]}
        >
          <Image style={styles.ResourcesImageStyle} source={require('./AppImages/folder.png')} />

        <Text style = {styles.CalendarButtonText}>Folder 1</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
          navigation.navigate('Folder', {
            itemId: 53,
            otherParam: 'anything you want here',
          });
        }}
        style={[styles.verticalPosition(1), styles.FolderContainer]}
        >

          <Image style={styles.ResourcesImageStyle} source={require('./AppImages/folder.png')} />  
       
        <Text style = {styles.CalendarButtonText}>Folder 2</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
          navigation.navigate('Folder', {
            itemId: 53,
            otherParam: 'anything you want here',
          });
        }}
        style={[styles.verticalPosition(2), styles.FolderContainer]}
        >

          
          <Image style={styles.ResourcesImageStyle} source={require('./AppImages/folder.png')} /> 
          

        <Text style = {styles.CalendarButtonText}>Folder 3</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
          navigation.navigate('File', {
            itemId: 53,
            otherParam: 'anything you want here',
          });
        }}
        style={[styles.verticalPosition(3), styles.FolderContainer]}
        >

          
          <Image style={styles.FileImageStyle} source={require('./AppImages/file.png')} /> 
          

        <Text style = {styles.CalendarButtonText}>File 1</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
          navigation.navigate('Folder', {
            itemId: 53,
            otherParam: 'anything you want here',
          });
        }}
        style={[styles.verticalPosition(4), styles.FolderContainer]}
        >

          
          <Image style={styles.FileImageStyle} source={require('./AppImages/file.png')} /> 
          

        <Text style = {styles.CalendarButtonText}>File 2</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
          navigation.navigate('Folder', {
            itemId: 53,
            otherParam: 'anything you want here',
          });
        }}
        style={[styles.verticalPosition(5), styles.FolderContainer]}
        >

          
          <Image style={styles.FileImageStyle} source={require('./AppImages/file.png')} /> 
          

        <Text style = {styles.CalendarButtonText}>File 3</Text>
      </TouchableOpacity>

    </View>
  );
}

function FolderScreen({ route, navigation}) {
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



const styles = StyleSheet.create({

  verticalPosition: function(place) {
    return {
      top: 10+(100 * place)
    }
  },

  // ...
  imageStyle: {
    height: 100,
    width: 100,
    position: 'absolute',
    alignSelf: 'center',
  },
  CalendarImageStyle: {
    height: 100,
    width: 100,
    position: 'absolute',
    left: '3%',
    bottom: '15%',
    // alignSelf: 'flex-start',
  },
  ResourcesImageStyle: {
    height: 80,
    width: 80,
    position: 'relative',
    bottom: '25%',
    // alignSelf: 'flex-start',
  },
  FileImageStyle: {
    height: 50,
    width: 50,
    position: 'relative',
    top: "10%",
    left: '5%',
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

  generalCalendarContainer: {
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

  CalendarContainer: {
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
  resourcesContainer: {
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
  CalendarButtonText: {
    fontSize: 18,
    color: "#15A4FE",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    position: 'absolute',
    right: '10%',
    bottom: '50%',
  },

  ResourcesButtonText: {
    fontSize: 18,
    color: "#15A4FE",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    position: 'absolute',
    right: '10%',
    bottom: '50%',
  },

  FolderContainer: {
    elevation: 8,
    backgroundColor: "#D3D3D3",
    margin: 10,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    height: 75,
    width: 300,
    position: 'absolute',
  }

});

export default App;