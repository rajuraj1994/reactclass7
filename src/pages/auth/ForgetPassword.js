import React, { useState } from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { forgetpassword } from './index'

const ForgetPassword = () => {
    const [values, setValues] = useState({
        email: '',
        error: '',
        success: false
    })

    const { email, error, success } = values

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value })
    }

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false })
        //forgetpassword function
        forgetpassword({ email })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, success: false })
                }
                else {
                    setValues({ ...values, email: '', success: true })
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
            Reset Password link has been sent to your email
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

                        <div className="mb-3">
                            <button className="btn btn-primary" onClick={clickSubmit}>Forget Password</button>
                        </div>

                    </form>
                </div>
            </div>


            <Footer />

        </>
    )
}

export default ForgetPassword
