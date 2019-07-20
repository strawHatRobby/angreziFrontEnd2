import { call, put, delay, takeEvery, takeLatest } from 'redux-saga/effects';
import quotes from '../../../assets/quotes.json';
import { addQuoteToScreen, addToScreen } from './chatScreenActions';
function fetchStuff(){
    const json = fetch('http://api.icndb.com/jokes/random')
          .then(response => response.json(), )
          .catch(err => console.warn(err))
    return json;
}

function* fetchQuotes() {
    try{

    const json = yield call(fetchStuff);

    yield put(addQuoteToScreen( json.value.joke))      
    // yield put(addToScreen({ type: 'quote', data:json.value.joke} ));
    }
    catch(err){
        yield put(addToScreen({ type: 'bot', data:'you are offline!'} ));
        console.warn(err)
    }

  }

export function* actionWatcher() {
    console.log("Ran")
    yield takeLatest('GET_QUOTE', fetchQuotes)
}