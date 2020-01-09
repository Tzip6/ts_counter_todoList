import {combineReducers, createStore} from 'redux'
import {counterReducer} from '../App'

const rootReducer = combineReducers({
  count: counterReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer)

export default store
