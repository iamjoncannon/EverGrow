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

import DashText from './DashText'

const thisStyle = StyleSheet.create({

    dashItem : {
        fontSize: 36,
        fontFamily: 'Avenir-Heavy',
        color: 'rgb(1, 0, 115)'
    },
})

// import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

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

const boxOne = ['Figure It Out', "Chameleon Moods", "Learn to identify emotions", "10" ]
const boxTwo = ['Let It Out', "Feeling Charades", "Learn to express emotions", '10']
const boxThree = ['Slow it down', "Relaxing Colors", "Learn to regulate emotions", '9']

const ActivityBox = (props) => {

    let { data } = props

    return (

        <View style={{ flexDirection: 'row', margin: 10 }}>

            <View style={{ width: 300, height: 121, backgroundColor: 'rgb(255, 203, 137)' }}>
                <DashText wt="Light" size={16} text={data[0]} others={{ marginLeft: 20, marginTop: 5 }} />
                <DashText wt="Medium" size={25} text={data[1]} others={{ marginLeft: 20 }} />
                <DashText wt="Light" size={20} text={data[2]} others={{ marginLeft: 20 }} />
            </View>
            <View style={{ width: 100, height: 121, backgroundColor: 'rgb(255, 228, 193)', alignItems: 'center' }}>
                <DashText wt="Roman" size={20} text="Rating" others={{ marginTop: 20 }} />
                <DashText wt="Heavy" size={25} text={data[3]} others={{ marginTop: 5 }} />

            </View>
        </View>
    )
}

const OverallBox = (props) => {

    return (
       
        <View>
      

                <Text style={{...thisStyle.dashItem, margin: 25, fontFamily: 'Avenir-Black'}}>My Classroom</Text>

                <View style={{alignSelf:"center"}}>

                    {/* Activity Table  */}

                    <Image  source={require("../assets/table.png")} 
                            resizeMode="stretch" 
                            style={{ height: 510 , width: 999 }}     
                    /> 
                
                </View>


                <View style={{ flexDirection: 'row' }}>

                    <View style={{ width: 550, height: 400, alignSelf: 'center' }}>
                        <Text style={{ ...thisStyle.dashItem, fontSize: 25, margin: 25, fontFamily: 'Avenir-Black' }}>Top Emotions</Text>
                        <Image source={require("../assets/feelings_Pie_Chart.png")}
                            resize="cover"
                            style={{ height: 430, width: 430, alignSelf: 'center' }}
                        />
                    </View>

                    <View style={{ width: 550, height: 400, alignSelf: 'center' }}>

                        <Text style={{ ...thisStyle.dashItem, fontSize: 25, margin: 25, fontFamily: 'Avenir-Black' }}>Top Rated Activities</Text>

                        <View style={{ height: 428, width: 430, marginLeft: 25 }}>

                            {/* Activity Boxes */}

                            <ActivityBox data={boxOne} />
                            <ActivityBox data={boxTwo} />
                            <ActivityBox data={boxThree} />
            
                            <Image source={require('../assets/seemore.png')} style={{ alignSelf: 'flex-end', marginTop: 10, marginRight: 40 }} />

                        </View>
                    </View>
            
                </View>

        </View>
    )
}

export default OverallBox
