import { useRef, useState } from 'react'

export default function CountRef() {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)

  const handleIncrement = () => {
    // setCount(count + 1)
    countRef.current++

    // console.log('State:', count) // 0 on 1st click
    console.log('Ref:', countRef.current) // 1 on 1st click
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </>
  )
}

// when continue clickng on the button when state is commented -->
// countRef : 1, 2, 3.. etc (like a state that is not rendered anywhere)
