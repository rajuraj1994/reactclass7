import React,{useState} from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import {Link,Redirect} from 'react-router-dom'

import { signin,authenticate,isAuthenticated } from './index'
import { values } from 'lodash'
const Signin = () => {
    const[values,setValues]=useState({
        email:'',
        password:'',
        error:'',
        redirectToReferrer:false
    })
    const{email,password,error,redirectToReferrer}=values

    const{user}=isAuthenticated()


    const handleChange=name=>event=>{
        setValues({...values,error:false,[name]:event.target.value})
    }

    const clickSubmit=event=>{
        event.preventDefault();
        setValues({...values,error:false})
        signin({email,password})
        .then(data=>{
            if(data.error){
                setValues({...values,error:data.error})
            }
            else{
                authenticate(data,()=>{
                    setValues({...values,redirectToReferrer:true})
                })
            }
        })
    }

    //to show error msg
  const showError=()=>(
    <div className="alert alert-danger" style={{display:error?'':'none'}}>
        {error}
    </div>
)

//to redirect user by role
const redirectUser=()=>{
    if(redirectToReferrer){
        if(user && user.role===1){
            return <Redirect to="/admin/dashboard"/>
        }else{
            return <Redirect to="/user/dashboard"/>
        }
    }
    if(isAuthenticated()){
        return <Redirect to="/" />
    }
}

    return (
        <>
        <Nav/>
        <div className="container">
                <div className="col-md-6 offset-md-3 p-3 mt-3 mb-3 shadow-lg">
                    <form>
                        {showError()}
                        {redirectUser()}
                       
                        <div className="col-12 mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" id="email" name="email" placeholder="Email" onChange={handleChange('email')} value={email} />
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={handleChange('password')} value={password} />
                        </div>
                        <div className="mb-3">
                        <button className="btn btn-primary" onClick={clickSubmit}>Signin</button>
                        </div>
                        <div className="mb-3">
                            Dont have a Account Yet ?  &nbsp;&nbsp;
                            <Link to="/signup">
                                <button className="btn btn-info">Signup</button>

                            </Link>
                        </div>

                    </form>
                </div>
            </div>


        <Footer/>
            
        </>
    )
}

export default Signin
