import React, { Component } from 'react';
import { StyleSheet, Text, Platform, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import UserTextBox from './UserTextBox';
import { userRespondedWith, increaseTouchCounter, resetTouchCounter, removeSynonym, removeSentence, addToScreen, showExampleType, setTutorialModeTo, setActiveIconTo } from './redux/chatScreenActions';
import { showModal } from './redux/action';



class ExampleOptionsComponent extends Component {
    
    state = {
        touched: 0
    }
  
    delayedAnswer = () => {
        setTimeout(() => {this.props.onAddNewContent({type:'bot', data:`Your word is ${this.props.word}`})},2000)
    }
    
	render(){
		return(
            <TouchableOpacity style={{position:'absolute', zIndex:20}} >
            <View onPress={() => {}} style={{ width: 0,
height: 0,
top:-10,
left: 175,
zIndex:10,
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

           <View style={{ position:'absolute', 
           shadowOffset:{  width: -1,  height: -1  },
           shadowColor: '#000',
           shadowOpacity: 0.75,
           top:0, left:0, width:180, height:100, backgroundColor:'#fff', borderRadius:10}}>

{
    ['Use it in a sentence', 'Synonyms', 'Explain it more'].map((option, index) => {
        return (
        <View key={index} style={{flexDirection:'row', justifyContent:'center', alignItems:'center', flexWrap:'nowrap', borderBottomColor:'#E3E3E3', borderBottomWidth:1}}>
        <TouchableOpacity 
        onPress={() => {
           this.props.increaseCounter();
            console.log('touched value is ' + this.props.touchedCount);
            this.props.setUserResponseTo(option);
            this.props.onAddNewContent({type:'user', data:option})
            // this.delayedAnswer();
            this.props.onShowExampleType(false),
            this.props.onShowModal(false)
            
                switch(index){
                    case 0:
                        this.props.onAddNewContent({type:'bot', data:this.props.wordData.sentences[0]});
                        this.props.onRemoveSentence()
                        break;
                    case 1:
                            setTimeout(() => {this.props.onAddNewContent({type:'bot', data:this.props.wordData.synonyms[0]})},2000)
                            break;
                    case 2: 
                    setTimeout(() => {this.props.onAddNewContent({type:'bot', data:this.props.wordData.description})},2000) 
                    break;
                    default:
                        return null
                        break;
                }
                
                
                if(this.props.touchedCount >= 2)  {

                    setTimeout(() => {this.props.onAddNewContent({type:'bot', data:'Cool'});
                    this.props.onAddNewContent({type:'bot', data:'Now click on the quotes icon in the below bar'});
                    this.props.setActiveIconTo('quotes');
                    this.props.resetTouchCounter()
                },3000)
                }
                  
            
            
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
</TouchableOpacity>
			)
	}
}



const mapStateToProps = (store) => {
    return   {
      userSelected: store.chatScreen.userSelected,
      chatScreenContent: store.chatScreen.chatScreenContent,
      showExamplesType: store.chatScreen.showExamplesType,
      showModal: store.chatBar.showModal,
      word: store.chatScreen.currentWord,
      wordData: store.chatScreen.wordData,
      touchedCount: store.chatScreen.exampleCounter,
      inTutorial: store.chatScreen.inTutorial,
      activeIcon: store.chatScreen.activeIcon
      }
  }
  
  const mapDispatchToProps = (dispatch) => {
      return {
          setUserResponseTo: (answer) => dispatch(userRespondedWith(answer)),
          onAddNewContent: (data) => dispatch(addToScreen(data)),
          onShowExampleType: (val) => dispatch(showExampleType(val)),
          onShowModal: (show) => dispatch(showModal(show)),
          onRemoveSentence: () => dispatch(removeSentence()),
          onRemoveSynonym: () => dispatch(removeSynonym()),
          increaseCounter: () => dispatch(increaseTouchCounter()),
          setTutorialModeTo: (val) => dispatch(setTutorialModeTo(val)),
          setActiveIconTo: (val) => dispatch(setActiveIconTo(val)),
          resetTouchCounter: () => dispatch(resetTouchCounter())
      }
  
  }

export default ExampleOptions = connect(mapStateToProps,mapDispatchToProps)(ExampleOptionsComponent);