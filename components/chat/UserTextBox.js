import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';

export default class UserTextBox extends Component {
    
    state = {
        
    }
  
    
	render(){
		return(
			<View style={{margin:15,  alignItems:'flex-end'}}>
                <Image source={{uri: 'https://tinyurl.com/y3jnz86c'}} style={{height:40, width:40, borderRadius:20}}/>
                        <View style={{  padding:10, paddingRight:20, margin:10,marginRight:0, borderRadius:8, borderTopEndRadius:0, backgroundColor:'#BED6F6', alignItems:'flex-end'}}>
                        <Text style={{fontSize:11,flexWrap:'nowrap', fontFamily:'Times New Roman', color:'#776666', marginBottom:5}}>2:25 PM</Text>
                        <Text style={{fontSize:18,flexWrap:'wrap',fontFamily:'Times New Roman'}}>
                        Hi Yasharth How are you doing today?39454F I hope you are doing foo!
                        </Text>
                        </View>

                        {/* <View style={{ padding:10,  paddingLeft:20, borderRadius:8, borderTopEndRadius:0, backgroundColor:'#BED6F6'}}>
                            <Text style={{fontSize:11,flexWrap:'nowrap', fontFamily:'Times New Roman', color:'#776666', marginBottom:5}}>2:25 PM</Text>
                                <Text style={{fontSize:18,flexWrap:'wrap',fontFamily:'Times New Roman'}}>
                                You Rob!
                                </Text>
                        </View> */}

                </View>
			)
	}
}
