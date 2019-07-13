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
import { Ionicons } from '@expo/vector-icons';



export default class Chat extends Component {
    
    state = {
        text: '',
        showOptions: false,
        showModal: false,
        data : [
            'This is indeed true that your beauty knows no bound',
            'Yes',
            'No'
        ]
    }
  
   
    componentDidMount(){
        
            this.setState({
                showModal: false
            })    
        
        
    }
	render(){
		return(
			<View style={styles.container}>


                <NewsModal show={this.state.showModal}/>
                 
                <TitleBar/>
                <ScrollView contentContainerStyle={{flexGrow:20, backgroundColor:'#fff'}}>
                <BotView/>

                <UserTextBox />
                </ScrollView>
                {
                    this.state.showOptions &&
                <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} contentContainerStyle={{flexGrow:1, backgroundColor: '#E2E2E2', flexDirection:'row', flexWrap:'wrap', padding:10, paddingLeft:10}}>
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
                }

<View style={{flexGrow:10, 
    backgroundColor:'#fff', borderTopEndRadius:10, borderTopStartRadius:10,
    shadowOffset:{  width: -1,  height: -0.5  },
    shadowColor: '#a5a5a5',
    shadowOpacity: 0.25,
    justifyContent:'space-between',
    flexDirection:'row',
    flexWrap:'nowrap',
    padding:5,
    paddingBottom:2,
    paddingTop:2

    }}>
        <TouchableOpacity style={{padding:5, justifyContent:'center', alignItems:'center'}}>
                <Ionicons size={35} name='network'/>
            </TouchableOpacity>
            <TouchableOpacity style={{padding:5, justifyContent:'center', alignItems:'center'}}>
                <Ionicons size={35} name='network'/>
            </TouchableOpacity>
            <TouchableOpacity style={{padding:5, justifyContent:'center', alignItems:'center'}}>
                <Ionicons size={35} name='network'/>
            </TouchableOpacity>
            <TouchableOpacity style={{padding:5, justifyContent:'center', alignItems:'center'}}>
                <Ionicons size={35} name='network'/>
            </TouchableOpacity>
            <TouchableOpacity style={{padding:5, justifyContent:'center', alignItems:'center'}}>
                <Ionicons size={35} name='network'/>
            </TouchableOpacity>

</View>

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