import { Dispatch, SetStateAction, useState } from 'react'

interface UseCounterOutput {
  count: number
  increment: () => void
  decrement: () => void
  setCount: Dispatch<SetStateAction<number>>
}

interface CountInputs {
  initVal: number
  minCount: number
  maxCount: number
}

export function useCounter({
  initVal,
  minCount,
  maxCount
}: CountInputs): UseCounterOutput {
  const [count, setCount] = useState(initVal || 0)

  const increment = () => {
    if (count < maxCount) {
      setCount(x => x + 1)
    }
  }
  const decrement = () => {
    if (count > minCount) {
      setCount(x => x - 1)
    }
  }
  return {
    count,
    increment,
    decrement,
    setCount
  }
}
