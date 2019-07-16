import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Chat from './components/chat/Chat';
import Levels from './components/Levels';
import YouTubeWindow from './components/YouTube';
import chatBarReducer from './components/chat/redux/chatBarReducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
function* hello(){
  console.log('hello');
}
const sagaMiddleware = createSagaMiddleware();
const store = createStore(chatBarReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(hello);

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
