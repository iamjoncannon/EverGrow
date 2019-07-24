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
    StyleSheet,
    
} from 'react-native';

import styles from './styles'
import TodayBox from './todayBox'
import OverallBox from './OverallBox'

// import console = require('console');

console.log("vscode is really annoying")

const projectBlue = 'rgb(1, 0, 115)'

const thisStyle = StyleSheet.create({
    viewPortContainer: {
        flex: 1,        
    },
    DashTitle : {
        alignSelf: "center",
        fontSize: 60,
        fontFamily: "Avenir-Black",
        color: 'rgb(1, 0, 115)'
    },
    Date: {
        alignSelf: "center",
        fontSize: 36,
        fontFamily: "Avenir-Medium",
        color: 'rgb(1, 0, 115)'
    },
    DashBox: {
        width: 455,
        height: 88,
        borderRadius: 5,
        borderWidth: 1,
        padding: 10,
        margin: 8,
        justifyContent: 'space-around',
        alignItems: 'center', 
        
    },
    dashItem: {
        fontSize: 36,
        fontFamily: 'Avenir-Heavy',
        color: 'rgb(1, 0, 115)'
    }
})

import { feelingsArray, kidsArray } from './data'

export const TopDashBox = (props) => {

    return (
        <View style={thisStyle.DashBox}>
            {props.children}
        </View>
    )
}

export const DashSubScreenSelect = (props) => {

    const base = {width: 550, height: 90}
    const selectedBar = { ...base, borderBottomColor: 'rgb(131, 242, 196)', borderBottomWidth: 5 }

    return(
        <TouchableOpacity onPress={()=>props.callback()}>
            <View style={ props.selected ? selectedBar : base }>
                <Text style={{...thisStyle.dashItem, marginLeft: 40, fontSize: 35, fontFamily: 'Avenir-Heavy', marginTop: 30}}>
                    {props.id}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export const DashText = (props) => {
    
    const styling = { ...props.others, fontSize: props.size, fontFamily: "Avenir-" + props.wt }

    return (
        <Text style={{ ...styling, color: 'rgb(1, 0, 115)'}}>{props.text}</Text> 
    )
}

export default class DashBoard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            subTab: 'Overall'
        }
    }

    render(){

        const { subTab } = this.state

        console.log(this.state)

        return(
            <View style={thisStyle.viewPortContainer}>
                <ScrollView>
                {/* Header */}
                <Image source={require("../assets/dashheader.png")} 
                        resize="cover" 
                        style={{ height: 231, width: 1112 }}     
                />

                {/* Top info */}
                <Text style={thisStyle.DashTitle}>Ms. Copeland's Classroom</Text>
                <Text style={thisStyle.Date}>Monday May 8, 2020</Text>
                
                {/* Dash Buttons */}
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 7 }}>
                    <TopDashBox>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{...thisStyle.dashItem, fontSize: 36} }>23</Text> 
                            <Text style={{...thisStyle.dashItem, fontFamily: "Avenir-Light", fontSize: 20, marginTop: 18} }>days</Text> 
                        </View>
                        <Text style={{...thisStyle.dashItem, fontFamily: "Avenir-Medium", fontSize: 20} }>Current Streak</Text>                 
                    </TopDashBox>

                    <TopDashBox>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{...thisStyle.dashItem, fontSize: 36} }>49</Text> 
                        </View>
                        <Text style={{...thisStyle.dashItem, fontFamily: "Avenir-Medium", fontSize: 20} }>Total Sessions Completed</Text>                 
                    </TopDashBox>
                </View>

                {/* Middle Block- total and Overall */}

                {/* dash button container */}
                <View style={{flexDirection: 'row', }}>

                    <DashSubScreenSelect id={'Today'} selected={ subTab === "Today" } callback={()=>this.setState({subTab: 'Today'})}/>
                    <DashSubScreenSelect id={'Overall'} selected={ subTab === "Overall" } callback={()=>this.setState({subTab: 'Overall'})}/>
            
                </View>

                {/* Selected Middle Section Container */}
                <View style={{height: 670, borderWidth: 1, borderColor: 'grey', flex: 1}}>

                    { this.state.subTab === "Today" ? <TodayBox /> : <OverallBox></OverallBox> }

                </View>

                {/* My Students Section */}

                <DashText wt="Black" size={35} text="My Students" others={{marginTop: 30, marginLeft: 30}}/>
                <DashText wt="Medium" size={16} text="View individual student's progress details." others={{marginLeft: 30}}/>
                
                <View style={{flex: 1, marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>

                    <TextInput placeholder="Type something" placeholderTextColor={projectBlue} style={{alignSelf: 'center', marginLeft: 30, height: 55, width: 456, borderColor: 'black', borderWidth: 1}}/>
                    
                    <DashText wt="Medium" size={25} text="Filter by:" others={{alignSelf: 'center', marginLeft: 30}}/> 
                    
                    <FlatList
                        numColumns={6}
                        contentContainerStyle={{
                                alignSelf: 'center',
                                flex: 1, 
                            }}
                        data={feelingsArray}
                        renderItem={({item})=>(
                            <Image source={item.pic} style={{height: 50, width: 50, marginLeft: 20 }}/>
                        )}
                    />

                </View> 

                <View>
                    
                    <ScrollView style={{flex: 1, width: 1160, backgroundColor: 'rgba(151, 151, 151, .1)'}}>
      
                        <View style={{alignSelf: 'center'}}>

                            <FlatList
                                numColumns={6}
                                contentContainerStyle={{
                                        alignSelf: 'flex-end',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexDirection: 'row',
                                        height: 150, 
                                    }}
                                data={kidsArray}
                                renderItem={({item})=>(

                                    <Image source={item.pic} style={{margin: 20, height: 110, width: 110, alignSelf: 'center'}}/>
                                )}
                            />
                        </View>

                    </ScrollView>

                </View>

                </ScrollView>

                <Image source={require("../assets/DashBoard_footer.png")} 
                        resize="cover" 
                        style={{ height: Dimensions.get("window").height * .12, width: Dimensions.get("window").width }}     
                />

            </View> 
        )
    }
}
