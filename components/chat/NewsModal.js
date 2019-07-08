import React, { Component } from 'react';
import { StyleSheet, Text, Dimensions, ImageBackground,Button, ScrollView, Modal, View, TouchableOpacity } from 'react-native';

export default class NewsModal extends Component {
    
    state = {
        showModal: true
    }
  
    
	render(){
		return(
			 <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.showModal}
                    onRequestClose={() => Alert.alert('Done')}
                    >
                        <View style={{flexDirection:'column', flexGrow:1, justifyContent:'flex-end', backgroundColor:'rgba(255,255,255,0.5)'}}>
                        <View style={{justifyContent:'center', alignItems: 'center', height: Dimensions.get('window').height/1.8, backgroundColor:'#fff',
                                    shadowOffset:{  width: -1,  height: -1  },
                                    shadowColor: '#a5a5a5',
                                    shadowOpacity: 0.5,
                                    borderTopStartRadius:25, borderTopEndRadius:25 }}>
                        <TouchableOpacity style={{justifyContent:'center', alignItems:'center', position:'absolute', top:-10, right:0, height:25, width:25, borderRadius:25, borderColor:'#a5a5a5', borderWidth:1, backgroundColor:'#f00'}} onPress={() => {this.setState({showModal:false})}}>
                            <Text style={{fontSize:15, fontWeight:'bold', color:'#fff'}}>
                                    x
                                </Text>
                            </TouchableOpacity>
                <View style={{width:70, marginTop:15, borderBottomColor:'#D9D6D6', borderBottomWidth:1}}/>
                        <View
                        style={{paddingTop:10, borderBottomColor:'##707070', borderBottomWidth:1, paddingBottom:5}}>
                            <Text style={{fontFamily:'Times New Roman', fontWeight:'bold', fontSize:30}}>
                                'Cacophony' in News
                            </Text>
                        </View>
                        <ScrollView
                        horizontal={true} contentContainerStyle={{flexGrow:1, alignItems:'center', justifyContent:'center', backgroundColor: '#fff', flexDirection:'row', flexWrap:'wrap'}}
                        >

                            <ImageBackground source={{uri:'https://www.freegreatpicture.com/files/photo106/52992-parrot.jpg'}} style={{height:250, margin:20,  width:350 }} imageStyle={{borderRadius:25}}>
                                <View style={{flex:1, justifyContent:'space-between', backgroundColor:'rgba(0,0,0,0.1)', borderRadius:25, borderBottomEndRadius:0, borderBottomStartRadius:0}}>
                                    <View style={{width: 350, padding:15, borderRadius:25, borderBottomStartRadius:0}}>
                                        <Text style={{fontFamily:'Times New Roman', fontWeight:'800', fontSize:26, color:'#fff'}}>
                                            Cacophony of Birds
                                            </Text>
                                    </View>
                                    <View style={{width: 350, padding:15, paddingBottom:0, borderRadius:25, borderBottomStartRadius:0}}>
                                        <Text style={{backgroundColor:'rgba(0,0,0,0.05)', fontFamily:'Arial', fontWeight:'bold', fontSize:14, color:'#fff'}}>
                                        Greyhound divisively hello coldly wonderfully marginally far…
                                            </Text>
                                            <View style={{flexDirection:'row', margin:10, marginLeft:0,  alignItems: 'flex-start', width:350}}>
                                                <TouchableOpacity style={{alignItems:'center', justifyContent:'center', height:40, width:80, marginRight:10, backgroundColor:'rgba(43, 53, 62, 0.55)'}}>
                                                    <Text style={{fontSize:15, color:'#fff', fontWeight:'900'}}>Save</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{alignItems:'center', justifyContent:'center', height:40, width:100,marginRight:10, backgroundColor:'rgba(43, 53, 62, 0.55)'}}>
                                                    <Text style={{fontSize:15, color:'#fff', fontWeight:'900'}}>Read More</Text>
                                                </TouchableOpacity>
                                            </View>
                                    </View>
                                    </View>
                                    <View style={{width:350, justifyContent:'flex-end', alignItems:'flex-end', flexDirection:'row', borderBottomEndRadius:25, borderBottomStartRadius:25, backgroundColor:'rgba(0,0,0,0.1)'}}>
                                                <Text style={{color:'#fff', fontWeight:'800', padding:8, paddingTop:0, fontSize:15, fontFamily:'Arial'}}>
                                                on decanchronicles.com
                                                </Text>
                                            </View>
                            </ImageBackground>   


                            <ImageBackground source={{uri:'https://tinyurl.com/y6oxq7wq'}} style={{height:250, margin:20,  width:350 }} imageStyle={{borderRadius:25}}>
                                    <View style={{width: 350, padding:15, borderRadius:25, borderBottomStartRadius:0, backgroundColor:'rgba(0,0,0,0.0)'}}>
                                        <Text style={{fontFamily:'Times New Roman', fontWeight:'500', fontSize:26, color:'#fff'}}>
                                            Cacophony of Birds
                                            </Text>
                                    </View>
                            </ImageBackground>    
                            
                            

                        </ScrollView>
                        </View>
                        </View>
                    </Modal>
			)
	}
}
