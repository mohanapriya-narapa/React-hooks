import React,{useEffect,useState} from 'react'

function IntervalHookCounter() {
    const [count,setCount]=useState(0);
    const tick =()=>
    {
        setCount(count+1);
        // console.log(count);
    }
    useEffect(()=>{
         const interval=setInterval(tick,1000);
         return(()=>clearInterval())
    },[count])
  return (
    <div>IntervalHookCounter {count} </div>
  )
}

export default IntervalHookCounter