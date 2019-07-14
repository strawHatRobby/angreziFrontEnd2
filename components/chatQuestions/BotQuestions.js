import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class BotQuestions extends Component {
    
    state = {
        
    }
  
    
	render(){
		return(
            <View style={{ borderRadius:8, borderTopStartRadius:0, backgroundColor:'#F6DCBE'}}>
            <View style={{padding:10,  paddingLeft:20}}>
            <Text style={{fontSize:11,flexWrap:'nowrap', fontFamily:'Times New Roman', color:'#776666', marginBottom:5}}>2:25 PM</Text>
                <Text style={{fontSize:18,flexWrap:'wrap',fontFamily:'Times New Roman'}}>
                You Rob How are you!
                </Text>
                </View>
               {
                   ['Yes', 'No'].map((item, index) => {
                       return (
                        <View key={index} style={{padding:5, paddingBottom:0, backgroundColor:'rgba(255,255,255,0.77)'}}>
                        <TouchableOpacity style={{justifyContent:'center', alignItems:'center',padding:8}}>
                            
                            <Text style={{fontSize:18, color: '#6099E6',flexWrap:'wrap',  fontFamily:'Times New Roman'}}>
                                        {item}
                                </Text>
                            
                            </TouchableOpacity> 
                            </View>   
                       )
                   })
            }

           

            

        </View>
			)
	}
}
