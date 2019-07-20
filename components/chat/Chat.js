import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    ImageBackground,
    ScrollView,
    ActivityIndicator,
    Button,
    Animated,
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
import Sentence from '../chatQuestions/Sentence';
import Synonym from '../chatQuestions/Synonym';
import Definition from '../chatQuestions/Definition';
import Quotes from './Quotes';
const {height, width} = Dimensions.get('window');

class ChatScreen extends Component {
    
    state = {
        position: new Animated.Value(0),
        showToolTip: false
    }
    onComponentDidMount = () => {
        this.springAction()
    }
    springAction = () => {
        Animated.timing(this.state.position, {
            toValue:50,
            duration:300
        }).start(() => {
            Animated.timing(this.state.position, {
                toValue:0,
                duration:300
            }).start(() => this.springAction);
        });
    }
    moveUp = {
        top: this.state.position
    }
    getPresentDate = () => {
        const date = new Date();
        return date.toDateString();
    }
    componentDidMount(){ 
        setTimeout(() => {
            this.props.onAddNewContent({type: 'bot', data: 'Hey Yasharth'})
        }, 500);

        // setTimeout(() => {
        //     this.props.onAddNewContent({type: 'botQuestion', data: 'Ready to Play?', options:['Yes','No']})
        // }, 1000)

        // setTimeout(() => {
        //     this.props.onAddNewContent({type: 'definition',  options:['Yes','No'], answer:2})
        // }, 1500)
        // setTimeout(() => {
        //     this.props.onAddNewContent({type: 'synonym',  options:['Ys','No'], answer:2})
        // }, 2000)
        // setTimeout(() => {
        //     this.props.onAddNewContent({type: 'sentence',  options:['Yes','No'], answer:2})
        // }, 1500)
       
    } 
	render(){
		return(
			<View style={[styles.container]}>
             <NewsModal/>
                <TitleBar/>
                    <ScrollView contentContainerStyle={{flexGrow:20, backgroundColor:'#fff'}}
                    ref={ref => this.scrollView = ref}
                    onContentSizeChange={(contentWidth, contentHeight)=>{        
                        this.scrollView.scrollToEnd({animated: true});
                    }}
                    >
                        <View style={{width:Dimensions.get('window').width, height:30, justifyContent:'center', alignItems:'center', backgroundColor:'transparent', marginTop:5}}>
                        <View style={{flexDirection:'row', flexWrap:'wrap', width:115, height:30, backgroundColor:'#f1f1f1', justifyContent:'center', alignItems:'center', borderRadius:2, padding:2}}>
                           <Text style={{fontSize:12, color:'#000'}}> {this.getPresentDate()}</Text>
                        </View>
                        </View>

                        
                       { this.state.showToolTip && <Animated.View style={{zIndex:4, flexDirection:'row', flexWrap:'wrap', position:'absolute', top:this.state.position, left:40, width:200, height:70, backgroundColor:'#f6345d', alignItems:'flex-start', justifyContent:'flex-start', padding:10, borderRadius:10}}>
                            <Text style={{color:'#fff', fontSize:14}}>
                                Press Here to see magic
                                </Text>

                        </Animated.View>}

                            {
                                this.props.chatScreenContent.map((item, index) => {
                                    switch(item.type){
                                        case 'bot':
                                            return <BotView key={index} say={item.data} />
                                        case 'botQuestion':
                                            return <BotQuestions key={index} say={item.data} options={item.options}/>
                                        case 'user':
                                                return <UserTextBox key={index} said={item.data}/>
                                        case 'definition':
                                                return <Definition key={index} answer={item.answer} options={item.options}/>
                                        case 'sentence':
                                            return <Sentence key={index} answer={item.answer} options={item.options}/>
                                        case 'synonym':
                                            return <Synonym key={index} answer={item.answer} options={item.options}/>
                                        case 'quotes':
                                                return <Quotes key={index} saying={item.data}/>
                                        default:
                                            return <BotView key={index} say={"Not Working"}/>
                                    }
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