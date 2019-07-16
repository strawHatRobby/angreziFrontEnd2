import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    ImageBackground,
    ScrollView,
    ActivityIndicator,
    Button,
    Dimensions,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Modal
} from 'react-native';
import {Constants} from 'expo'
import BotView from './BotView';
import UserTextBox from './UserTextBox';
import TitleBar from './TitleBar';
import NewsModal from './NewsModal';
import { BlurView } from 'expo-blur';

import ChatBar from './ChatBar';



{/* Chat Components Imported after this line, TODO: move to index.js later */}
import BotQuestions from '../chatQuestions/BotQuestions';

const {height, width} = Dimensions.get('window');

export default class Chat extends Component {
    
    state = {
        chatScreenContent : [   
        ]
    }

    componentDidMount(){ 
        setTimeout(() => {
            this.setState({
               chatScreenContent: [...this.state.chatScreenContent,<BotView say={"Hey Yeasharth"}/> ]
            }) 
        }, 500);
        setTimeout(() => {
            this.setState({
               chatScreenContent: [...this.state.chatScreenContent,<BotQuestions say={"Are you ready ?"} options={["Yes", "No"]}/> ]
            }) 
        }, 1500)
        setTimeout(() => {
            this.setState({
               chatScreenContent: [...this.state.chatScreenContent,<UserTextBox said={"Yes"}/> ]
            }) 
        }, 2000)
    } 
	render(){
		return(
			<View style={[styles.container]}>
             <NewsModal show={this.state.showModal}/>                 
                <TitleBar/>
                    <ScrollView contentContainerStyle={{flexGrow:20, backgroundColor:'#fff'}}>
                            {
                                this.state.chatScreenContent.map((item) => {
                                    return item
                                })
                            }
                    </ScrollView>
                <ChatBar modalEnabled={false}/>
            </View>
			)
	}
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Constants.statusBarHeight,
    },
    notBlurred: {
        ...StyleSheet.absoluteFill,
        top: Constants.statusBarHeight,
      }
  });