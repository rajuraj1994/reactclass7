import React,{useState,useEffect} from 'react'

const NewTest = () => {
    const[data,setData]=useState('comments')

    useEffect(()=>{
      console.log('state change')
    },[data])
    return (
        <>
        <div>
            <button onClick={()=>setData('posts')}>Post</button> &nbsp;
            <button onClick={()=>setData('comments')}>Comments</button> &nbsp;
            <button onClick={()=>setData('users')}>User</button>
        </div>

        <h3>{data}</h3>
            
        </>
    )
}

export default NewTest
