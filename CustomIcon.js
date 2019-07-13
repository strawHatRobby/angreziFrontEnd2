import React from 'react';
import { Font } from 'expo';
import { View } from 'react-native';

import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import icoMoonConfig from './assets/selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'news');

export default class NewsIcon extends React.Component {
  
    state = {
      fontLoaded: false
    }
  

  async componentDidMount() {
    await Font.loadAsync({
      'news': require('./assets/fonts/news.ttf')
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