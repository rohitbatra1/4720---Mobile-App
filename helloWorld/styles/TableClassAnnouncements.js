import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';


import {announcementsToPass} from '../components/Announcements.js'

class TableClassAnnouncements extends Component {
   constructor(props) {
     super(props);


     var tabData = []

     for (var index in announcementsToPass){
      
       var curAnnouncementData = [announcementsToPass[index].entityTitle, announcementsToPass[index].createdByDisplayName, announcementsToPass[index].body]
       tabData.push(curAnnouncementData)
     }

     this.state = {
       tableHead: ['Title', 'Author', 'Message'],
       tableData: tabData
      //  tableData: [
      //    ['Welcome!', 'Oct 14, 2020 3:00 pm'],
      //    ['PA 2 Due', 'Oct 18, 2020 3:00 pm'],
      //    ['PA 3 Due', 'Oct 21, 2020 3:00 pm'],
      //    ['PA 4 Due', 'Oct 29, 2020 3:00 pm']
      //  ]
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
       <ScrollView style={tableStyles.container}>
         <Table borderStyle={{borderColor: 'transparent'}}>
           <Row data={state.tableHead} style={tableStyles.head} textStyle={tableStyles.text}/>
           {
             state.tableData.map((rowData, index) => (
               <TableWrapper key={index} style={tableStyles.row}>
                 {
                   rowData.map((cellData, cellIndex) => (
                     <Cell key={cellIndex} data={cellData} textStyle={tableStyles.text}/>
                   ))
                 }
               </TableWrapper>
             ))
           }
         </Table>
       </ScrollView>
     )
   }
 }
 
 const tableStyles = StyleSheet.create({
   container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
   head: { height: 40, backgroundColor: '#808B97', borderTopStartRadius: 20, borderTopEndRadius: 20},
   text: { margin: 6, },
   row: { flexDirection: 'row', backgroundColor: '#D3D3D3', },
   btn: { width: 58, height: 18, backgroundColor: '#15A4FE',  borderRadius: 5 },
   btnText: { textAlign: 'center', color: '#fff' }
 });
 
 export default TableClassAnnouncements;