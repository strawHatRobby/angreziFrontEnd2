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
import VideoModal from './VideoModal';
import { BlurView } from 'expo-blur';
import {connect} from 'react-redux';
import ChatBar from './ChatBar';
import {addToScreen} from './redux/chatScreenActions';


{/* Chat Components Imported after this line, TODO: move to index.js later */}
import BotQuestions from '../chatQuestions/BotQuestions';


const {height, width} = Dimensions.get('window');

class ChatScreen extends Component {
    
    state = {
        
    }

    componentDidMount(){ 
        setTimeout(() => {
            this.props.onAddNewContent(<BotView say={"Hey Yasharth ?"}/>)
        }, 500);
        setTimeout(() => {
            this.props.onAddNewContent(<BotQuestions say={"Are you ready ?"} options={["Yes", "No"]}/>)
        }, 1500)
        setTimeout(() => {
                this.props.onAddNewContent(<UserTextBox said={"Yes"}/> )
        }, 2000)
    } 
	render(){
		return(
			<View style={[styles.container]}>
             <NewsModal/>
                <TitleBar/>
                    <ScrollView contentContainerStyle={{flexGrow:20, backgroundColor:'#fff'}}>
                            {
                                this.props.chatScreenContent.map((item) => {
                                    return item
                                })
                            }
                    </ScrollView>
                <ChatBar modalEnabled={false}/>
            </View>
			)
	}
}

const mapStateToProps = (store) => {
    return {
        chatScreenContent: store.chatScreen.chatScreenContent
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddNewContent: (data) => dispatch(addToScreen(data))
    }
}

const Chat = connect(mapStateToProps, mapDispatchToProps)(ChatScreen);

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

  export default Chat;