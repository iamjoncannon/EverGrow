import React, { Component } from 'react';
import styles from './styles'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,
    StatusBar,
    Dimensions,
    FlatList,
    Modal,
    TouchableOpacity
} from 'react-native';

import {feelingsArray} from './converted'

export default class KidCheckIn extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selected: null
        }
    }

    handleSelectFeeling = (id) => {
        this.setState({
            selected: id
        })
    }

    render() {

        let { dims, handleCheckInSubmit } = this.props
        let { pic, name } = this.props.data
        let kidKey = this.props.data.key

        return (
            <View style={{ flex: 1, alignItems: 'center', width: 620, height: 524}}>
                <Image
                    source={pic}
                    style={{ height: 108, width: 108, marginTop: 20}}
                />
                <Text style={{
                    fontSize: 22,
                    fontFamily: "Avenir-Heavy",
                    color: 'rgb(1, 0, 115)'
                    }}>{"\n"}Hi {name}! How are you feeling today?</Text>
                <Text style={{
                    fontSize: 22,
                    fontFamily: "Avenir-Medium",
                    color: 'rgb(15, 15, 133)'
                    }}>Select the emoji that best expresses your mood.</Text>
                <FlatList
                    numColumns={4}
                    contentContainerStyle={{
                        alignSelf: 'center',
                        flex: 1
                    }}
                    data={feelingsArray}
                    renderItem={({ item }) => (
                        <View>
                            <TouchableOpacity onPress={() => { this.setState({ selected: item.key }) }}>

                                <Image
                                    source={item.pic}
                                    style={{ height: 80, width: 80, margin: 20, opacity: this.state.selected !== null & item.key !== this.state.selected ? .2 : 1 }}
                                />
                                <Text style={{ alignSelf: 'center', fontSize: 20 }}>{item.feeling}</Text>

                            </TouchableOpacity>
                        </View>
                    )}
                />

                {
                    this.state.selected !== null ?

                        <TouchableOpacity onPress={() => handleCheckInSubmit(kidKey, this.state.selected)}>

                            <View style={{ backgroundColor: 'rgb(131,242,196)', zIndex: 2, width: this.props.ViewportWidth * .6, height: 68 }}>
                                <Text style={{
                                    fontSize: 22,
                                    fontFamily: "Avenir-Heavy",
                                    color: 'rgb(1, 0, 115)',
                                    marginTop: 19,
                                    textAlign: "center"
                                }}>DONE!</Text>
                            </View>
                        </TouchableOpacity>

                        : <View></View>
                }
            </View>
        )
    }
}