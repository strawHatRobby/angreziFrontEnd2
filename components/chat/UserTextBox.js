import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { getDate } from './utils/time';
import {connect} from 'react-redux';



class User extends Component {
    
    state = {
        shouldShowUserImage : this.props.chatScreen[this.props.chatScreen.length -2].type !== 'user'
    }
  
    
	render(){
        
		return(
			<View style={{margin:this.state.shouldShowUserImage ? 15:0, marginBottom:0,  marginRight:15, alignItems:'flex-end'}}>
                {this.state.shouldShowUserImage && <Image source={{uri: 'https://tinyurl.com/y3jnz86c'}} style={{height:40, width:40, borderRadius:20, marginBottom:10}}/>}
                        <View style={[{margin:3, padding:10, paddingRight:20, marginRight:0, borderRadius:8, borderTopEndRadius:0, backgroundColor:'#BED6F6', alignItems:'flex-end'}]}>
                        <Text style={{fontSize:11,flexWrap:'nowrap', fontFamily:'Times New Roman', color:'#776666', marginBottom:5}}>{getDate()}</Text>
                        <Text style={{fontSize:18,flexWrap:'wrap',fontFamily:'Times New Roman'}}>
                            
{this.props.said}
                        </Text>
                        </View>

                        {/* <View style={{ padding:10,  paddingLeft:20, borderRadius:8, borderTopEndRadius:0, backgroundColor:'#BED6F6'}}>
                            <Text style={{fontSize:11,flexWrap:'nowrap', fontFamily:'Times New Roman', color:'#776666', marginBottom:5}}>2:25 PM</Text>
                                <Text style={{fontSize:18,flexWrap:'wrap',fontFamily:'Times New Roman'}}>
                                You Rob!
                                </Text>
                        </View> */}

                </View>
			)
	}
}

const mapStateToProps = (store) => {
    return {
        chatScreen: store.chatScreen.chatScreenContent
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddNewContent: (data) => dispatch(addToScreen(data))
    }
}

export default UserTextBox = connect(mapStateToProps, mapDispatchToProps)(User);

