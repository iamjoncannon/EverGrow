/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Root from './src/root'
import Tree from './src/components/treeopen'
import DashBoard from './src/components/dashboard'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
          next: false
      }
  }

  handleNext = () =>{
    this.setState({
      next: true
    })
  }

  
  render(){
    return (
      this.state.next === true ? <Root/>:<Tree handleNext={this.handleNext}/> 
    );
  }
};
  
export default App;

/*
  this.state.next ? <Root/> : <Tree handleNext={this.handleNext} />
*/