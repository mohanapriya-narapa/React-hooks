import React, {useEffect,useState} from 'react'

function HookUseEffect() {
    const [count,setCount]=useState(0);

    useEffect(()=>{
        console.log("output");
        document.title=`you clicked ${count} times`;
    }, [count])
  return (
    <>
    <div>HookUseEffect</div>
    <button onClick={()=>(setCount(count+1))}>
click {count} times
    </button>
    </>
  )
}

export default HookUseEffect