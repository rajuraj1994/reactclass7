import React,{useState,useEffect} from 'react'
import axios from 'axios'

const DataFetch = () => {
const[posts,setPost]=useState([])
const[limit,setLimit]=useState(20)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            console.log(res.data)
            setPost(res.data)
        })
        .catch(error=>console.log(error))
    })
    return (
        <>
        {posts.slice(0,limit).map(item=>(
            <li key={item.id}>{item.title}</li>
        ))}

        {limit<posts.length &&  <button onClick={()=>setLimit(limit+20)}>Load More</button> }
      
            
        </>
    )
}

export default DataFetch
