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
    }
})


const TodayBox = (props) => {

    return (
       
        <View>
            <Text style={{...thisStyle.dashItem, margin: 25, fontFamily: 'Avenir-Black'}}>My Classroom</Text>
            <View style={{flexDirection: 'row'}}>

                <View style={{width: 550, height: 400, alignSelf: 'center'}}>
                    <Text style={{...thisStyle.dashItem, fontSize: 25, margin: 25, fontFamily: 'Avenir-Black'}}>Top Emotions</Text>
                    <Image source={require("../assets/feelings_Pie_Chart.png")} 
                            resize="cover" 
                            style={{ height: 430, width: 430, alignSelf: 'center' }}     
                    />
                </View>

                <View style={{width: 550, height: 400, alignSelf: 'center'}}>
                    
                    <Text style={{...thisStyle.dashItem, fontSize: 25, margin: 25, fontFamily: 'Avenir-Black'}}>Suggested Activities</Text>
                    
                    <View style={{ height: 428, width: 430, marginLeft: 25 }}>

                        {/* Activity Boxes - these can definitely be encapsulated */}

                        <View style={{width: 400, height: 175, backgroundColor: 'rgb(255, 203, 137)', borderRadius: 20}}>   
                            <DashText wt="Light" size={18} text="Figure It Out" others={{ margin: 20}} />
                            <DashText wt="Medium" size={32} text="Sammy the Squirrel" others={{ marginLeft: 20}} />
                            <DashText wt="Light" size={25} text="Responding to Stress" others={{ marginLeft: 20}} />
                            <Image source={require('../assets/playButton.png')} style={{position: 'absolute', top: 100, left: 320}}/>
                        </View>

                            <View style={{width: 400, height: 120, backgroundColor: 'rgb(255, 228, 193)', borderRadius: 20, marginTop: 10}}>   
                            <DashText wt="Light" size={16} text="Let It Out" others={{ marginLeft: 20, marginTop: 20}} />
                            <DashText wt="Medium" size={25} text="Rain Storm" others={{ marginLeft: 20}} />
                            <DashText wt="Light" size={20} text="Unite the class with Sound" others={{ marginLeft: 20}} />
                            <Image source={require('../assets/playButton.png')} style={{position: 'absolute', top: 35, left: 320}}/>
                        </View>

                        <View style={{width: 400, height: 120, backgroundColor: 'rgb(255, 228, 193)', borderRadius: 20, marginTop: 10}}>   
                            <DashText wt="Light" size={16} text="Slow It Down" others={{ marginLeft: 20, marginTop: 20}} />
                            <DashText wt="Medium" size={25} text="Tree Movement" others={{ marginLeft: 20}} />
                            <DashText wt="Light" size={20} text="Relaxing guided movements" others={{ marginLeft: 20}} />
                            <Image source={require('../assets/playButton.png')} style={{position: 'absolute', top: 35, left: 320}}/>
                        </View>

                            <Image source={require('../assets/seemore.png')} style={{alignSelf: 'flex-end', marginTop: 10, marginRight: 40}}/>

                    </View>    
                </View>
            </View>
        </View>
    )
}

export default TodayBox
