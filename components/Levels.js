import React, { Component } from 'react';
import { StyleSheet,ProgressViewIOS, Platform, ScrollView, Text, View, TouchableOpacity } from 'react-native';



export default class Levels extends Component {
    
    state = {
        deckColor: '#EEB370'
    }
  
    
	render(){
		return(
			<View style={{flex:1, backgroundColor:this.state.deckColor}}>
            <View style={{flexGrow:4, backgroundColor:'#39454F'}}  />
            <View style={{flexGrow:3,  backgroundColor:'#fff',borderBottomLeftRadius:160}}>
                <ScrollView horizontal ={true} contentContainerStyle={{ justifyContent:'flex-start', alignItem:'center', margin:20, marginTop:50, padding:50, paddingTop:0}}>
                    <TouchableOpacity onPress={() => this.setState({deckColor:'#EEB370'})} style={{width:230, height:250, backgroundColor:'#EEB370', margin:10, borderRadius:15}}>
                        <View style={{flex:1, alignItems:'flex-start', justifyContent:'space-between'}}>
                            <View style={{margin:10, justifyContent:'center', alignItems:'center', backgroundColor:'rgba(255,255,255,0.5)', height:50, width:50, borderRadius:25}}>
                                    <Text style={{fontSize:25, fontFamily:Platform.OS === 'ios' ? 'Times New Roman' : 'Roboto', fontWeight:'600', color:'#fff'}}>1</Text>
                            </View>
                            <View style={{postion:'absolute', bottom:10}}>
                            <ProgressViewIOS trackTintColor='#fff' progressViewStyle={'bar'} progressTintColor='#F6DCBE' progress={0.5} style={{margin:15, width:200, height:5}}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({deckColor:'#70DDEE'})} style={{width:230, height:250, backgroundColor:'#70DDEE', margin:10, borderRadius:15}}>
                             <View style={{flex:1, alignItems:'flex-start', justifyContent:'space-between'}}>
                             <View style={{margin:10, justifyContent:'center', alignItems:'center', backgroundColor:'rgba(255,255,255,0.5)', height:50, width:50, borderRadius:25}}>
                                    <Text style={{fontSize:25, fontFamily:Platform.OS === 'ios' ? 'Times New Roman' : 'Roboto', fontWeight:'600', color:'#fff'}}>2</Text>
                            </View>
                            <View style={{postion:'absolute', bottom:10}}>
                            <ProgressViewIOS trackTintColor='#fff' progressViewStyle={'bar'} progressTintColor='#B5F1FA' progress={0.5} style={{margin:15, width:200, height:5}}/>
                            </View>
                            </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({deckColor:'#EF3346'})} style={{width:230, height:250, backgroundColor:'#EF3346', margin:10, borderRadius:15}}>
                             <View style={{flex:1, alignItems:'flex-start', justifyContent:'space-between'}}>
                             <View style={{margin:10, justifyContent:'center', alignItems:'center', backgroundColor:'rgba(255,255,255,0.5)', height:50, width:50, borderRadius:25}}>
                                    <Text style={{fontSize:25, fontFamily:Platform.OS === 'ios' ? 'Times New Roman' : 'Roboto', fontWeight:'600', color:'#fff'}}>3</Text>
                            </View>
                            <View style={{postion:'absolute', bottom:10}}>
                            <ProgressViewIOS trackTintColor='#fff' progressViewStyle={'bar'} progressTintColor='#FD9EA7' progress={0.5} style={{margin:15, width:200, height:5}}/>
                            </View>
                            </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
			</View>
			)
	}
}
