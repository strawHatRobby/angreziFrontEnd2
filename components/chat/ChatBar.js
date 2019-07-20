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
import { addQuoteToScreen, addToScreen, incrementProgressBar , showExampleType, getQuote} from './redux/chatScreenActions';


class ChatBarComponent extends Component {
    
    state = {
        modalEnabled: false,
        showExamplesType: false,
        activeIcon: null
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
                    onPress={() => {
                            this.props.onShowModal(true);
                            this.props.onShowNewsModal(true);
                            this.props.onShowVideoModal(false);
                            this.props.onShowExampleType(false);
                            this.setState({
                                activeIcon: 'news'
                            })
                    }} 
                     style={{padding:5, justifyContent:'center', alignItems:'center'}}>
                    <NewsIcon name='news' color={this.state.activeIcon === 'news' ? '#000': '#a5a5a5'} size={40} /> 
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => {
                            this.props.onShowModal(true);
                            this.props.onShowVideoModal(true);
                            this.props.onShowNewsModal(false);
                            this.props.onShowExampleType(false);
                            this.setState({
                                activeIcon: 'video'
                            })
                    }} 
                        style={{padding:5, justifyContent:'center', alignItems:'center'}}>
                        <VideoIcon name='video' size={40} color={this.state.activeIcon === 'video' ? '#000': '#a5a5a5'}/> 
                        </TouchableOpacity>
                        {
                                this.props.showExamplesType && 

                               <ExampleOptions/>
                            }
                        <TouchableOpacity onPress= {()=> {
                            {
                                if(this.props.showExamplesType){
                                    this.props.onShowExampleType(false);
                                }
                                else {
                                    this.props.onShowExampleType(true);
                                }
                            }
                            this.setState({
                            activeIcon: 'example'
                            })}} 
                            style={{padding:5, justifyContent:'center', alignItems:'center'}}>
                        <ExampleIcon name='example' size={40} color={this.state.activeIcon === 'example' && this.state.showExamplesType ? '#000': '#a5a5a5'}/> 
                        </TouchableOpacity>
                        <TouchableOpacity 
                         onPress={() => {
                             this.props.onShowModal(false);
                             this.props.getQuotes();
                             this.props.onShowExampleType(false);
                             
                             this.props.onAddNewContent({ type:'quotes', data:this.props.quotes})
                            this.setState({
                                activeIcon: 'quotes',
                                showExamplesType: false
                            })
                    }}
                        style={{padding:5, justifyContent:'center', alignItems:'center'}}>
                        <QuotesIcon name='quotes' size={40} color={this.state.activeIcon === 'quotes' ? '#000': '#a5a5a5'}/> 
                        </TouchableOpacity>
                        <TouchableOpacity 
                         onPress={() => {
                            this.props.incrementProgress()
                            this.props.onShowModal(false);
                            this.props.onShowExampleType(false);
                            this.setState({
                                activeIcon: 'skip'
                            })
                    }}
                        style={{padding:5, justifyContent:'center', alignItems:'center'}}>
                        <SkipIcon name='skip' size={40} color={this.state.activeIcon === 'skip' ? '#000': '#a5a5a5'}/> 
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
        showExamplesType: store.chatScreen.showExamplesType
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
        getQuotes: () => dispatch(getQuote())
    }
}

export default ChatBar = connect(mapStateToProps, mapDispatchToProps)(ChatBarComponent);

