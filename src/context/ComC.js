import React,{useContext} from 'react'
import { GlobalContext } from './GlobalContext'

const ComC = () => {
    const js=useContext(GlobalContext)
    return (
        <>
            <h2>The javascript framework we are learning is {js} </h2>
        </>
    )
}

export default ComC
