
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Definition extends Component {
    
    state = {
        options: ['Guileless','Spectacular','Cold','Emotionless']
    }
  
    
	render(){
		return(
			<View style={{ borderRadius:8, borderTopStartRadius:0, marginTop:10, backgroundColor:'#EFEFEF'}}>
                            <View style={{padding:10,  paddingLeft:20}}>
                            <Text style={{fontSize:11,flexWrap:'nowrap', fontFamily:'Times New Roman', color:'#776666', marginBottom:5}}>2:25 PM</Text>
                                <Text style={{fontSize:18,flexWrap:'wrap',fontFamily:'Times New Roman'}}>
                                Which of the following is a synonym 
for 'Artless'?
                                </Text>
                                </View>

                            
{
    this.state.options.map((item, index) => {
        return (
<View  key={index} style={{padding:5, backgroundColor:'rgba(255,255,255,0.77)'}}>
                        <TouchableOpacity style={{justifyContent:'center', alignItems:'center', borderBottomColor:'#F6DCBE', borderBottomWidth:1, padding:8}}>
                            
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
