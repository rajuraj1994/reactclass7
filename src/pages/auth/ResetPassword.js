import React, { useState,useEffect } from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import {API} from  '../../config'

const ResetPassword = ({match}) => {
    const [values, setValues] = useState({
        email: '',
        password:'',
        cpassword:'',
        error: '',
        success: false
    })

    const { email,password,cpassword, error, success } = values

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value })
    }

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false })
        const token=match.params.token
        //reset password

        fetch(`${API}/resetpassword/${token}`,{
           method:"PUT",
           headers:{
               Accept:"application/json",
               "Content-Type":"application/json"
           },
           body:JSON.stringify(values) 
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.error){
                setValues({...values,error:data.error,success:false})
            }
            else{
                setValues({...values,error:'',email:'',password:'',cpassword:'',success:true})
            }
        })
        .catch(err=>console.log(err))
        

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
           Password has been reset successfully
        </div>

    )


    return (
        <>
            <Nav />

            <div className="container">
                <div className="col-md-6 offset-md-3 p-3 mt-3 mb-3 shadow-lg">
                    <form>
                        {showError()}
                        {showSuccess()}

                        <div className="col-12 mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" id="email" name="email" placeholder="Email" onChange={handleChange('email')} value={email} />
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={handleChange('password')} value={password} />
                        </div>

                        <div className="col-12 mb-3">
                            <label htmlFor="cpassword">Confirm Password</label>
                            <input type="password" className="form-control" id="password" name="cpassword" placeholder="Confirm Password" onChange={handleChange('cpassword')} value={cpassword} />
                        </div>

                        <div className="mb-3">
                            <button className="btn btn-primary" onClick={clickSubmit}>Reset Password</button>
                        </div>

                    </form>
                </div>
            </div>


            <Footer />

        </>
    )
}

export default ResetPassword
