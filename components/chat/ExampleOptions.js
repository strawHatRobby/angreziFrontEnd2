import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import UserTextBox from './UserTextBox';
import { userRespondedWith, addToScreen, showExampleType } from './redux/chatScreenActions';
import { showModal } from './redux/action';


class ExampleOptionsComponent extends Component {
    
    state = {
        
    }
  
    
	render(){
		return(
            <View style={{position:'absolute'}} >
            <View style={{ width: 0,
height: 0,
top:-10,
left: 175,
zIndex:1,
backgroundColor: 'transparent',
borderStyle: 'solid',
borderLeftWidth: 8,
borderRightWidth: 8,
borderBottomWidth: 16,
shadowOffset:{  width: -1,  height: -0.5  },
shadowColor: '#000',
shadowOpacity: 0.2,
transform: [
{rotate: '180deg'}
],
borderLeftColor: 'transparent',
borderRightColor: 'transparent',
borderBottomColor: 'white'}}/>

           <View style={{ position:'absolute', zIndex:0, 
           shadowOffset:{  width: -1,  height: -1  },
           shadowColor: '#000',
           shadowOpacity: 0.75,
           top:-110, left:90, width:180, height:100, backgroundColor:'#fff', borderRadius:10}}>

{
    ['Use it in a sentence', 'Synonyms', 'Explain it more'].map((option, index) => {
        return (
        <View key={index} style={{flexDirection:'row', justifyContent:'center', alignItems:'center', flexWrap:'nowrap', borderBottomColor:'#E3E3E3', borderBottomWidth:1}}>
        <TouchableOpacity 
        onPress={() => {
            this.props.setUserResponseTo(option);
            this.props.onAddNewContent({type:'user', data:option})
            this.props.onShowExampleType(false),
            this.props.onShowModal(false)
        }}
        style={{ justifyContent:'center', alignItems:'center', padding:5}}>
<Text style={{color:'#4F83B6', fontWeight:'700', fontSize:15}}>
            {option}
        </Text>
        </TouchableOpacity>
        </View>)
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
      chatScreenContent: store.chatScreen.chatScreenContent,
      showExamplesType: store.chatScreen.showExamplesType,
      showModal: store.chatBar.showModal,
      }
  }
  
  const mapDispatchToProps = (dispatch) => {
      return {
          setUserResponseTo: (answer) => dispatch(userRespondedWith(answer)),
          onAddNewContent: (data) => dispatch(addToScreen(data)),
          onShowExampleType: (val) => dispatch(showExampleType(val)),
          onShowModal: (show) => dispatch(showModal(show)),
      }
  
  }

export default ExampleOptions = connect(mapStateToProps,mapDispatchToProps)(ExampleOptionsComponent);