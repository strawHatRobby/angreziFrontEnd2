
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {connect } from 'react-redux';
import { userRespondedWith, addToScreen } from '../chat/redux/chatScreenActions';
import UserTextBox from '../chat/UserTextBox';
import { getDate } from '../chat/utils/time';

class DefinitionComponent extends Component {
    
    state = {
        options: ['Guilels','Spectacular','Cold','Emotionless'],
        answerSelected: false
                            
    }
  
    
	render(){
		return(
			<View style={{ borderRadius:8, borderTopStartRadius:0, margin:10, marginRight:50, marginBottom:0, backgroundColor:'#EFEFEF'}}>
                            <View style={{padding:10,  paddingLeft:20}}>
                            <Text style={{fontSize:11,flexWrap:'nowrap', fontFamily:'Times New Roman', color:'#776666', marginBottom:5}}>
                            {getDate()}
                                </Text>
                                <Text style={{fontSize:18,flexWrap:'wrap',fontFamily:'Times New Roman'}}>
                                Which of the following is a synonym 
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
                            this.setState({
                                answerSelected: true
                            })
                        }}
                        style={{justifyContent:'center', alignItems:'center', borderBottomColor:'#F6DCBE', borderBottomWidth:1, padding:8}}>
                            
                            <Text style={{fontSize:18, color: '#6099E6',flexWrap:'wrap',  fontFamily:'Times New Roman'}}>
                                    {item}
                                </Text>
                            
                            </TouchableOpacity>     
                            </View>
        )
    })
}
                        

                                

                            

                            

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

  export default Definition = connect(mapStateToProps, mapDispatchToProps)(DefinitionComponent);