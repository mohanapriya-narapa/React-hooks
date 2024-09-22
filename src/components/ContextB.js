import React from 'react'
import { UserContext } from '../App'
function ContextB() {
  return (
    <div>
        <UserContext.Consumer>
{
    user=>
    {
        return <div>user context is {user}</div>
    }
}
        </UserContext.Consumer>
    </div>
  )
}

export default ContextB