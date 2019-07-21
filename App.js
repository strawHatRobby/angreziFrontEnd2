import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Chat from './components/chat/Chat';
import Levels from './components/Levels';
import YouTubeWindow from './components/YouTube';
import chatBarReducer from './components/chat/redux/chatBarReducer';
import { createStore,  applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './components/chat/redux/reducer';
import {actionWatcher} from './components/chat/redux/sagas/chatScreenSagas';
import rootSaga from './components/chat/redux/sagas/rootSaga';
function* hello(){
  console.log('hello');
}
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
// store.subscribe(() => console.log(store.getState()));
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
