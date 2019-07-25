import React from 'react';
import Root from './src/root'
import Tree from './src/components/treeopen'
import DashBoard from './src/components/dashboard'
import { kidsArray, feelingsArray, feelings, feelingsPics } from './src/components/data'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      scene: 'tree',
      kidData: {}
    }
  }

  handleNext = (scene) => {
    this.setState({
      scene: scene
    })
  }

  handleKids = (newKidObj) => {

    this.setState({kidData: newKidObj})
  }

  componentDidMount() {

    // this is where you would load the data object for the kids
    // with an AJAX call
    const initialKidData = {}

    kidsArray.forEach(kid => {
      let thisKid = kid
      thisKid["checkedIn"] = false

      initialKidData[kid.key] = thisKid
    })

    this.setState({ kidData: initialKidData })
  }

  render() {
    return (

      this.state.scene === 'root' ? <Root handleKids={this.handleKids} handleNext={this.handleNext} kidData={this.state.kidData} /> :
      this.state.scene === 'dash' ? <DashBoard handleNext={this.handleNext} data={this.state.kidData} /> :
          <Tree handleNext={this.handleNext} />
    );
  }
};

export default App;
