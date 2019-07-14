import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
export default class TitleBar extends Component {
    
    state = {
        
    }
  
    
	render(){
		return(
			<View style={{ flexDirection:'row', padding:10, paddingBottom:2, paddingTop:0, alignItems:'center', justifyContent:'space-between', backgroundColor:'#39454F'}}>
                    <Text style={{fontSize:40, color:'#fff'}}>
                        Yasharth
                    </Text>
                    <AnimatedCircularProgress
                    size={40}
                    width={7}
                    fill={10}
                    style={{padding:10, paddingRight:5}}
                    tintColor="#fff"
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="#3d5875" />
                </View>
                
			)
	}
}
