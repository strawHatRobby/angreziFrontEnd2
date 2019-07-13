import React from 'react';
import { Font } from 'expo';
import { View } from 'react-native';

import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import icoMoonConfig from './assets/skip.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'skip');

export default class SkipIcon extends React.Component {
  
    state = {
      fontLoaded: false
    }
  

  async componentDidMount() {
    await Font.loadAsync({
      'skip': require('./assets/fonts/skip.ttf')
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