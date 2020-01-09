import { ActionType } from 'typesafe-actions'
import { actions } from './actions'

export type CounterActions = ActionType<typeof actions>
