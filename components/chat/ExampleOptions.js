import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class ExampleOptions extends Component {
    
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
        <TouchableOpacity onPress={() => {}} style={{ justifyContent:'center', alignItems:'center', padding:5}}>
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
