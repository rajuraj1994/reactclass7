import React,{useState} from 'react'

import AdminDashboard from '../pages/auth/AdminDashboard'

import { isAuthenticated } from '../pages/auth'
import { createcategory } from './apiAdmin'

const AddCategory = () => {
    const[category_name,setCategory]=useState('')
    const[error,setError]=useState(false)
    const[success,setSuccess]=useState(false)

    // destructure user and token from localstorage
    const{user,token}=isAuthenticated()

    const handleChange=(e)=>{
        setError('')
        setCategory(e.target.value.toLowerCase())
    }
    const clickSubmit=(e)=>{
        e.preventDefault()
        setError('')
        setSuccess(false)
        //make request to create category
        createcategory(token,{category_name})
        .then(data=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setError('')
                setSuccess(true)
                setCategory('')
            }
        })
    }

    
    //to show error msg
    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    )

    //to show success msg
    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
          new category added
        </div>

    )



    return (
        <>
        <div className="container-fluid mt-3">
            <div className="row">
                <div className="col-md-3">
                    <AdminDashboard/>
                </div>
                <div className="col-md-6">
                    <form className="shadow-lg p-3">
                        <h2>Add Catgeory Form</h2>
                        {showError()}
                        {showSuccess()}
                        <div className="mb-3">
                            <label htmlFor="category">Catgeory Name</label>
                            <input type="text" id="category" onChange={handleChange} value={category_name} className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-primary" onClick={clickSubmit}>Add Category</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default AddCategory
