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
import NewsModal from './NewsModal';



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


                <NewsModal show={this.state.showModal}/>
                 
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