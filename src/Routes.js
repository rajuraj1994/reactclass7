import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import Show from './context/Show'
import DataFetch from './hooks/DataFetch'
import Increment from './hooks/Increment'
import Main from './hooks/Main'
import Test from './hooks/Test'
import AdminDashboard from './pages/auth/AdminDashboard'
import AdminRoute from './pages/auth/AdminRoute'
import UserDashboard from './pages/auth/UserDashboard'
import PrivateRoute from './pages/auth/PrivateRoute'
import Confirm from './pages/auth/Confirm'
import Signin from './pages/auth/Signin'
import Signup from './pages/auth/Signup'
import Deals from './pages/Deals'
import Home from './pages/Home'
import FormValidation from './validation/FormValidation'
import ForgetPassword from './pages/auth/ForgetPassword'
import ResetPassword from './pages/auth/ResetPassword'
import AddCategory from './admin/AddCategory'
import AddProduct from './admin/AddProduct'
import AllProducts from './admin/AllProducts'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Shipping from './pages/Shipping'
import ConfirmOrder from './pages/ConfirmOrder'
import Payment from './pages/Payment'

import {API} from './config'
import axios from 'axios'

//payment
import{Elements} from '@stripe/react-stripe-js'
import{loadStripe} from '@stripe/stripe-js'
import OrderSuccess from './pages/OrderSuccess'

const Routes = () => {
    const[stripeApiKey,setStripeApiKey]=useState('')
      
    useEffect(()=>{
        async function getStripeApiKey(){
            const {data}= await axios.get(`${API}/stripeapi`)
            setStripeApiKey(data.stripeApiKey)
        }

        getStripeApiKey()
    })

    return (
        <>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/deals" component={Deals}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/signin" component={Signin}/>
                <Route exact path="/email/confirmation/:token" component={Confirm}/>
                <Route exact path="/forgetpassword" component={ForgetPassword}/>
                <Route exact path="/reset/password/:token" component={ResetPassword}/>
                <Route exact path="/productdetails/:productId" component={ProductDetail}/>
                <Route exact path="/cart" component={Cart}/>

            {/* admin */}
            <AdminRoute exact path="/admin/dashboard" component={AdminDashboard}/>
            <AdminRoute exact path="/admin/addcategory" component={AddCategory}/>
            <AdminRoute exact path="/admin/addproduct" component={AddProduct}/>
            <AdminRoute exact path="/admin/allproduct" component={AllProducts}/>




            <PrivateRoute exact path="/user/dashboard" component={UserDashboard}/>
            <PrivateRoute exact path="/shipping" component={Shipping}/>
            <PrivateRoute exact path="/confirm" component={ConfirmOrder}/>
            <PrivateRoute exact path="/success" component={OrderSuccess}/>
            {stripeApiKey && 
            <Elements stripe={loadStripe(stripeApiKey)}>
            <PrivateRoute exact path="/payment" component={Payment}/>
            </Elements>
            }
           



             {/* hooks */}
             <Route exact  path="/hooks/increment" component={Increment}/>
             <Route exact path="/hooks/useEffect" component={Test}/>
             <Route exact path="/api/data" component={DataFetch}/>
             <Route exact path="/main" component={Main}/>
             {/* context api */}
             <Route exact path="/contextapi" component={Show}/>
             <Route exact path="/form/register" component={FormValidation}/>
               
            </Switch>
        </Router>
            
        </>
    )
}

export default Routes
