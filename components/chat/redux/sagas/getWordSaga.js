import { call, put, delay, takeEvery, takeLatest } from 'redux-saga/effects';
import { addQuoteToScreen, addToScreen, setWord } from '../chatScreenActions';

function fetchWordData(word){
    console.log(JSON.stringify(word));
    const json = fetch(`https://peaceful-wildwood-85560.herokuapp.com/api/word/${word}`)
                .then(response => response.json())
                .catch(err => console.warn(err))
    return json;
}

function* fetchWord(word){
    try{
        const json = yield call(fetchWordData, word.word);
        yield put(setWord(json))
        // yield put(addToScreen({type:'bot', data:json.news[0].title}))
    }
    catch(err){
        yield put (addToScreen({type:'bot', data:"Couldn't fetch the file, saga not working"}))
    }
}

export function* getWord() {
    console.log("Saga Ran")
    yield takeLatest('GET_WORD', fetchWord)
}