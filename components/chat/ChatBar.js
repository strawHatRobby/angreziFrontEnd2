import React, { Component } from 'react';
import { StyleSheet,Dimensions,  Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NewsIcon from '../../CustomIcon';
import VideoIcon from '../../VideoIcon';
import ExampleIcon from '../../Examples';
import SkipIcon from '../../SkipIcon';
import QuotesIcon from '../../QuotesIcon';

export default class ChatBar extends Component {
    
    state = {
        modalEnabled: false
    }
  
    
	render(){
		return(
            <View style={[{flexGrow:10, 
                backgroundColor:'#fff', borderTopEndRadius:10, borderTopStartRadius:10,
                shadowOffset:{  width: -1,  height: -0.5  },
                shadowColor: '#a5a5a5',
                shadowOpacity: 0.25,
                justifyContent:'space-between',
                flexDirection:'row',
                flexWrap:'nowrap',
                padding:5,
                paddingBottom:2,
                paddingTop:2
            
                }, this.props.modalEnabled ? {
                paddingBottom:-55,
                borderBottomColor:'#a5a5a5',
                borderBottomWidth:0.5,
width: Dimensions.get('window').width} : {}]}>
                    <TouchableOpacity style={{padding:5, justifyContent:'center', alignItems:'center'}}>
                    <NewsIcon name='news' color={'#a5a5a5'} size={40} /> 
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding:5, justifyContent:'center', alignItems:'center'}}>
                        <VideoIcon name='video' size={40} color={'#a5a5a5'}/> 
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding:5, justifyContent:'center', alignItems:'center'}}>
                        <ExampleIcon name='example' size={40} color={'#a5a5a5'}/> 
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding:5, justifyContent:'center', alignItems:'center'}}>
                        <QuotesIcon name='quotes' size={40} color={'#a5a5a5'}/> 
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding:5, justifyContent:'center', alignItems:'center'}}>
                        <SkipIcon name='skip' size={40} color={'#a5a5a5'}/> 
                        </TouchableOpacity>
            
            </View>
			)
	}
}
