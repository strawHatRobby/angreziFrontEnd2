import React, { Component } from 'react';
import { StyleSheet, WebView, Platform, Animated, PanResponder, Text, Modal, Dimensions, ImageBackground,Button, ScrollView,  View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NewsIcon from '../../CustomIcon';
import VideoIcon from '../../VideoIcon';
import ExampleIcon from '../../Examples';
import SkipIcon from '../../SkipIcon';
import QuotesIcon from '../../QuotesIcon';
import ChatBar from './ChatBar';
import {showVideo, showModal} from './redux/action';
import {connect} from 'react-redux';



class Video extends Component {
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
                    visible={this.props.showVideoModal}
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
                                'Cacophony' in Video
                            </Text>
                        </View>
                        <ScrollView
                        horizontal={true} contentContainerStyle={{flexGrow:1, alignItems:'center', justifyContent:'center', backgroundColor: '#fff', flexDirection:'row', flexWrap:'wrap'}}
                        >
  


                           
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
        showVideoModal: state.showVideoModal,
        showModal: state.showModal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onShowVideoModal: () => dispatch(showVideo()),
        onShowModal: () => dispatch(showModal())
    }
}


const VideoModal = connect(mapStateToProps, mapDispatchToProps)(Video);

export default VideoModal;