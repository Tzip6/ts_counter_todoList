import { useDispatch } from 'react-redux'
import { increase, decrease } from './actions'

const useCount = () => {
  const dispatch = useDispatch()
  const onIncrease = () => {
    dispatch(increase())
  }

  const onDecrease = () => {
    dispatch(decrease())
  }

  return {
    onDecrease,
    onIncrease,
  }
}

export default useCount
