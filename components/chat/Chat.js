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
    Platform,
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
import {addToScreen, getWordData, showExampleType} from './redux/chatScreenActions';


{/* Chat Components Imported after this line, TODO: move to index.js later */}
import BotQuestions from '../chatQuestions/BotQuestions';
import Sentence from '../chatQuestions/Sentence';
import Synonym from '../chatQuestions/Synonym';
import Definition from '../chatQuestions/Definition';
import Quotes from './Quotes';
import { startConvo } from '../../Tutorial/Initiate';
import { getWord } from './redux/sagas/getWordSaga';

const {height, width} = Dimensions.get('window');

class ChatScreen extends Component {

    static navigationOptions = {
        header: null
    }
    getPresentDate = () => {
        const date = new Date();
        return date.toDateString();
    }

    state = {
        isTyping : true
    }

    botTyping = (type, data, options = [], answer='') =>{
        this.setState({
            isTyping: false
        })
        this.props.onAddNewContent({type, data, options, answer})
    }

    componentDidMount(){ 
        this.props.getWordData('capricious');
        setTimeout(() => {
           this.botTyping('bot','Hey you!');
           this.setState({
            isTyping: false
        })
        }, 1500);

        setTimeout(() => {
            this.botTyping('bot','Welcome to this tutorial');
            this.setState({
             isTyping: false
         })
         }, 2500);
         
        setTimeout(() => {
            this.botTyping('botQuestion','Are you ready to begin?',['Yes','No'], answer=0);
            this.setState({
                isTyping: false
            })
        }, 3500)

        setTimeout(() => {
            // this.props.onAddNewContent({type: 'sentence',  options:['Yes','No'], answer:2})
        }, 1500)
        setTimeout(() => {
            // this.props.onAddNewContent({type: 'synonym',  options:['Ys','No'], answer:2})
        }, 200)
        // setTimeout(() => {
        //     this.props.onAddNewContent({type: 'definition',  options:['Yes','No'], answer:2})
        // }, 1500)
        // setTimeout(() => {
        //     this.props.onAddNewContent({type: 'bot', data: 'Hey Yasharth'})
        // }, 3000); 
       
    } 

	render(){
		return(
			<View style={[styles.container]}>
             <NewsModal/>
                <TitleBar/>
                    <ScrollView contentContainerStyle={{flexGrow:20, marginBottom:5, backgroundColor:'#fff'}}
                    scrollEventThrottle={16}
                    onScroll={
                        () => this.props.onShowExampleType(false)
                    }
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

                        
                       {/* { this.state.showToolTip && <Animated.View style={{zIndex:4, flexDirection:'row', flexWrap:'wrap', position:'absolute', top:this.state.position, left:40, width:200, height:70, backgroundColor:'#f6345d', alignItems:'flex-start', justifyContent:'flex-start', padding:10, borderRadius:10}}>
                            <Text style={{color:'#fff', fontSize:14}}>
                                Press Here to see magic
                                </Text>

                        </Animated.View>} */}
                        {
                            this.state.isTyping ?
                            <Text>typing....</Text>
                            :
                            null
                        }
                            {
                                this.props.chatScreenContent.map((item, index) => {
                                    switch(item.type){
                                        case 'bot':
                                            return <BotView key={index} say={item.data} />
                                        case 'botQuestion':
                                            return <BotQuestions key={index} say={item.data} options={item.options} answer={item.answer}/>
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
        chatScreenContent: store.chatScreen.chatScreenContent,
        showExampleType: store.chatScreen.showExampleType
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddNewContent: (data) => dispatch(addToScreen(data)),
        onShowExampleType: (val) => dispatch(showExampleType(val)),
        getWordData: (dataFor) => dispatch(getWordData(dataFor))
    }
}

const Chat = connect(mapStateToProps, mapDispatchToProps)(ChatScreen);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      zIndex:1,
    paddingTop: Constants.statusBarHeight,
    },
    notBlurred: {
        // ...StyleSheet.absoluteFill,
        top: Constants.statusBarHeight,
      }
  });

  export default Chat;