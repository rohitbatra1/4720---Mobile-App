import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

class TableClassAssignments extends Component {
   constructor(props) {
     super(props);
     this.state = {
       tableHead: ['Title', 'Status', 'Open', 'Due'],
       tableData: [
         ['PA 1', 'Returned', 'Oct 12, 2020 3:00 pm', 'Oct 14, 2020 3:00 pm'],
         ['PA 2', 'Returned', 'Oct 16, 2020 3:00 pm', 'Oct 18, 2020 3:00 pm'],
         ['PA 3', 'Not Started', 'Oct 19, 2020 3:00 pm', 'Oct 21, 2020 3:00 pm'],
         ['PA 4', 'Not Started', 'Oct 27, 2020 3:00 pm', 'Oct 29, 2020 3:00 pm']
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
                     <Cell key={cellIndex} data={cellData} textStyle={tableStyles.text}/>
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
   text: { margin: 6, },
   row: { flexDirection: 'row', backgroundColor: '#D3D3D3', },
   btn: { width: 58, height: 18, backgroundColor: '#15A4FE',  borderRadius: 5 },
   btnText: { textAlign: 'center', color: '#fff' }
 });
 
 export default TableClassAssignments;