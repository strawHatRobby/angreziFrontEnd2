import React, { Component } from 'react';
import { StyleSheet,ScrollView, Button, Dimensions, Text, TextInput, View, TouchableOpacity } from 'react-native';


export default class Chat extends Component {
    
    state = {
        text: ''
    }
  
    
	render(){
		return(
			<View style={styles.container}>
                <View style={{flexGrow:20, backgroundColor:'#a5a5a5'}}>
				<Text>Yello</Text>
                </View>
                <ScrollView horizontal={true} contentContainerStyle={{flexGrow:1, flexDirection:'row', flexWrap:'wrap', padding:10, paddingLeft:10}}>
                    <TouchableOpacity onPress={() => {}} style={{margin:10, marginLeft:0, marginRight:0, borderRadius:10, padding:10, justifyContent:'center', alignItems:'center', flexDirection:'row', flexWrap:'wap', backgroundColor:"#BED6F6"}}>                    
                    <Text>
                        This is indeed true that your beauty knows no bound
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {}} style={{margin:10, marginRight:0, borderRadius:10, padding:10, justifyContent:'center', alignItems:'center', flexDirection:'row', flexWrap:'wap', backgroundColor:"#BED6F6"}}>                    
                    <Text>
                        Yes
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {}} style={{margin:10, marginRight:0, borderRadius:10, borderBottomEndRadius:0, padding:10, justifyContent:'center', alignItems:'center', flexDirection:'row', flexWrap:'wap', backgroundColor:"#BED6F6"}}>                    
                    <Text>
                        Yes
                    </Text>
                    </TouchableOpacity>
                    </ScrollView>
			</View>
			)
	}
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });