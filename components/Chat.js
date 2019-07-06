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
    TouchableWithoutFeedback
} from 'react-native';
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
                <View style={{flexGrow:20, backgroundColor:'#fff'}}>

                <View style={{margin:15, marginBottom:5, alignItems:'flex-start'}}>
                    <Image source={{uri: 'https://cdn-images-1.medium.com/max/1200/0*oz2e-hQtsHOWzoB4.'}} style={{height:40, width:40, borderRadius:20}}/>
                    
                        <View style={{ padding:10, paddingLeft:20, margin:10,marginLeft:0, borderRadius:8, borderTopStartRadius:0, backgroundColor:'#F6DCBE'}}>
                        <Text style={{fontSize:11,flexWrap:'nowrap', fontFamily:'Times New Roman', color:'#776666', marginBottom:5}}>2:25 PM</Text>
                        <Text style={{fontSize:18,flexWrap:'wrap',fontFamily:'Times New Roman'}}>
                        Hi Yasharth!
                        </Text>
                        </View>

                        

                </View>


                <View style={{margin:15,  alignItems:'flex-end'}}>
                <Image source={{uri: 'https://tinyurl.com/y3jnz86c'}} style={{height:40, width:40, borderRadius:20}}/>
                        <View style={{  padding:10, paddingRight:20, margin:10,marginRight:0, borderRadius:8, borderTopEndRadius:0, backgroundColor:'#BED6F6', alignItems:'flex-end'}}>
                        <Text style={{fontSize:11,flexWrap:'nowrap', fontFamily:'Times New Roman', color:'#776666', marginBottom:5}}>2:25 PM</Text>
                        <Text style={{fontSize:18,flexWrap:'wrap',fontFamily:'Times New Roman'}}>
                        Hi Yasharth How are you doing today?39454F I hope you are doing foo!
                        </Text>
                        </View>

                        

                </View>




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