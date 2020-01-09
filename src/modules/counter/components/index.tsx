import React from 'react'
import { useSelector } from 'react-redux'
import { RootStateType } from '../../store'
import useCount from '../hooks'

const Counter = () => {
  const count = useSelector((state: RootStateType) => state.count)
  const {onDecrease, onIncrease} = useCount()

  return (
    <div>
      <p> {count} </p>
      <button onClick={onIncrease}>increase</button>
      <button onClick={onDecrease}>decrease</button>
    </div>
  )
}

export default Counter


