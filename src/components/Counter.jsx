import React, {useState} from 'react'
import Button from './Button'
// import Header from './Header'

const Counter = () => {
    const[count, setCount] = useState(0)
    const[desc, setDesc] = useState("")
    return (
    <div>
      {/* <Header/> */}
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}>Click me to increase by 1</button>
      {/* <button onClick={() => setCount(count-1)}>Click me to decrease by 1</button>
      <button onClick={() => setCount((0))}>Click me to reset</button>
      <Button color ="red" text = "Like me" /> */}
      {/* <input type="text" onChange={(e) => setDesc(e.target.value)}></input> */}
      <h1>{desc}</h1>

    </div>
  )
}

export default Counter