import React,{useState} from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import {Link} from 'react-router-dom'
import { signup } from './index'

const Signup = () => {
  const [values,setValues]=useState({
      name:'',
      email:'',
      password:'',
      error:'',
      success:false
  })

  const{name,email,password,error,success}=values

  const handleChange=name=>event=>{
    setValues({...values,error:false,[name]:event.target.value})  
  }

  const clickSubmit=event=>{
      event.preventDefault();
      setValues({...values,error:false})
      //signup function
      signup({name,email,password})
      .then(data=>{
          if(data.error){
              setValues({...values,error:data.error,success:false})
          }
          else{
              setValues({...values,name:'',email:'',password:'',success:true})
          }
      })

  }

  //to show error msg
  const showError=()=>(
      <div className="alert alert-danger" style={{display:error?'':'none'}}>
          {error}
      </div>
  )

  //to show success msg
  const showSuccess=()=>(
    <div className="alert alert-info" style={{display:success?'':'none'}}>
      New account is created, verify your account before login
</div>

  )


    return (
        <>
            <Nav/>

            <div className="container">
                <div className="col-md-6 offset-md-3 p-3 mt-3 mb-3 shadow-lg">
                    <form>
                        {showError()}
                        {showSuccess()}
                        
                        <div className="col-12 mb-3">
                            <label htmlFor="firstname">FullName</label>
                            <input type="text" className="form-control" id="firstname" name="fname" placeholder="Firstname" onChange={handleChange('name')} value={name} />
                        </div>
                       
                        <div className="col-12 mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" id="email" name="email" placeholder="Email" onChange={handleChange('email')} value={email} />
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={handleChange('password')} value={password} />
                        </div>
                        <div className="mb-3">
                        <button className="btn btn-primary" onClick={clickSubmit}>Signup</button>
                        </div>
                        <div className="mb-3">
                            Already Registered ?  &nbsp;&nbsp;
                            <Link to="/signin">
                                <button className="btn btn-info">Signin</button>

                            </Link>
                        </div>

                    </form>
                </div>
            </div>


            <Footer />

        </>
    )
}

export default Signup
