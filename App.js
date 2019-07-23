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

import ConvertedContainer from './src/converted'
import Tree from './src/treeopen'

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
      
      this.state.next ? <ConvertedContainer/> : <Tree handleNext={this.handleNext} />
    );
  }
};
  
export default App;
