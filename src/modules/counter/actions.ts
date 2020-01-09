import { createAction } from 'typesafe-actions'
import { DECREASE, INCREASE } from './constants'

// create actions functions
export const increase = createAction(INCREASE)()
export const decrease = createAction(DECREASE)()
export const actions = { increase, decrease }

