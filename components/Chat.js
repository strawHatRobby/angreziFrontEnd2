import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    ImageBackground,
    ScrollView,
    ActivityIndicator,
    Button,
    Dimensions,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Modal
} from 'react-native';
import {Constants} from 'expo'
import BotView from './BotView';
import UserTextBox from './UserTextBox';
import TitleBar from './TitleBar';



export default class Chat extends Component {
    
    state = {
        text: '',
        showModal: false,
        data : [
            'This is indeed true that your beauty knows no bound',
            'Yes',
            'No'
        ]
    }
  
   
    componentDidMount(){
        
            this.setState({
                showModal: true
            })    
        
        
    }
	render(){
		return(
			<View style={styles.container}>


                    <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.showModal}
                    onRequestClose={() => Alert.alert('Done')}
                    >
                        <View style={{flexDirection:'column', flexGrow:1, justifyContent:'flex-end', backgroundColor:'rgba(255,255,255,0.5)'}}>
                        <View style={{justifyContent:'center', alignItems: 'center', height: Dimensions.get('window').height/1.8, backgroundColor:'#fff',
                                    shadowOffset:{  width: -1,  height: -1  },
                                    shadowColor: '#a5a5a5',
                                    shadowOpacity: 0.5,
                                    borderTopStartRadius:25, borderTopEndRadius:25 }}>
                        <TouchableOpacity style={{justifyContent:'center', alignItems:'center', position:'absolute', top:-10, right:0, height:25, width:25, borderRadius:25, borderColor:'#a5a5a5', borderWidth:1, backgroundColor:'#f00'}} onPress={() => {this.setState({showModal:false})}}>
                            <Text style={{fontSize:15, fontWeight:'bold', color:'#fff'}}>
                                    x
                                </Text>
                            </TouchableOpacity>
                <View style={{width:70, marginTop:15, borderBottomColor:'#D9D6D6', borderBottomWidth:1}}/>
                        <View
                        style={{paddingTop:10, borderBottomColor:'##707070', borderBottomWidth:1, paddingBottom:5}}>
                            <Text style={{fontFamily:'Times New Roman', fontWeight:'bold', fontSize:30}}>
                                'Cacophony' in News
                            </Text>
                        </View>
                        <ScrollView
                        horizontal={true} contentContainerStyle={{flexGrow:1, alignItems:'center', justifyContent:'center', backgroundColor: '#fff', flexDirection:'row', flexWrap:'wrap'}}
                        >

                            <ImageBackground source={{uri:'https://images.alphacoders.com/278/278733.jpg'}} style={{height:250, margin:20,  width:350 }} imageStyle={{borderRadius:25}}>
                                <View style={{flex:1, justifyContent:'space-between', backgroundColor:'rgba(0,0,0,0.1)', borderRadius:25, borderBottomEndRadius:0, borderBottomStartRadius:0}}>
                                    <View style={{width: 350, padding:15, borderRadius:25, borderBottomStartRadius:0}}>
                                        <Text style={{fontFamily:'Times New Roman', fontWeight:'500', fontSize:26, color:'#fff'}}>
                                            Cacophony of Birds
                                            </Text>
                                    </View>
                                    <View style={{width: 350, padding:15, paddingBottom:0, borderRadius:25, borderBottomStartRadius:0}}>
                                        <Text style={{fontFamily:'Arial', fontWeight:'bold', fontSize:14, color:'#fff'}}>
                                        Greyhound divisively hello coldly wonderfully marginally far…
                                            </Text>
                                            <View style={{flexDirection:'row', alignItems: 'flex-start', width:350}}>
                                            <Button title="Save" color="#fff" onPress={() => {}}/>
                                            <Button title="Read More" color="#fff" onPress={() => {}}/>
                                            </View>
                                    </View>
                                    </View>
                                    <View style={{width:350, justifyContent:'flex-end', alignItems:'flex-end', flexDirection:'row', borderBottomEndRadius:25, borderBottomStartRadius:25, backgroundColor:'rgba(0,0,0,0.1)'}}>
                                                <Text style={{color:'#fff', fontWeight:'600', padding:8, paddingTop:0, fontSize:15, fontFamily:'Arial'}}>
                                                on decanchronicles.com
                                                </Text>
                                            </View>
                            </ImageBackground>   


                            <ImageBackground source={{uri:'https://tinyurl.com/y6oxq7wq'}} style={{height:250, margin:20,  width:350 }} imageStyle={{borderRadius:25}}>
                                    <View style={{width: 350, padding:15, borderRadius:25, borderBottomStartRadius:0, backgroundColor:'rgba(0,0,0,0.0)'}}>
                                        <Text style={{fontFamily:'Times New Roman', fontWeight:'500', fontSize:26, color:'#fff'}}>
                                            Cacophony of Birds
                                            </Text>
                                    </View>
                            </ImageBackground>    
                            
                            

                        </ScrollView>
                        </View>
                        </View>
                    </Modal>
                 
                <TitleBar/>
                <View style={{flexGrow:20, backgroundColor:'#fff'}}>
                <BotView/>

                <UserTextBox />
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