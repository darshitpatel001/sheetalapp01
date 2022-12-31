import { put, takeEvery, takeLatest, delay, all } from 'redux-saga/effects';
import {incrementWatcher, multiplicationWatcher} from './counterSaga' 
import {devisionWatcher}  from './counterSaga';

export default function* rootSaga()
{
   yield all([incrementWatcher(),multiplicationWatcher(),devisionWatcher()])
}