import React from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootStateType } from './modules/store'

// action type constants
const INCREASE = 'counter/INCREASE' as const
const DECREASE = 'counter/DECREASE' as const

// create actions functions
const increase = () => ({ type: INCREASE })
const decrease = () => ({ type: DECREASE })
type CounterActions = ReturnType<typeof increase> | ReturnType<typeof decrease>

// reducer
export const counterReducer = (state: number = 0, action: CounterActions) => {
  switch (action.type) {
    case 'counter/INCREASE':
      return state + 1
    case 'counter/DECREASE':
      return state - 1
    default:
      return state
  }
}

const App: React.FC = () => {

  const count = useSelector((state: RootStateType) => state.count)
  const dispatch = useDispatch()
  const onIncrease = () => {
    dispatch(increase())
  }

  const onDecrease = () => {
    dispatch(decrease())
  }

  return (
    <div>
      <p> {count} </p>
      <button onClick={onIncrease}>increase</button>
      <button onClick={onDecrease}>decrease</button>
    </div>
  )
}

export default App
