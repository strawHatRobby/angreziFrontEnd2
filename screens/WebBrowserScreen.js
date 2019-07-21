import React, { Component } from 'react';
import { StyleSheet, Text,WebView, Dimensions, View, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
export default class WebViewComponent extends Component {
  static navigationOptions = {
    title: 'News',
  };
    state = {

    }
	render(){
		return(
            <View style={styles.container}>

          <WebView
            source={{uri:this.props.navigation.getParam('webUrl', 'auto:blank')}}
          />
          </View>
			)
	}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
