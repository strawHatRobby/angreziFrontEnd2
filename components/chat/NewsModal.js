import React, { Component } from 'react';
import { StyleSheet, WebView, Platform, Animated, PanResponder, Text,  Dimensions, ImageBackground,Button, ScrollView,  View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NewsIcon from '../../CustomIcon';
import VideoIcon from '../../VideoIcon';
import ExampleIcon from '../../Examples';
import SkipIcon from '../../SkipIcon';
import QuotesIcon from '../../QuotesIcon';
import ChatBar from './ChatBar';
import {showNews, showModal} from './redux/action';
import {connect} from 'react-redux';
import NewsContent from './NewsContent';
import VideoContent from './VideoContent';

import Modal from 'react-native-modalbox';
const {width, height} = Dimensions.get('window');
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
                    isOpen={this.props.showModal}
                    onClosed={(alsef) => this.props.onShowModal(false)}
                    backdrop={true}
                    backdropOpacity={0.51}
                    style={{backgroundColor:'transparent'}}
                    swipeToClose={true}
                    swipeArea={height/2}
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
                                {`Cacophony' in ${this.props.showNewsModal ? 'News': 'Videos'}`}
                            </Text>
                        </View>
                        

                            {this.props.showVideoModal && <VideoContent/>}
                            {this.props.showNewsModal && <NewsContent/>}
                            

                        
                        </Animated.View>
                        </View>
                    </Modal>

			)
	}
}
const mapStateToProps = (store) => {
    return {
        showNewsModal: store.chatBar.showNewsModal,
        showVideoModal: store.chatBar.showVideoModal,
        showModal: store.chatBar.showModal,
        quotes: store.chatScreen.quotes,
        chatScreenContent: store.chatScreen.chatScreenContent
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onShowNewsModal: (show) => dispatch(showNews(show)),
        onShowVideoModal: (show) => dispatch(showVideo(show)),
        onShowModal: (show) => dispatch(showModal(show)),
        onAddQuotes: (quote) => dispatch(quote),
        onAddNewContent: (data) => dispatch(addToScreen(data))
    }
}


const NewsModal = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsModal;