import React, { useReducer, useState } from 'react'

const UserReducer = () => {

  const reducer = (state, action) => {
    if(action.type === "INCREMENT") {
      return state + 1;
    }else{
      return state - 1;
    }
      return state;
  }

  // const [count, setCount] = useState(0)
 const [state , dispatch] = useReducer(reducer, 0)

  return (
    <div>
     <h2>{state}</h2>
     <button onClick={() => {dispatch({type : "INCREMENT"})}}>Increment</button>
     <button onClick={() => {dispatch({type : "DECREMENT"})}}>Decrement</button>
    </div>
  )
}

export default UserReducer
