import React,{useState} from 'react'

const Increment = () => {
    const[count,setCount]=useState(0)
    //count->variable name
    //setCount-> function which control the varible count value
    //useState(1)->here 1 means the initial value of variable count is 1
    //[]->array destructuring

    //  function increase(){
    //      setCount(count+1)
    //  }

    return (
        <>
            <h2>{count}</h2>
            <button onClick={()=>setCount(count+1)}>Click to increase</button>
            {count >0 && 
             <button onClick={()=>setCount(count-1)}>Click to decrease</button>
            }
           
        </>
    )
}

export default Increment

