import React from 'react';
import { Font } from 'expo';
import { View } from 'react-native';

import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import icoMoonConfig from './assets/example.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'example');

export default class ExampleIcon extends React.Component {
  
    state = {
      fontLoaded: false
    }
  

  async componentDidMount() {
    await Font.loadAsync({
      'example': require('./assets/fonts/example.ttf')
    });

    this.setState({fontLoaded: true});


  }

  render() {
    if (!this.state.fontLoaded) { return null;}

    return (
      <View>
      {
        this.state.fontLoaded && (
          <Icon
            name={this.props.name}
            size={this.props.size}
            color={this.props.color}
          />
        )
      }
      </View>
    );
  }
}