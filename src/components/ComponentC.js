import React, {useContext} from 'react'

import {CountContext }from '../App'
function ComponentC() {
  const countContext =useContext(CountContext);
  return (
    <>
    Component A
    <button onClick={()=>{countContext.countDispatch({type:'increment', value:1})}}> Increment</button>
    <button onClick={()=>{countContext.countDispatch({type:'decrement', value:1})}}> Decrement</button>
    <button onClick={()=>{countContext.countDispatch({type:'reset'})}}> Reset</button>
    </>
  )
}

export default ComponentC