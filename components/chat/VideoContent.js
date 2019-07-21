import React, { Component } from 'react';
import { StyleSheet, WebView, Platform, Animated, PanResponder, Text, Modal, Dimensions, ImageBackground,Button, ScrollView,  View, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
class Video extends Component {
    
 state = {

 }
    
	render(){
		return(
            <ScrollView
                        horizontal={true} contentContainerStyle={{alignItems:'center', justifyContent:'center', backgroundColor: '#fff', flexDirection:'row', flexWrap:'wrap'}}
                        >

                           
{this.props.currentWord ?
 this.props.currentWordVideos.map((video, index) => {
     return (
        <View key={`video_${index}`}style={{height:250, margin:20, width:350, borderRadius:50}}>
        <WebView
        style={ { overflow: 'hidden',  height:250, borderRadius:25}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{uri: video }}
/>
</View>
     )
 })
 

:
<Text>No videos for this word :(</Text>
 }
 
</ScrollView>
			)
	}
}


const mapStateToProps = (store) => {
        return {
            showVideoModal: store.chatBar.showVideoModal,
            showModal: store.chatBar.showModal,
            currentWord: store.chatScreen.currentWord,
            currentWordVideos: store.chatScreen.currentWordVideos
        }
    }
    
    const mapDispatchToProps = (dispatch) => {
        return {
            onShowVideoModal: () => dispatch(showVideo()),
            onShowModal: () => dispatch(showModal())
        }
    }
    
    
    const VideoContent = connect(mapStateToProps, mapDispatchToProps)(Video);
    
    export default VideoContent;