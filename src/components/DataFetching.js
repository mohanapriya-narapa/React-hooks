import React, {useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    // const [posts,setPosts]=useState([])
    const [post,setPost]=useState({}) 
    const [id,setId]=useState(1);
    const handleClick = ()=>{
setIdFromButtonClick(id);
    }
    const [idFromButtonClick, setIdFromButtonClick]=useState(1);
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res =>{
            console.log(res);
            // setPosts(res.data);
            setPost(res.data);
        })
        .catch(err=>{
            console.log(err.data)
        })
    },[idFromButtonClick])
  return (
    <div>
        <input type ='text' value={id} onChange={e=> setId(e.target.value)}></input>
        <button tyep='button' onClick={handleClick}> Fetch post</button>
<ul>
    {/* {
        posts.map(post=>
        (<li key={post.id} > */}
{post.title}
        {/* </li>)) */}
    
</ul>

    </div>
  )
}

export default DataFetching