import React from 'react'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as Yup from 'yup'

const FormValidation = () => {
    return (
        <>
        <Formik
        initialValues={{firstName:'',lastName:'',email:'',password:'',cpassword:''}}
        validationSchema={Yup.object({
            firstName:Yup.string()
            .max(20,'Must be 20 characters or less')
            .required('Firstname must be required'),

            lastName:Yup.string()
            .max(20,'Must be 20 characters or less')
            .required('Lastname is required'),

            email:Yup.string()
            .email('Inavalid email please write valid one')
            .required('Email is required'),

            password:Yup.string()
            .matches(/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain 8 characters,One Uppercase,One Lowercase,One Number and one special case Character")
            .required('Required Field'),

            cpassword:Yup.string()
            .required('Required Field')
            .oneOf([Yup.ref("password"),null],"password and confirm password must match")

        })}
        >
            <div className="col-md-6  offset-md-3 p-3 mt-4 shadow-lg">
              <Form>
                  <div className="mb-3">
                      <label htmlFor="firstName">FirstName</label>
                      <Field type="text" name="firstName" className="form-control"/>
                      <ErrorMessage name="firstName">
                          {msg=><div style={{color:'red'}}>{msg}</div>}
                      </ErrorMessage>
                  </div>
                  <div className="mb-3">
                      <label htmlFor="lastName">LastName</label>
                      <Field type="text" name="lastName" className="form-control"/>
                      <ErrorMessage name="lastName">
                          {msg=><div style={{color:'red'}}>{msg}</div>}
                      </ErrorMessage>
                  </div>
                  <div className="mb-3">
                      <label htmlFor="email">Email</label>
                      <Field type="email" name="email" className="form-control"/>
                      <ErrorMessage name="email">
                          {msg=><div style={{color:'red'}}>{msg}</div>}
                      </ErrorMessage>
                  </div>
                  <div className="mb-3">
                      <label htmlFor="password">Password</label>
                      <Field type="password" name="password" className="form-control"/>
                      <ErrorMessage name="password">
                          {msg=><div style={{color:'red'}}>{msg}</div>}
                      </ErrorMessage>
                  </div>
                  <div className="mb-3">
                      <label htmlFor="cpassword">Confirm Password</label>
                      <Field type="password" name="cpassword" className="form-control"/>
                      <ErrorMessage name="cpassword">
                          {msg=><div style={{color:'red'}}>{msg}</div>}
                      </ErrorMessage>
                  </div>
                  <div className="mb-3">
                      <button type="submit" className="btn btn-primary">Register</button>
                  </div>

              </Form>
            </div>
        </Formik>
            
        </>
    )
}

export default FormValidation
