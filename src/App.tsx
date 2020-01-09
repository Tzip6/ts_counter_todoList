import React from 'react'
import './App.css'

const App: React.FC = () => {
  const [count, setCount] = React.useState(0)

  const onIncrease = () => {
    setCount(count + 1)
  }

  const onDecrease = () => {
    setCount(count - 1)
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
