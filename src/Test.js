import React from 'react'
import Nav from './components/Nav'
import './test.css'

const Test = () => {
    return (
        <>
        <Nav/>
            <div className="container">
                <div className="content-item">
                    <img src="./images/b.jpg" alt=""/>
                </div>
                <div className="content-item">
                <img src="./images/d.jpg" alt=""/>
                </div>
            </div>

        </>
    )
}

export default Test
