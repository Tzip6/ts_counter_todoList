import { createReducer } from 'typesafe-actions'
import { INCREASE, DECREASE } from './constants'
import { CounterActions } from './types'

// reducer
export const counterReducer = createReducer<number, CounterActions>(0, {
  [INCREASE]: state => state + 1,
  [DECREASE]: state => state - 1,
})

