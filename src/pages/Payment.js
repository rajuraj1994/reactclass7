import React, { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingInfo } from '../actions/cartActions'
import CheckoutStep from '../components/CheckoutStep'
import axios from 'axios'
import { isAuthenticated } from './auth'
import { useStripe,useElements,CardNumberElement,CardExpiryElement,CardCvcElement } from '@stripe/react-stripe-js'

const options={
    style:{
        base:{
            fontSize:'16px'
        },
        invalid:{
            color:'#9e2146'
        }
    }
}

const Payment = ({history}) => {
    const stripe=useStripe()
    const elements=useElements()
    const dispatch=useDispatch()
    const{user}=isAuthenticated()
    const{cartItems,shippingInfo}=useSelector(state=>state.cart)
    return (
        <>
      <Nav/>
        <div className="container">
                 <CheckoutStep shipping confirmOrder payment/>
                <div className="col-md-5 offset-md-3 p-3 mb-3 mt-4 shadow-lg">
                    <form>
                        <h2 className="mb-3">Card Information </h2>
                        <div className="col-12 mb-3">
                            <label htmlFor="card-number">Card Number</label>
                            <CardNumberElement type="text" className="form-control" id="card-number"
                            options={options}
                                 />
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="card-expiry">Card Expiry</label>
                            <CardExpiryElement type="text" className="form-control" id="card-expiry"
                             options={options}
                                 />
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlFor="cvc">Card CVC</label>
                            <CardCvcElement type="text" className="form-control" id="cvc"
                             options={options}
                                 />
                        </div>
                        
                        <div className="col-12 mb-3">
                            <button className="btn btn-warning form-control"
                            onClick=""
                            >Pay</button>
                        </div>
                    </form>

                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Payment
