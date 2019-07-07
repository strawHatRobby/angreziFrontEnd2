import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
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
                                    borderTopStartRadius:15, borderTopEndRadius:15 }}>
                        <Text>Hello World</Text>
                        <Button title="done"
                        onPress={() => {this.setState({showModal: false})}}/>
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