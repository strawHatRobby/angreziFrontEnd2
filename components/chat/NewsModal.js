import React, { Component } from 'react';
import { StyleSheet, WebView, Platform, Animated, PanResponder, Text, Modal, Dimensions, ImageBackground,Button, ScrollView,  View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NewsIcon from '../../CustomIcon';
import VideoIcon from '../../VideoIcon';
import ExampleIcon from '../../Examples';
import SkipIcon from '../../SkipIcon';
import QuotesIcon from '../../QuotesIcon';
import ChatBar from './ChatBar';
import showNews from './redux/action';
import {connect} from 'react-redux';



class News extends Component {
    componentDidMount(){

    }
    position = new Animated.ValueXY();
    _swipeDirection = null
    panResponder = PanResponder.create({
        
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gestureState) => {
           
            const height = Dimensions.get('window').height/2;
           console.log(gestureState);
           this.position.setValue({ x: 0, y: gestureState.dy })
           if(gestureState.dy > 250){
               this.setState({showModal: false})
           }
          
        },
        onPanResponderRelease: (evt, gestureState) => {
            if(gestureState.vx === 0 && gestureState.dy){
                this.position.setValue({ x: 0, y: 0 })
            }

           
        } 
    })
    
    state = {
        showModal: false,
        panResponder: this.panResponder,
        position: this.position
    }
  
    
	render(){
		return(
            
			 <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.props.showNewsModal}
                    onRequestClose={() => this.setState({showModal:false})}

                    >

           
                        <View style={{flexDirection:'column', flexGrow:1, justifyContent:'flex-end', backgroundColor:'rgba(255,255,255,0.5)'}}>
                        <Animated.View style={[{justifyContent:'center', alignItems: 'center', height: Dimensions.get('window').height/1.8, backgroundColor:'#fff',
                                    borderTopStartRadius:0, borderTopEndRadius:0},  this.state.position.getLayout()]}
                                    
                                    >
<ChatBar modalEnabled={true}/>

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
         source={{uri: 'https://www.youtube.com/embed/HdPzOWlLrbE?start=225&end=268&cc_load_policy=1&loop=1' }}
 />

</View>
                            
                            

                        </ScrollView>
                        </Animated.View>
                        </View>
                    </Modal>

			)
	}
}

const mapStateToProps = (state) => {
    return {
        showNewsModal: state.showNewsModal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onShowNewsModal: () => dispatch(showNews())
    }
}

const NewsModal = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsModal;