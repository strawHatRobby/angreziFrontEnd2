import React, { Component } from 'react';
import { StyleSheet,ScrollView, ActivityIndicator, Button, Dimensions, Text, TextInput, View, TouchableOpacity } from 'react-native';
import {Constants} from 'expo'

export default class Chat extends Component {
    
    state = {
        text: '',
        data : [
            'This is indeed true that your beauty knows no bound',
            'Yes',
            'No'
        ]
    }
  
   
    
	render(){
		return(
			<View style={styles.container}>
                <View style={{flexGrow:1, flexDirection:'row', padding:10, paddingBottom:2, paddingTop:0, alignItems:'center', justifyContent:'space-between', backgroundColor:'#39454F'}}>
                    <Text style={{fontSize:40, color:'#fff'}}>
                        Yasharth
                    </Text>
                    <ActivityIndicator size="large" color="#fff" />
                </View>
                <View style={{flexGrow:20, backgroundColor:'#a5a5a5'}}>
				<Text>Yello</Text>
                </View>
                <ScrollView horizontal={true} contentContainerStyle={{flexGrow:1, backgroundColor: '#E2E2E2', flexDirection:'row', flexWrap:'wrap', padding:10, paddingLeft:10}}>
                    {this.state.data.map((item, index) => {
                        return (
                    <TouchableOpacity key={index} onPress={() => {}} style={[ {margin:10, marginLeft:10, marginRight:0, borderRadius:10, padding:10, justifyContent:'center', alignItems:'center', flexDirection:'row', flexWrap:'wap', backgroundColor:"#BED6F6"}, {  borderTopEndRadius: index === this.state.data.length-1 ? 0 : 10}]}>                    
                        <Text>
                            {item}
                        </Text>
                    </TouchableOpacity>
                        )
                    })
                    
                   }
                    </ScrollView>
			</View>
			)
	}
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Constants.statusBarHeight
    },
  });