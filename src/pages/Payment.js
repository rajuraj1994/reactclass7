import React, { useEffect} from 'react'
import {API} from '../config'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {clearErrors, createOrder,Errors} from '../actions/orderActions'

import CheckoutStep from '../components/CheckoutStep'
import axios from 'axios'
import { isAuthenticated } from './auth'
import { useStripe,useElements,CardNumberElement,CardExpiryElement,CardCvcElement } from '@stripe/react-stripe-js'
import { toast,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

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
    const{user,token}=isAuthenticated()
    const{cartItems,shippingInfo}=useSelector(state=>state.cart)
    const{error}=useSelector(state=>state.newOrder)


    useEffect(()=>{
          if(error){
              toast.error(error)
              dispatch(clearErrors)
          }
    },[dispatch,toast,error])

    const order={
        orderItems:cartItems,
        shippingAddress1:shippingInfo.shippingAddress1,
        shippingAddress2:shippingInfo.shippingAddress2,
        city:shippingInfo.city,
        zip:shippingInfo.zip,
        country:shippingInfo.country,
        phone:shippingInfo.phone,
        user:user._id

    }

 

    const orderInfo=JSON.parse(sessionStorage.getItem('orderInfo'))

    const paymentData={
        amount:Math.round(orderInfo.totalPrice*100)
    }

    const submitHandler=async (e)=>{
      e.preventDefault();
      document.querySelector('#pay_btn').disabled=true
      let res
      try{
          const config={
              headers:{
                  "Content-Type":'application/json',
                   Authorization:`Bearer ${token}`
              }
          }
          res=await axios.post(`${API}/payment/process`,paymentData,config)

          const client_secret=res.data.client_secret
          console.log(client_secret)

          if(!stripe || !elements){
              return
          }
          const result=await stripe.confirmCardPayment(`${client_secret}`,{
              payment_method:{
                  card:elements.getElement(CardNumberElement),
                  billing_details:{
                      name:user.name,
                      email:user.email
                  }
              }
          })
          if(result.error){
              toast.error(result.error.message)
              document.querySelector('#pay_btn').disabled=false
              

          }
          else{
              //payment is processsed or not
              if(result.paymentIntent.status==='succeeded'){
                 order.paymentInfo={
                     id:result.paymentIntent.id,
                     status:result.paymentIntent.status
                 }
                 dispatch(createOrder(order))
                 localStorage.removeItem('cartItems')

                  history.push('/success')
              }
              else{
                  toast.error('There is some error while processing')
              }
          }

      }
      catch(error){
          document.querySelector('#pay_btn').disabled=false
          toast.error(error.message)
      }
    }
    return (
        <>
      <Nav/>
      <ToastContainer theme="colored"/>
        <div className="container">
                 <CheckoutStep shipping confirmOrder payment/>
                <div className="col-md-5 offset-md-3 p-3 mb-3 mt-4 shadow-lg">
                    <form  onSubmit={submitHandler}>
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
                            <button className="btn btn-warning form-control" id="pay_btn"
                            >Pay{`-${orderInfo&& orderInfo.totalPrice}`}</button>
                        </div>
                    </form>

                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Payment
