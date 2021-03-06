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
import { addToScreen, setTutorialModeTo, setActiveIconTo } from './redux/chatScreenActions';
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
                    onClosed={() => {this.props.onShowModal(false)
                        switch(this.props.tutorialMode){
                        case 'news':
                                this.props.onAddNewContent({type:'bot', data:'now click on the play icon next to news to see relevant videos'});
                                this.props.setActiveIconTo('video');
                                this.props.setTutorialModeTo('video');
                            break;
                        case 'video':
                            this.props.onAddNewContent({type:'bot', data:'now click on the last icon to move to the next word'});
                            this.props.setActiveIconTo('skip');
                            this.props.setTutorialModeTo('over');
                            break;
                        default:
                                this.props.setActiveIconTo('all')

                                
                        }
                    }}
                    backdrop={true}
                    backdropOpacity={0.51}
                    style={{backgroundColor:'transparent', zIndex:2}}
                    swipeToClose={true}
                    swipeArea={(height/2)+100}
                    useNativeDriver={true}
                    backButtonClose={true}
                    >

           
                        <View style={{flexDirection:'column', flexGrow:1, justifyContent:'flex-end', backgroundColor:'rgba(255,255,255,0.5)'}}>
                        <Animated.View style={[{justifyContent:'center', alignItems: 'center', height: Dimensions.get('window').height/1.8, backgroundColor:'#fff',
                                    borderTopStartRadius:0, borderTopEndRadius:0},  this.state.position.getLayout()]}
                                    
                                    >
<ChatBar modalEnabled={true}/>

                <TouchableOpacity onPress={() => {this.setState({showModal: false})}} style={{width:70, marginTop:15, borderBottomColor:'#D9D6D6', borderBottomWidth:1}}/>
                        <View
                        style={{paddingTop:10, borderBottomColor:'##707070', borderBottomWidth:1, paddingBottom:5}}>
                            <Text style={{fontFamily:Platform.OS === 'ios' ? 'Times New Roman' : 'Roboto', fontWeight:'bold', fontSize:30}}>
                                {this.props.currentWord && `'${this.props.currentWord}' in ${this.props.showNewsModal ? 'News': 'Videos'}`}
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
        chatScreenContent: store.chatScreen.chatScreenContent,
        currentWord: store.chatScreen.currentWord,
        tutorialMode: store.chatScreen.tutorialMode,
        activeIcon: store.chatScreen.activeIcon
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onShowNewsModal: (show) => dispatch(showNews(show)),
        onShowVideoModal: (show) => dispatch(showVideo(show)),
        onShowModal: (show) => dispatch(showModal(show)),
        onAddQuotes: (quote) => dispatch(quote),
        onAddNewContent: (data) => dispatch(addToScreen(data)),
        setTutorialModeTo: (val) => dispatch(setTutorialModeTo(val)),
        setActiveIconTo: (val) => dispatch(setActiveIconTo(val))
    }
}


const NewsModal = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsModal;