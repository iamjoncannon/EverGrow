import React, { Component } from 'react';
import styles from './styles'
import {
    View,
    Image,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native';

import { feelingsArray } from './data'

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

        let { handleCheckInSubmit, closeModal } = this.props
        let { pic, name } = this.props.data
        let kidKey = this.props.data.key

        return (

            <View style={{ flex: 1,width: 620, height: 524 }}>

                

                        <TouchableOpacity onPress={() => closeModal(this.state.selected)}>
                            <View style={{ zIndex: 2, width: 20, height: 20, position: 'absolute', right: 0, top: 35}}>
                                <Image
                                    source={require("../assets/close.png")}
                                    style={{
                                        height: 20,
                                        width: 20,
                                        position: 'absolute',
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                <View style={{ flex: 1, alignSelf: 'center', marginLeft: 60}}>

                <Image
                    source={pic}
                    style={{ height: 108, width: 108, marginTop: 20, alignSelf: "center" }}
                />
                <Text style={{
                    fontSize: 22,
                    fontFamily: "Avenir-Heavy",
                    color: 'rgb(1, 0, 115)',
                    alignSelf: "center"
                }}>{"\n"}Hi {name}! How are you feeling today?</Text>
                <Text style={{
                    fontSize: 22,
                    fontFamily: "Avenir-Medium",
                    color: 'rgb(15, 15, 133)',
                    alignSelf: "center"
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
                </View>
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
// // this.toggleLock == false ?
// <Image source={require("./unlock.png")}
// resize="cover"
// style={{
//     height: 56,
//     width: 56
// }}
// /> : <Image source={require("./Lock.png")}
// resize="cover"
// style={{
//     height: 56,
//     width: 56
// }}
// />
// }