import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import Quotes from './Quotes';

export default class BotView extends Component {
    
    state = {
        
    }
  
    
	render(){
		return(

				 <View style={{margin:15, marginBottom:5, alignItems:'flex-start'}}>
                    <Image source={{uri: 'https://cdn-images-1.medium.com/max/1200/0*oz2e-hQtsHOWzoB4.'}} style={{height:40, width:40, borderRadius:20}}/>
                    
                        <View style={{ padding:10, paddingLeft:20, margin:10,marginLeft:0, borderRadius:8, borderTopStartRadius:0, backgroundColor:'#F6DCBE'}}>
                        <Text style={{fontSize:11,flexWrap:'nowrap', fontFamily:'Times New Roman', color:'#776666', marginBottom:5}}>2:25 PM</Text>
                        <Text style={{fontSize:18,flexWrap:'wrap',fontFamily:'Times New Roman'}}>
                        Hi Yasharth!
                        </Text>
                        </View>

                        <View style={{ borderRadius:8, borderTopStartRadius:0, backgroundColor:'#F6DCBE'}}>
                            <View style={{padding:10,  paddingLeft:20}}>
                            <Text style={{fontSize:11,flexWrap:'nowrap', fontFamily:'Times New Roman', color:'#776666', marginBottom:5}}>2:25 PM</Text>
                                <Text style={{fontSize:18,flexWrap:'wrap',fontFamily:'Times New Roman'}}>
                                You Rob How are you!
                                </Text>
                                </View>
                                <View style={{padding:5, backgroundColor:'rgba(255,255,255,0.77)'}}>
                        <TouchableOpacity style={{justifyContent:'center', alignItems:'center', borderBottomColor:'#F6DCBE', borderBottomWidth:1, padding:8}}>
                            
                            <Text style={{fontSize:18, color: '#6099E6',flexWrap:'wrap',  fontFamily:'Times New Roman'}}>
                                        Yes
                                </Text>
                            
                            </TouchableOpacity>     
                            </View>

                            <View style={{padding:5, paddingBottom:0, backgroundColor:'rgba(255,255,255,0.77)'}}>
                        <TouchableOpacity style={{justifyContent:'center', alignItems:'center',padding:8}}>
                            
                            <Text style={{fontSize:18, color: '#6099E6',flexWrap:'wrap',  fontFamily:'Times New Roman'}}>
                                        No
                                </Text>
                            
                            </TouchableOpacity> 
                            </View>   

                            

                        </View>

                       <Quotes/>
                        

                </View>

			)
	}
}
