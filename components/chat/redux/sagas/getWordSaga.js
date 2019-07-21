import { call, put, delay, takeEvery, takeLatest } from 'redux-saga/effects';
import { addQuoteToScreen, addToScreen } from '../chatScreenActions';

function fetchWordData(word){
    const json = fetch(`http://localhost:8000/api/word/${word}`)
                .then(response => response.json())
                .catch(err => console.warn(err))
    return json;
}

function* fetchWord(word){
    try{
        const json = yield call(fetchWordData, word);
        yield put(addToScreen({type:'bot', data:json.synonyms[0]}))
    }
    catch(err){
        yield put (addToScreen({type:'bot', data:"Couldn't fetch the file, saga not working"}))
    }
}

export function* getWord(word) {
    console.log("Saga Ran")
    yield takeLatest('GET_WORD', fetchWord, word)
}