import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import YouTube from 'react-native-youtube'

export default class YouTubeWindow extends Component {
    
    state = {
     isReady: false,
     status: '',
     qualit: '480'   
    }
  
    
	render(){
		return(
			<YouTube
            videoId="KVZ-P-ZI6W4"   // The YouTube video ID
            play={true}             // control playback of video with true/false
            fullscreen={true}       // control whether the video should play in fullscreen or inline
            loop={true}             // control whether the video should loop when ended

            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onError={e => this.setState({ error: e.error })}

            style={{ alignSelf: 'stretch', height: 300 }}
/>
			)
	}
}
