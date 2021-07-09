import React from 'react'

const Prop = (props) => {
    const{language,technology}=props
    return (
        <>
            <h2> It is a {language} class.It is used mainly for {technology}</h2>
        </>
    )
}

export default Prop
