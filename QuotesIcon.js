import React from 'react';
import { Font } from 'expo';
import { View } from 'react-native';

import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import icoMoonConfig from './assets/quotes.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'quotes');

export default class QuotesIcon extends React.Component {
  
    state = {
      fontLoaded: false
    }
  

  async componentDidMount() {
    await Font.loadAsync({
      'quotes': require('./assets/fonts/quotes.ttf')
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