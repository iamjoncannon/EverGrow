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
          scene: 'tree'
      }
  }

  handleNext = (scene) =>{
    this.setState({
      scene: scene
    })
  }

  
  render(){
    return (
      
      this.state.scene === 'root' ? <Root handleNext={this.handleNext}/> : 
      this.state.scene === 'dash' ? <DashBoard /> :
      <Tree handleNext={this.handleNext}/> 
    );
  }
};
  
export default App;
