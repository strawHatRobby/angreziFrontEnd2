import React, { Component } from 'react';
import { StyleSheet, WebView, Platform, Animated, PanResponder, Text, Modal, Dimensions, ImageBackground,Button, ScrollView,  View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NewsIcon from '../../CustomIcon';
import VideoIcon from '../../VideoIcon';
import ExampleIcon from '../../Examples';
import SkipIcon from '../../SkipIcon';
import QuotesIcon from '../../QuotesIcon';


export default class NewsModal extends Component {
    position = new Animated.ValueXY();
    _swipeDirection = null
    panResponder = PanResponder.create({
        
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gestureState) => {
            checkSwipeDirection = (gestureState) => {
                if( 
                    (Math.abs(gestureState.dx) > Math.abs(gestureState.dy * 3) ) &&
                    (Math.abs(gestureState.vx) > Math.abs(gestureState.vy * 3) )
                ) {
                    this._swipeDirection = "horizontal";
                    console.log("Horizontal");
                } else {
                    this._swipeDirection = "vertical";
                    console.log("Vertical")
                }
            }
            canMove = () => {
                if(this._swipeDirection === "horizontal") {
                    console.log("horizontal");
                    return true;
                } else {
                    console.log("vertical");
                    return false;
                }
            }
            if(!this._swipeDirection) checkSwipeDirection(gestureState);
            const height = Dimensions.get('window').height/2;
           console.log(gestureState);
           this.position.setValue({ x: 0, y: gestureState.dy })
           if(gestureState.dy > 250){
               this.setState({showModal: false})
           }
        },
        onPanResponderRelease: (evt, gestureState) => {
            
           this._swipeDirection = null
        } 
    })
    
    state = {
        showModal: true,
        panResponder: this.panResponder,
        position: this.position
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
                        <Animated.View style={[{justifyContent:'center', alignItems: 'center', height: Dimensions.get('window').height/1.8, backgroundColor:'#fff',
                                    borderTopStartRadius:0, borderTopEndRadius:0},  this.state.position.getLayout()]}
                                    {...this.state.panResponder.panHandlers}
                                    >
                        {/* <TouchableOpacity style={{justifyContent:'center', alignItems:'center', position:'absolute', top:-10, right:0, height:25, width:25, borderRadius:25, borderColor:'#a5a5a5', borderWidth:1, backgroundColor:'#f00'}} onPress={() => {this.setState({showModal:false})}}>
                            <Text style={{fontSize:15, fontWeight:'bold', color:'#fff'}}>
                                    x
                                </Text>
                            </TouchableOpacity> */}


                            <View style={{flexGrow:10,
            position:'absolute',
            top:-55,
            borderBottomColor:'#a5a5a5',
            borderBottomWidth:0.5,
            left:0,
    backgroundColor:'#fff', borderTopEndRadius:10, borderTopStartRadius:10,
    shadowOffset:{  width: -1,  height: -0.9  },
    shadowColor: '#a5a5a5',
    shadowOpacity: 0.25,
    justifyContent:'space-between',
    flexDirection:'row',
    flexWrap:'nowrap',
    padding:5,
    paddingBottom:2,
    paddingTop:2,
    width: Dimensions.get('window').width

    }}>
        <TouchableOpacity style={{padding:5, justifyContent:'center', alignItems:'center'}}>
        <NewsIcon name='news' color={'#000'} size={40} /> 
            </TouchableOpacity>
            <TouchableOpacity style={{padding:5, justifyContent:'center', alignItems:'center'}}>
            <VideoIcon name='video' size={40} color={'rgba(165, 165, 165, 0.5)'}/> 
            </TouchableOpacity>
            <TouchableOpacity style={{padding:5, justifyContent:'center', alignItems:'center'}}>
            <ExampleIcon name='example' size={40} color={'rgba(165, 165, 165, 0.5)'}/> 
            </TouchableOpacity>
            <TouchableOpacity style={{padding:5, justifyContent:'center', alignItems:'center'}}>
            <QuotesIcon name='quotes' size={40} color={'rgba(165, 165, 165, 0.5)'}/> 
            </TouchableOpacity>
            <TouchableOpacity style={{padding:5, justifyContent:'center', alignItems:'center'}}>
            <SkipIcon name='skip' size={40} color={'rgba(165, 165, 165, 0.5)'}/> 
            </TouchableOpacity>

</View>
                <TouchableOpacity onPress={() => {this.setState({showModal: false})}} style={{width:70, marginTop:15, borderBottomColor:'#D9D6D6', borderBottomWidth:1}}/>
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


                           
        <View style={{height:250, margin:20, width:350, borderRadius:50}}>
 
 <WebView
         style={ { overflow: 'hidden',  height:250, borderRadius:25}}
         javaScriptEnabled={true}
         domStorageEnabled={true}
         source={{uri: 'https://www.youtube.com/embed/dFKhWe2bBkM' }}
 />

</View>
                            
                            

                        </ScrollView>
                        </Animated.View>
                        </View>
                    </Modal>

			)
	}
}
