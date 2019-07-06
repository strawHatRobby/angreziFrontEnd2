import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity } from 'react-native';

export default class TitleBar extends Component {
    
    state = {
        
    }
  
    
	render(){
		return(
			<View style={{flexGrow:1, flexDirection:'row', padding:10, paddingBottom:2, paddingTop:0, alignItems:'center', justifyContent:'space-between', backgroundColor:'#39454F'}}>
                    <Text style={{fontSize:40, color:'#fff'}}>
                        Yasharth
                    </Text>
                    <ActivityIndicator size="large" color="#fff" />
                </View>
                
			)
	}
}
