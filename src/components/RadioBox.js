import React, { useState } from 'react'

const RadioBox = ({ prices,handleFilters }) => {
    const [value,setValue]=useState(0)

    const handleChange=event=>{
        handleFilters(event.target.value)
        setValue(event.target.value)
    }
    return (
        <>
        {prices.map((p,i)=>(
            <div className="form-check" key={i}>
            <input className="form-check-input" type="radio" name="flexRadioDefault" 
            onChange={handleChange} value={`${p._id}`}  />
            <label className="form-check-label">
                {p.name}
            </label>
        </div>

        ))}
            
        </>
    )
}

export default RadioBox
