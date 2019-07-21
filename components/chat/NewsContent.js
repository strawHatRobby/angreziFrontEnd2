import React, { Component } from 'react';
import { StyleSheet, WebView, Platform, Animated, PanResponder, Text, Modal, Dimensions, ImageBackground,Button, ScrollView,  View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
class News extends Component {
    
 state = {

 }
    
	render(){
		return(
            <ScrollView
                        horizontal={true} contentContainerStyle={{alignItems:'center', justifyContent:'center', backgroundColor: '#fff', flexDirection:'row', flexWrap:'wrap'}}
                        >
                        
			{this.props.currentWord ? 
            this.props.currentWordNews.map((news, index) => {
                return (
                    <ImageBackground key={`news${index}`} source={{uri:news.image}} style={{height:250, margin:20, marginLeft:10, width:350 }} imageStyle={{borderRadius:25}}>
                    <View style={{flex:1, justifyContent:'space-between', backgroundColor:'rgba(0,0,0,0.3)', borderRadius:25, borderBottomEndRadius:0, borderBottomStartRadius:0}}>
                        <View style={{width: 350, padding:15, borderRadius:25, borderBottomStartRadius:0, backgroundColor:'rgba(0,0,0,0)'}}>
                            <Text style={{fontFamily:Platform.OS === 'ios' ? 'Times New Roman' : 'Roboto', fontWeight:'800', fontSize:24, color:'#fff'}}>
                                {news.title} 
                                </Text>
                        </View>
                        <View style={{width: 350, padding:15, paddingBottom:0, borderRadius:25, borderBottomStartRadius:0}}>
                            <Text style={{backgroundColor:'rgba(0,0,0,0.05)', fontFamily:Platform.OS === 'ios' ? 'Times New Roman' : 'Roboto', fontWeight:'bold', fontSize:14, color:'#fff'}}>
                            {news.title}
                                </Text>
                                <View style={{flexDirection:'row', margin:10, marginLeft:0,  alignItems: 'flex-start', width:350}}>
                                    <TouchableOpacity onPress={() => {
                                        
                                    }} style={{alignItems:'center', justifyContent:'center', height:40, width:80, marginRight:10, backgroundColor:'rgba(43, 53, 62, 0.55)'}}>
                                        <Text style={{fontSize:15, color:'#fff', fontWeight:'900'}}>Save</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {
                                          this.props.navigation.navigate('Web', {webUrl: news.link})
                                    }}
                                    style={{alignItems:'center', justifyContent:'center', height:40, width:100,marginRight:10, backgroundColor:'rgba(43, 53, 62, 0.55)'}}>
                                        <Text style={{fontSize:15, color:'#fff', fontWeight:'900'}}>Read More</Text>
                                    </TouchableOpacity>
                                </View>
                        </View>
                        </View>
                        <View style={{width:350, justifyContent:'flex-end', alignItems:'flex-end', flexDirection:'row', borderBottomEndRadius:25, borderBottomStartRadius:25, backgroundColor:'rgba(0,0,0,0.1)'}}>
                                    <Text style={{color:'#fff', fontWeight:'800', padding:8, paddingTop:0, fontSize:15, fontFamily:Platform.OS === 'ios' ? 'Times New Roman' : 'Roboto'}}>
                                    on {news.src}
                                    </Text>
                                </View>
                </ImageBackground>
                )
            })
            
                            
                        :
                        <Text>Couldn't fetch any news -> {this.props.currentWord}</Text>
                        }


</ScrollView>
			)
	}
}

const mapStateToProps = (store) => {
    return {
        currentWord: store.chatScreen.currentWord,
        currentWordNews: store.chatScreen.currentWordNews
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

const NewsComponent = connect(mapStateToProps, mapDispatchToProps)(News);
export default withNavigation(NewsComponent);
