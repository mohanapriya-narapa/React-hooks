import React, {useState} from 'react'

function HookcounterTwo() {
    const intialCount=0;
    const [count,setCount]=useState(intialCount);
    const incrementFive =()=>{
        for(let i=0;i<5;i++)
        {
            setCount(prevCount => prevCount+1);
        }
    }
  return (<>
    <div>count: {count} </div>
    <button onClick={()=>setCount(intialCount)}> Reset </button>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <button onClick={()=>setCount(count-1)}>Decrement</button>
    <button onClick={incrementFive}>Increment by 5</button>
    </>
  )
}

export default HookcounterTwo