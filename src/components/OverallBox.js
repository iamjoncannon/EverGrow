import React, {Component} from 'react';

import {
    ScrollView,
    View,
    Image,
    Text,
    Dimensions,
    FlatList,
    Modal,
    TouchableOpacity,
    TextInput,
    Keyboard,
    PixelRatio,
    StyleSheet
} from 'react-native';

import { DashText } from './dashboard'

const thisStyle = StyleSheet.create({

    dashItem : {
        fontSize: 36,
        fontFamily: 'Avenir-Heavy',
        color: 'rgb(1, 0, 115)'
    },
    tableHeader: {

    }
})

import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const tableHead = ["< 04/19/2020 >", 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri']
const tableTitle = ['Title', 'Title2', 'Title3', 'Title4']
const tableData = [
        ['1', '2', '3'],
        ['a', 'b', 'c'],
        ['1', '2', '3'],
        ['a', 'b', 'c']
      ]

const ActivityTable = (props) => {

    return (

        <Table  >
          
          <Row data={tableHead} flexArr={[1, 1, 1, 1]} textStyle={ thisStyle.tableHeader } borderStyle={{borderColor: 'transparent'}}/>

          <TableWrapper style={{borderWidth: 0}}>
        
            <Col data={tableTitle} style={{}} heightArr={[28,28]} textStyle={{}}/>
        
            <Rows data={tableData} flexArr={[1, 1, 1]} style={{}} textStyle={{}}/>
        
          </TableWrapper>
        
        </Table>
    )
}

const TodayBox = (props) => {

    return (
       
        <View>
            <Text style={{...thisStyle.dashItem, margin: 25, fontFamily: 'Avenir-Black'}}>My Classroom</Text>
            <DashText wt="Heavy" size={28.6} text="Weekly Wellness Calendar" others={{marginLeft: 25, marginBottom: 20}}/>
            <View style={{marginLeft: 25, marginRight: 25}}>

                <Image source={require("../assets/activityTable.png")} 
                        resizeMode="stretch" 
                        style={{ height: 510 , width: 999 }}     
                />

            </View>
        
        </View>
    )
}

export default TodayBox
