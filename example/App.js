import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SegmentedTabs from './segementTabs';

export default class App extends Component<{}> {
  constructor (props) {
    super(props);
    this.state = {
      selectIndex: 0
    }
  }

  _selectTabs = (index) => {
    this.setState({
      selectIndex: index
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <SegmentedTabs
          wrapStyle={styles.wrap}
          selectIndex={this.state.selectIndex} 
          onPress={this._selectTabs} 
          items={['日','周','月','年']}/>
        <SegmentedTabs
          wrapStyle={styles.wrap}
          selectIndex={this.state.selectIndex} 
          onPress={this._selectTabs} 
          items={['分钟','小时','天']}/>
        <SegmentedTabs
          wrapStyle={styles.wrap}
          selectIndex={this.state.selectIndex} 
          onPress={this._selectTabs} 
          items={['A','B']}/>                    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  wrap: {
    marginTop: 30
  }
});