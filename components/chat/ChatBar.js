import React, { Component } from 'react';
import { StyleSheet,Dimensions,  Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NewsIcon from '../../CustomIcon';
import VideoIcon from '../../VideoIcon';
import ExampleIcon from '../../Examples';
import SkipIcon from '../../SkipIcon';
import QuotesIcon from '../../QuotesIcon';
import ExampleOptions from './ExampleOptions';
import { connect } from 'react-redux';
import { showNews, showVideo, showModal } from './redux/action';

import Quotes from './Quotes';
import { addQuoteToScreen, removeQuote, addToScreen, incrementProgressBar, showExampleType, getQuote, getWordData, setTutorialModeTo, setActiveIconTo } from './redux/chatScreenActions';



class ChatBarComponent extends Component {
    
    state = {
        modalEnabled: false,
        showExamplesType: false,
    }
  
    
	render(){
		return(
            <View style={[{ 
                backgroundColor:'#fff', borderTopEndRadius:10, borderTopStartRadius:10,
                shadowOffset:{  width: -1,  height: -0.5  },
                shadowColor: '#a5a5a5',
                shadowOpacity: 0.25,
                justifyContent:'space-between',
                flexDirection:'row',
                flexWrap:'nowrap',
                padding:5,
                paddingBottom:2,
                paddingTop:2
            
                }, this.props.modalEnabled ? {
                    position:'absolute',
                    top:-55,
                    left:0,
                    zIndex:3,
                borderBottomColor:'#a5a5a5',
                borderBottomWidth:0.5,
                width: Dimensions.get('window').width} : {}]}>
                    <TouchableOpacity 
                    disabled={(this.props.activeIcon !== 'news' && this.props.activeIcon !== 'all') ? true : false }
                    onPress={() => {
                            this.props.onShowModal(true);
                            this.props.onShowNewsModal(true);
                            this.props.onShowVideoModal(false);
                            this.props.onShowExampleType(false);
                            this.props.setActiveIconTo('news');
                        }
                    } 
                     style={{padding:5, justifyContent:'center', alignItems:'center'}}>
                    <NewsIcon name='news' color={this.props.activeIcon === 'news' || this.props.activeIcon === 'all'? '#000': '#a5a5a5'} size={40} /> 
                        </TouchableOpacity>
                        <TouchableOpacity 
                        disabled={(this.props.activeIcon !== 'video' && this.props.activeIcon !== 'all') ? true : false }
                        onPress={() => {
                            this.props.onShowModal(true);
                            this.props.onShowVideoModal(true);
                            this.props.onShowNewsModal(false);
                            this.props.onShowExampleType(false);
                            this.props.setActiveIconTo('video');
                    }} 
                        style={{padding:5, justifyContent:'center', alignItems:'center'}}>
                        <VideoIcon name='video' size={40} color={this.props.activeIcon === 'video' || this.props.activeIcon === 'all' ? '#000': '#a5a5a5'}/> 
                        </TouchableOpacity>
                        {
                                this.props.showExamplesType && 

                               <ExampleOptions/>
                            }
                        <TouchableOpacity 
                        disabled={(this.props.activeIcon !== 'example' && this.props.activeIcon !== 'all') ? true : false }
                        onPress= {()=> {
                            {
                                if(this.props.showExamplesType){
                                    this.props.onShowExampleType(false);
                                }
                                else {
                                    this.props.onShowExampleType(true);
                                }
                            }
                           
                        }} 
                            style={{padding:5, justifyContent:'center', alignItems:'center'}}>
                        <ExampleIcon name='example' size={40} color={this.props.activeIcon === 'example' || this.props.activeIcon === 'all'  ? '#000': '#a5a5a5'}/> 
                        </TouchableOpacity>
                        <TouchableOpacity 
                        disabled={(this.props.activeIcon !== 'quotes' && this.props.activeIcon !== 'all') ? true : false }
                         onPress={() => {
                             this.props.onShowModal(false);
                             this.props.onShowExampleType(false);
                             this.props.onAddNewContent({type:'quotes', data: this.props.currentWordData})
                             this.props.onRemoveQuotes();
                             this.props.setActiveIconTo('quotes');
                            this.setState({
                                showExamplesType: false
                            })
                            this.props.setTutorialModeTo('news');
                            console.log(this.props.tutorialMode)
                            if (this.props.tutorialMode === null){
                                this.props.setTutorialModeTo('news');
                                this.props.onAddNewContent({type:'bot', data:`now click on the first icon, the globe icon to find news on ${this.props.currentWordData.word}`});
                                this.props.setActiveIconTo('news');

                            }
                    }}
                        style={{padding:5, justifyContent:'center', alignItems:'center'}}>
                        <QuotesIcon name='quotes' size={40} color={this.props.activeIcon === 'quotes' || this.props.activeIcon === 'all' ? '#000': '#a5a5a5'}/> 
                        </TouchableOpacity>
                        <TouchableOpacity 
                       disabled={(this.props.activeIcon !== 'skip' && this.props.activeIcon !== 'all') ? true : false }
                         onPress={() => {
                            this.props.incrementProgress()
                            this.props.onShowModal(false);
                            this.props.onShowExampleType(false);
                            x = ['capricious', 'alacrity'];
                            x = x[Math.floor(Math.random() * 2)]
                            this.props.getWord(x)
                            this.props.setActiveIconTo('all');
                            
                    }}
                        style={{padding:5, justifyContent:'center', alignItems:'center'}}>
                        <SkipIcon name='skip' size={40} color={this.props.activeIcon === 'skip' || this.props.activeIcon === 'all' ? '#000': '#a5a5a5'}/> 
                        </TouchableOpacity>
            
            </View>
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
        showExamplesType: store.chatScreen.showExamplesType,
        currentWordData: store.chatScreen.wordData,
        tutorialMode: store.chatScreen.tutorialMode,
        activeIcon: store.chatScreen.activeIcon
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onShowNewsModal: (show) => dispatch(showNews(show)),
        onShowVideoModal: (show) => dispatch(showVideo(show)),
        onShowModal: (show) => dispatch(showModal(show)),
        onAddQuotes: (quote) => dispatch(addQuoteToScreen(quote)),
        onAddNewContent: (data) => dispatch(addToScreen(data)),
        incrementProgress: () => dispatch(incrementProgressBar()),
        onShowExampleType: (val) => dispatch(showExampleType(val)),
        getQuotes: () => dispatch(getQuote()),
        getWord: (val) => dispatch(getWordData(val)),
        onRemoveQuotes: () => dispatch(removeQuote()),
        setTutorialModeTo: (val) => dispatch(setTutorialModeTo(val)),
        setActiveIconTo: (val) => dispatch(setActiveIconTo(val))

    }
}

export default ChatBar = connect(mapStateToProps, mapDispatchToProps)(ChatBarComponent);

