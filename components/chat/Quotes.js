import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View, TouchableOpacity } from 'react-native';
import QuotesIcon from '../../QuotesIcon';
import { connect } from 'react-redux';
import {removeQuote, addToScreen} from './redux/chatScreenActions';
import { getDate } from './utils/time';

class Quote extends Component {
    
    state = {
        quote: ''
}
    componentDidMount = () =>{
        this.setState({
            quote: this.props.quotes
        })
    }

    outOfQuotes = () => {
        this.props.onAddNewContent({type:'bot',data:"I don't have any more quotes for this word right now! Check back later?"});
  
    }
    
	render(){
        
		return(
            this.props.currentWord && (this.props.saying.quotes[0] !== undefined) ?

            <View style={{ padding:10, marginTop:5,marginLeft:10, marginRight:30,marginBottom:0, borderRadius:8, borderTopStartRadius:0, backgroundColor:'#BEDBE9'}}>
            <Text style={{fontSize:11,flexWrap:'nowrap', fontFamily:Platform.OS === 'ios' ? 'Times New Roman' : 'Roboto', color:'#776666', marginBottom:5}}>{getDate()}</Text>
            <QuotesIcon name="quotes" size={30} color={'#000'}/>
            
            <View style={{marginTop:10, borderBottomColor:'#fff', borderBottomWidth:1}}>
            <Text style={{fontSize:18, marginBottom:10, flexWrap:'wrap',fontFamily:Platform.OS === 'ios' ? 'Times New Roman' : 'Roboto'}}>
            {/* The fun part about doing our movies is that you're creating something using the talents of people rather than finding these pathetic people who are thrust into these situations. That, to me, is completely <Text style={{fontWeight:'bold'}}>artless.</Text>. */}
            {  this.props.saying.quotes[0].quote}
            </Text>
            </View>
            
            <View style={{alignItems:'flex-end', padding:10, paddingBottom:5}}>
                <Text style={{fontWeight:'500', fontSize:15}}> -{  this.props.saying.quotes[0].author}</Text>
                <Text style={{fontStyle:'italic'}}> source: {  this.props.saying.quotes[0].source}</Text> 
            </View>
            </View>
            :
            this.outOfQuotes()

       
			)
	}
}

const mapStateToProps = (store) => {
    return {
        quotes: store.chatScreen.quotes,
        currentWord: store.chatScreen.currentWord,
        currentWordData: store.chatScreen.wordData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRemoveQuote: () => dispatch(removeQuote()),
        onAddNewContent: (data) => dispatch(addToScreen(data))
    }
}


export default Quotes = connect(mapStateToProps, mapDispatchToProps)(Quote);

