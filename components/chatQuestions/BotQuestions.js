import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { userRespondedWith, addToScreen } from '../chat/redux/chatScreenActions';
import { connect } from 'react-redux';
import UserTextBox from '../chat/UserTextBox';


class BotQuestionsComponent extends Component {
  
    state = {
        answerSelected: false
    }
  
    getDate = () => {
        let date = new Date();
        date.setSeconds(0);
        date = date.toLocaleTimeString()
        date = date.replace(':00 ',' ')
        return date
    }
	render(){
		return(
            <View style={{margin:15, marginBottom:5, marginTop:0, alignItems:'flex-start'}}>
            <View style={{ borderRadius:8, borderTopStartRadius:0, backgroundColor:'#F6DCBE'}}>
            <View style={{padding:10,  paddingLeft:20}}>
            <Text style={{fontSize:11,flexWrap:'nowrap', fontFamily:'Times New Roman', color:'#776666', marginBottom:5}}>
            {this.getDate()}
            </Text>
                <Text style={{fontSize:18,flexWrap:'wrap',fontFamily:'Times New Roman'}}>
                    {this.props.say}
                </Text>
                </View>
               {
                   this.props.options.map((item, index) => {
                       return (
                        <View key={index} style={{padding:5, paddingBottom:0, backgroundColor:'rgba(255,255,255,0.77)'}}>
                        <TouchableOpacity
                         disabled={this.state.answerSelected ? true : false}
                            onPress={() => {
                            this.props.setUserResponseTo(item);
                            this.props.onAddNewContent({type:'user', data: item})
                            this.setState({
                                answerSelected: true
                            })
                        }}
                         style={{justifyContent:'center', alignItems:'center',padding:8}}>
                            
                            <Text style={{fontSize:18, color: '#6099E6',flexWrap:'wrap',  fontFamily:'Times New Roman'}}>
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

export default BotQuestion = connect(mapStateToProps,mapDispatchToProps)(BotQuestionsComponent);