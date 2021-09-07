import React, { useEffect} from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { withRouter } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingInfo } from '../actions/cartActions'
import CheckoutStep from '../components/CheckoutStep'

import{useStripe,useElements,CardNumberElement,CardExpiryElement,CardCvcElement} from '@stripe/react-stripe-js'
import axios from 'axios'
import { isAuthenticated } from './auth'

const Payment = ({history}) => {
    const stripe=useAlert()
    const elements=useElements()
    const dispatch=useDispatch()
    const {user}=isAuthenticated()
    const{cartItems,shippingInfo}=useSelector(state=>state.cart)

    return (
        <>
        <CheckoutStep shipping confirmOrder payment/>
            
        </>
    )
}

export default Payment
