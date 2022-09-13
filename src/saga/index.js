import { all } from 'redux-saga/effects'
import { countWatcher } from './countSage'
import { userWatcher } from './userSage'

export function* rootWatcher() {
    yield all([userWatcher(), countWatcher()])
}