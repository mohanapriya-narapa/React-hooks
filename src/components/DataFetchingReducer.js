import React, {useReducer, useEffect} from 'react'
import axios from 'axios'
const intialState={
    loading:true,
    error:'',
    post:{}
}
const reducer =(state,action)=>
{
switch(action.type){
    case 'success':
        return {
            loading:false,
            error:'',
            post:action.payload
        }
    case 'error':
        return {
            loading:false,
            error:'something went wrong'
        }
    default:
        return state
}
}
function DataFetchingReducer() {
    const [state,dispatch] =useReducer(reducer, intialState)
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response=>{
dispatch({type: 'success', payload: response.data})
    })
    .catch(error =>{
        dispatch({type: 'error'})
    })
  }, [])
  return (
    <div>
        {state.loading? 'Loading':state.post.title}
        {state.error? 'error':null}
    </div>
  )
}

export default DataFetchingReducer