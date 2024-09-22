import React from 'react'
import ContextB from './ContextB'
import { UserContext } from '../App'
import { useContext } from 'react'
function ContextA() {
    const user =useContext(UserContext);
  return (
 <div>
    {user}
 </div>
  )
}

export default ContextA