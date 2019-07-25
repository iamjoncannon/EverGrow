import React, { Component } from 'react';

import {
    Text
} from 'react-native';

const DashText = (props) => {

    const styling = { ...props.others, fontSize: props.size, fontFamily: "Avenir-" + props.wt }

    return (
        <Text style={{ ...styling, color: 'rgb(1, 0, 115)' }}>{props.text}</Text>
    )
}

export default DashText