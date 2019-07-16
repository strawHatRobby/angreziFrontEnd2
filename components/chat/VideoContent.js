import React, { Component } from 'react';
import { StyleSheet, WebView, Platform, Animated, PanResponder, Text, Modal, Dimensions, ImageBackground,Button, ScrollView,  View, TouchableOpacity } from 'react-native';

export default class VideoContent extends Component {
    
 state = {

 }
    
	render(){
		return(
            <ScrollView
                        horizontal={true} contentContainerStyle={{alignItems:'center', justifyContent:'center', backgroundColor: '#fff', flexDirection:'row', flexWrap:'wrap'}}
                        >

                           
        <View style={{height:250, margin:20, width:350, borderRadius:50}}>
 
 <WebView
         style={ { overflow: 'hidden',  height:250, borderRadius:25}}
         javaScriptEnabled={true}
         domStorageEnabled={true}
         source={{uri: 'https://www.youtube.com/embed/HdPzOWlLrbE?start=225&end=268&cc_load_policy=1&loop=1' }}
 />

</View>
</ScrollView>
			)
	}
}
