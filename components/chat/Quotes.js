import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import QuotesIcon from '../../QuotesIcon';


export default class Quotes extends Component {
    
    state = {
        
    }
    // componentDidMount = () =>{
    //     console.log("value is " + JSON.stringify(this.props));
    // }
    
	render(){
        
		return(
            <View style={{ padding:10, paddingLeft:20, margin:10,marginLeft:0, borderRadius:8, borderTopStartRadius:0, backgroundColor:'#BEDBE9'}}>
            <Text style={{fontSize:11,flexWrap:'nowrap', fontFamily:'Times New Roman', color:'#776666', marginBottom:5}}>2:25 PM</Text>
            <QuotesIcon name="quotes" size={30} color={'#000'}/>
            
            <View style={{marginTop:10, borderBottomColor:'#fff', borderBottomWidth:1}}>
            <Text style={{fontSize:18, marginBottom:10, flexWrap:'wrap',fontFamily:'Times New Roman'}}>
            {/* The fun part about doing our movies is that you're creating something using the talents of people rather than finding these pathetic people who are thrust into these situations. That, to me, is completely <Text style={{fontWeight:'bold'}}>artless.</Text>. */}
            {this.props.saying}
            </Text>
            </View>
            
            <View style={{alignItems:'flex-end', padding:10, paddingBottom:5}}>
                <Text style={{fontWeight:'500', fontSize:15}}> -Christopher Guest </Text>
                <Text style={{fontStyle:'italic'}}> source: unwikipedia.org</Text> 
            </View>


            </View>
			)
	}
}

const mapStateToProps = (store) => {
    return {
        quotes: store.chatScreen.quotes,
    }
}


