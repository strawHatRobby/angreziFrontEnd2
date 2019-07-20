
import React, { Component } from 'react';
import { StyleSheet, Platform, Image, Text, View, TouchableOpacity } from 'react-native';
import {connect } from 'react-redux';
import { userRespondedWith, addToScreen } from '../chat/redux/chatScreenActions';
import UserTextBox from '../chat/UserTextBox';
import { getDate } from '../chat/utils/time';

class SentenceComponent extends Component {
    
    state = {
        options: ['Guileless','Spectacular','Cold','Emotionless'],
        answerSelected: false,
        shouldShowBotImage : this.props.chatScreenContent[this.props.chatScreenContent.length -2] && this.props.chatScreenContent[this.props.chatScreenContent.length -2].type !== 'user' ? false : true
    }
    showImage = () => {
        if(this.state.shouldShowBotImage){
        return (
            <View style={{marginLeft:15}} >
            <Image source={{uri: 'https://cdn-images-1.medium.com/max/1200/0*oz2e-hQtsHOWzoB4.'}} style={{height:40, width:40, borderRadius:20}}/>
            </View>
        )
    }
    }
  
    
	render(){
		return(
            <View>
            {this.showImage()}
			<View style={{ borderRadius:8, borderTopStartRadius:0, margin:10, marginRight:50, marginLeft:10, marginBottom:0, marginTop:this.state.shouldShowBotImage ? 10: 0,backgroundColor:'#E5F6BE'}}>
                            <View style={{padding:10,  paddingLeft:20}}>
                            <Text style={{fontSize:11,flexWrap:'nowrap', fontFamily:Platform.OS === 'ios' ? 'Times New Roman' : 'Roboto', color:'#776666', marginBottom:5}}>{getDate()}</Text>
                                <Text style={{fontSize:18,flexWrap:'wrap',fontFamily:Platform.OS === 'ios' ? 'Times New Roman' : 'Roboto'}}>
                                Which of the following is a Sentence 
for 'Artless'?
                                </Text>
                                </View>

                            
{
    this.state.options.map((item, index) => {
        return (
<View  key={index} style={{padding:5, backgroundColor:'rgba(255,255,255,0.77)'}}>
                        <TouchableOpacity 
                         disabled={this.state.answerSelected ? true : false}
                        onPress={() => {
                            this.props.setUserResponseTo(item);
                            this.props.onAddNewContent({type:'user', data:item});
                            if(this.props.answer === index){
                                this.props.onAddNewContent({type:'bot', data:'that is correct'});
                            }
                            this.setState({
                                answerSelected: true
                            })
                        }}
                        style={{justifyContent:'center', alignItems:'center', borderBottomColor:'#F6DCBE', borderBottomWidth:1, padding:8}}>
                            
                            <Text style={{fontSize:18, color: '#6099E6',flexWrap:'wrap',  fontFamily:Platform.OS === 'ios' ? 'Times New Roman' : 'Roboto'}}>
                                    {item}
                                </Text>
                            
                            </TouchableOpacity>     
                            </View>
        )
    })
}
            </View> 
            </View> 
			)
	}
}

const mapStateToProps = (store) => {
    return   {
      userSelected: store.chatScreen.userSelected,
      chatScreenContent: store.chatScreen.chatScreenContent
      }
  }
  
  const mapDispatchToProps = (dispatch) => {
      return {
          setUserResponseTo: (answer) => dispatch(userRespondedWith(answer)),
          onAddNewContent: (data) => dispatch(addToScreen(data))
      }
  
  }

  export default Sentence = connect(mapStateToProps, mapDispatchToProps)(SentenceComponent);