import { createStackNavigator, createAppContainer } from "react-navigation";

import Chat from '../components/chat/Chat';

import WebViewComponent from './WebBrowserScreen';

const AppNavigator = createStackNavigator(
    {
    Chat: Chat,
    Web: WebViewComponent
    },
    {
        initialRouteName: "Chat",
        navigationOptions: {
        headerVisible: false
        }
    }

);

export default createAppContainer(AppNavigator);



