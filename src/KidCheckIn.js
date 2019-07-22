import React, { Component } from 'react';
import styles from './styles'
import {
    View,
    Image,
    Text,
    FlatList,
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
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Image
                    source={pic}
                    style={{ height: dims, width: dims }}
                />
                <Text style={styles.Feelings}> Hi {name}! How do you feel today?</Text>
                <Text style={styles.Feelings}>Select the emoji that best expresses your mood.</Text>
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
                                    style={{ margin: 20, opacity: this.state.selected !== null & item.key !== this.state.selected ? .2 : 1 }}
                                />
                                <Text style={{ alignSelf: 'center', fontSize: 20 }}>{item.feeling}</Text>

                            </TouchableOpacity>
                        </View>
                    )}
                />
                {
                    this.state.selected !== null ?

                        <TouchableOpacity onPress={() => handleCheckInSubmit(kidKey, this.state.selected)}>

                            <View style={{ backgroundColor: 'rgba(131,242,196, 1.0)', zIndex: 2, width: this.props.ViewportWidth * .6, height: 80 }}>
                                <Text style={{ ...styles.Feelings, marginTop: 15 }}>Done</Text>
                            </View>
                        </TouchableOpacity>

                        : <View></View>
                }
            </View>
        )
    }
}