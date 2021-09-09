import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from "../components/Footer"

const OrderSuccess = () => {
    return (
        <>
        <Nav/>
        <div className="container-fluid mb-5">
            <div className="row justify-content-center">
                <div className="col-6 mt-5 text-center">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/48-checkmark-cross/success-green-check-mark.png" className="img-fluid my-5 d-block mx-auto" alt="order success" height="200" width="200"
                    />
                    <h2>Your Order has been placed successfully</h2>
                    <Link to="#">Go to Orders</Link>
                </div>
            </div>
        </div>

        <Footer/>
            
        </>
    )
}

export default OrderSuccess
