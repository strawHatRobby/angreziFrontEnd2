import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Chat from './components/chat/Chat';
import Levels from './components/Levels';
import YouTubeWindow from './components/YouTube';
import chatBarReducer from './components/chat/redux/reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(chatBarReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default function App() {
  return (
    <Provider store={store}>
<Chat/>
</Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
