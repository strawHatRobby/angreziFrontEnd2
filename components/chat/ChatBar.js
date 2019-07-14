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
        modalEnabled: false,
        showExamplesType: true
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
                    position:'absolute',
                    top:-55,
                    left:0,
                borderBottomColor:'#a5a5a5',
                borderBottomWidth:0.5,
width: Dimensions.get('window').width} : {}]}>
                    <TouchableOpacity style={{padding:5, justifyContent:'center', alignItems:'center'}}>
                    <NewsIcon name='news' color={'#000'} size={40} /> 
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding:5, justifyContent:'center', alignItems:'center'}}>
                        <VideoIcon name='video' size={40} color={'#a5a5a5'}/> 
                        </TouchableOpacity>
                        {
                                this.state.showExamplesType && 

                                <View style={{position:'absolute'}} >
                                     <View style={{ width: 0,
    height: 0,
    top:-10,
    left: 175,
    zIndex:1,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 16,
    shadowOffset:{  width: -1,  height: -0.5  },
                shadowColor: '#000',
                shadowOpacity: 0.2,
    transform: [
        {rotate: '180deg'}
      ],
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white'}}/>
                                    <View style={{ position:'absolute', zIndex:0, 
                                    shadowOffset:{  width: -1,  height: -1  },
                                    shadowColor: '#000',
                                    shadowOpacity: 0.75,
                                    top:-70, left:90, width:180, height:60, backgroundColor:'#fff', borderRadius:10}}>

                                        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', flexWrap:'nowrap', borderBottomColor:'#E3E3E3', borderBottomWidth:1}}>
                                            <TouchableOpacity onPress={() => {}} style={{ justifyContent:'center', alignItems:'center', padding:5}}>
                                    <Text style={{color:'#4F83B6', fontWeight:'700', fontSize:15}}>
                                                
                                            Use it in a sentence
                                            </Text>
                                            </TouchableOpacity>
                                            </View>

                                            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', flexWrap:'nowrap'}}>
                                            <TouchableOpacity onPress={() => {}} style={{ justifyContent:'center', alignItems:'center', padding:5}}>
                                    <Text style={{color:'#4F83B6', fontWeight:'700', fontSize:15}}>
                                            Synonyms
                                            </Text>
                                            </TouchableOpacity>
                                            </View>
                                   

                                        

                                </View>
</View>
                            }
                        <TouchableOpacity onPress= {()=> {this.setState({showExamplesType: !this.state.showExamplesType})}} style={{padding:5, justifyContent:'center', alignItems:'center'}}>
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
