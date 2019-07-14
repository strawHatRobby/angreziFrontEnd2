import React, { Component } from 'react';
import { StyleSheet,Dimensions,  Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NewsIcon from '../../CustomIcon';
import VideoIcon from '../../VideoIcon';
import ExampleIcon from '../../Examples';
import SkipIcon from '../../SkipIcon';
import QuotesIcon from '../../QuotesIcon';
import ExampleOptions from './ExampleOptions';

export default class ChatBar extends Component {
    
    state = {
        modalEnabled: false,
        showExamplesType: false,
        activeIcon: null
    }
  
    
	render(){
		return(
            <View style={[{ 
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
                    position:'absolute',
                    top:-55,
                    left:0,
                borderBottomColor:'#a5a5a5',
                borderBottomWidth:0.5,
width: Dimensions.get('window').width} : {}]}>
                    <TouchableOpacity 
                    onPress={() => {
                            this.setState({
                                activeIcon: 'news',
                                showExamplesType: false
                            })
                    }} 
                     style={{padding:5, justifyContent:'center', alignItems:'center'}}>
                    <NewsIcon name='news' color={this.state.activeIcon === 'news' ? '#000': '#a5a5a5'} size={40} /> 
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => {
                            this.setState({
                                activeIcon: 'video',
                                showExamplesType: false
                            })
                    }} 
                        style={{padding:5, justifyContent:'center', alignItems:'center'}}>
                        <VideoIcon name='video' size={40} color={this.state.activeIcon === 'video' ? '#000': '#a5a5a5'}/> 
                        </TouchableOpacity>
                        {
                                this.state.showExamplesType && 

                               <ExampleOptions/>
                            }
                        <TouchableOpacity onPress= {()=> {this.setState({
                            showExamplesType: !this.state.showExamplesType,
                            activeIcon: 'example'
                            })}} 
                            style={{padding:5, justifyContent:'center', alignItems:'center'}}>
                        <ExampleIcon name='example' size={40} color={this.state.activeIcon === 'example' && this.state.showExamplesType ? '#000': '#a5a5a5'}/> 
                        </TouchableOpacity>
                        <TouchableOpacity 
                         onPress={() => {
                            this.setState({
                                activeIcon: 'quotes',
                                showExamplesType: false
                            })
                    }}
                        style={{padding:5, justifyContent:'center', alignItems:'center'}}>
                        <QuotesIcon name='quotes' size={40} color={this.state.activeIcon === 'quotes' ? '#000': '#a5a5a5'}/> 
                        </TouchableOpacity>
                        <TouchableOpacity 
                         onPress={() => {
                            this.setState({
                                activeIcon: 'skip',
                                showExamplesType: false
                            })
                    }}
                        style={{padding:5, justifyContent:'center', alignItems:'center'}}>
                        <SkipIcon name='skip' size={40} color={this.state.activeIcon === 'skip' ? '#000': '#a5a5a5'}/> 
                        </TouchableOpacity>
            
            </View>
			)
	}
}
