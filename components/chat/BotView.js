import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import Quotes from './Quotes';
import Synonym from '../chatQuestions/Synonym';
import Sentence from '../chatQuestions/Sentence';
import Definition from '../chatQuestions/Definition';
import BotQuestions from '../chatQuestions/BotQuestions';
import { getDate } from './utils/time';
import { connect } from 'react-redux';


class BotBox extends Component {
    
    state = {
        shouldShowBotImage : this.props.chatScreenContent[this.props.chatScreenContent.length -2] && this.props.chatScreenContent[this.props.chatScreenContent.length -2].type !== 'user' ? false : true
    }
  
    
	render(){
		return(

				 <View style={{margin:this.state.shouldShowBotImage ? 15: 0, marginLeft:15, marginBottom:0,  alignItems:'flex-start'}}>
                    {this.state.shouldShowBotImage && <Image source={{uri: 'https://cdn-images-1.medium.com/max/1200/0*oz2e-hQtsHOWzoB4.'}} style={{height:40, width:40, borderRadius:20}}/>}
                    
                        <View style={{ padding:10, paddingLeft:20, margin:10,marginLeft:0, marginBottom:0, borderRadius:8, borderTopStartRadius:0, backgroundColor:'#F6DCBE'}}>
                        <Text style={{fontSize:11,flexWrap:'nowrap', fontFamily:'Times New Roman', color:'#776666', marginBottom:0}}>{getDate()}</Text>
                        <Text style={{fontSize:18,flexWrap:'wrap',fontFamily:'Times New Roman'}}>
                        {this.props.say}
                        </Text>
                        </View>

          


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

    }
}

export default BotView = connect(mapStateToProps, mapDispatchToProps)(BotBox);