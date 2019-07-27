import { call, put, delay, takeEvery, takeLatest } from 'redux-saga/effects';
import { addQuoteToScreen, addToScreen, setWord } from '../chatScreenActions';

function fetchVideoData(word){
    console.log(JSON.stringify(word));
    const json = fetch(`http://https://peaceful-wildwood-85560.herokuapp.com/api/word/${word}`)
                .then(response => response.json())
                .catch(err => console.warn(err))
    return json;
}

function* fetchVideo(word){
    try{
        const json = yield call(fetchVideoData, word.word);
        yield put(setWord(word))
        yield put(addToScreen({type:'bot', data:json.word}))
    }
    catch(err){
        yield put (addToScreen({type:'bot', data:"Couldn't fetch the file, saga not working"}))
    }
}

export function* getVideo() {
    yield takeLatest('GET_Video', fetchVideo)
}