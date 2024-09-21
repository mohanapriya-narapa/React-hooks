import React, {useEffect,useState} from 'react'

function HookMouse() {
    const [x,setX]=useState(0);
    const[y,setY]=useState(0);
const logMouseEvent =e=>{
    console.log('mouse event');
    setX(e.clientX);
    setY(e.clientY);
}    
useEffect(()=>

{
    console.log('mouse event effect called');
window.addEventListener('mousemove',logMouseEvent);
},[]);
  return (
    <div>
        Hooks X-{x} Y -{y}
    </div>
  )
}

export default HookMouse