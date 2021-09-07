import React,{Fragment} from 'react'

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import {Link, withRouter } from 'react-router-dom'
import {  useSelector } from 'react-redux'
import CheckoutStep from '../components/CheckoutStep'
import { isAuthenticated } from './auth'

const ConfirmOrder = ({history}) => {
    const {cartItems,shippingInfo}=useSelector(state=>state.cart)
    const {user}=isAuthenticated()

    const totalPrice=cartItems.reduce((ac,item)=>(ac+item.quantity*item.price),0)

    const processToPayment=()=>{
        const data={
            totalPrice
        }
        sessionStorage.setItem('orderInfo',JSON.stringify(data))
        history.push('/payment')
    }
    return (
        <>
        <Nav/>
        <CheckoutStep shipping confirmOrder />
        <div className="container">
                            
                            <div className="row d-flex justify-content-evenly mb-3">
                                <div className="col-md-8 shadow">
                                <center><h2 className="mt-5">Shipping Info</h2></center>
                                    <div className="col-md-6 offset-md-3">
                                    <div><b>Name</b>:<span className="text-muted">{user.name}</span></div>
                                <div><b>Email</b>:<span className="text-muted">{user.email}</span></div>
                                <div><b>City</b>:<span className="text-muted">{shippingInfo.city}</span></div>
                                <div><b>ShippingAddress</b>:<span className="text-muted">{shippingInfo.shippingAddress1},{shippingInfo.shippingAddress2}</span></div>
                                <div><b>Phone</b>:<span className="text-muted">{shippingInfo.phone}</span></div>
                                    </div>

                                    <hr/>
                                <center><h2 className="mt-5">Your Cart items</h2></center>
                                <hr/>
                                    {cartItems.map((item, i) => (
                                        <Fragment key={i}>
                                            <hr />
                                            <div className="row align-items-center">
                                                <div className="col-md-3">
                                                    <img src={`http://localhost:8000/${item.image}`} alt={item.name} width="100" />
                                                </div>
                                                <div className="col-md-3">
                                                    <Link className="text-muted text-decoration-none" to="">{item.name}</Link>
                                                </div>
                                                <div className="col-md-2">
                                                    <p className="text-warning text-decoration-none">Rs.{item.price}X{item.quantity}=<b>Rs.{item.price*item.quantity}</b></p>
                                                </div>
                                                
                                                
                                            </div>
                                            <hr/>

                                        </Fragment>
                                      
                                    ))}
                                </div>
                                <div className="col-md-3">
                                    <div className="shadow p-3">
                                        <h4>Order Summary</h4>
                                        <hr/>
                                        <p>Subtotal : <span>{cartItems.reduce((ac,item)=>(ac+Number(item.quantity)),0)} (Units)</span></p>
                                        <p>Totalprice : Rs.<span>{totalPrice} </span></p>
                                        <hr/>
                                        <button className="btn btn-warning"
                                        onClick={processToPayment}
                                        >Proceed to Payment</button>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <Footer/>
            
        </>
    )
}

export default ConfirmOrder
