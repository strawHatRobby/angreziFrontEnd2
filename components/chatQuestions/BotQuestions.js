import React, { Component } from 'react';
import { StyleSheet, Text, Image,Platform, View, TouchableOpacity } from 'react-native';
import { userRespondedWith, addToScreen, incrementProgressBar } from '../chat/redux/chatScreenActions';
import { connect } from 'react-redux';
import UserTextBox from '../chat/UserTextBox';



class BotQuestionsComponent extends Component {
  
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
  
    getDate = () => {
        let date = new Date();
        date.setSeconds(0);
        date = date.toLocaleTimeString()
        date = date.replace(':00 ',' ')
        return date
    }
	render(){
		return(
            <View style={{marginTop:5}}>
            {this.showImage()}
            <View style={{margin:15, marginBottom:5, marginTop:0, alignItems:'flex-start'}}>
            <View style={{ borderRadius:8, borderTopStartRadius:0, backgroundColor:'#F6DCBE'}}>
            <View style={{padding:10,  paddingLeft:20}}>
            <Text style={{fontSize:11,flexWrap:'nowrap', fontFamily:Platform.OS === 'ios' ? 'Times New Roman' : 'Roboto', color:'#776666', marginBottom:5}}>
            {this.getDate()}
            </Text>
                <Text style={{fontSize:18,flexWrap:'wrap',fontFamily:Platform.OS === 'ios' ? 'Times New Roman' : 'Roboto'}}>
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
                            console.log(this.props.answer)
                            if(this.props.answer === index){
                                setTimeout(() => this.props.onAddNewContent({type:'bot', data:'Let us begin'}),2000)
                                setTimeout(() => this.props.onAddNewContent({type:'bot', data:"This app will help you new words in ways you in new exciting ways"}),3000)
                                setTimeout(() => {this.props.onAddNewContent({type:'bot', data:'Lets give it a shot'}); this.props.increaseProgressBar();},4500);
                                setTimeout(() => {this.props.onAddNewContent({type:'bot', data:'Lets start with the word'})},5000);
                                setTimeout(() => this.props.onAddNewContent({type:'bot', data:'Capricious'}),5500)
                                setTimeout(() => this.props.onAddNewContent({type:'bot', data:'Capricious means changing unpredicatably, like moodswings'}),6500);
                                setTimeout(() => this.props.onAddNewContent({type:'bot', data:'To learn more about caprcious click on the middle button in the bottom bar'}),8500);
                                this.props.increaseProgressBar();
                            }else {
                                setTimeout(() => this.props.onAddNewContent({type:'botQuestion', data:'Let me know when ready', options:['Ready'], answer:0}));
                            }
                                
                            
                            
                            this.setState({
                                answerSelected: true
                            })
                        }}
                         style={{justifyContent:'center', alignItems:'center',padding:8}}>
                            
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
        </View>
			)
	}
}

const mapStateToProps = (store) => {
  return   {
    userSelected: store.chatScreen.userSelected,
    chatScreenContent: store.chatScreen.chatScreenContent,
    progress: store.chatScreen.progress
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserResponseTo: (answer) => dispatch(userRespondedWith(answer)),
        onAddNewContent: (data) => dispatch(addToScreen(data)),
        increaseProgressBar: () => dispatch(incrementProgressBar())
    }

}

export default BotQuestion = connect(mapStateToProps,mapDispatchToProps)(BotQuestionsComponent);