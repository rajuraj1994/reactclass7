import React,{Fragment} from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, removeItemFromCart } from '../actions/cartActions'
import { ToastContainer, toast } from 'react-toastify';

const Cart = () => {
    const dispatch = useDispatch()
    const { cartItems } = useSelector(state => state.cart)

    const increaseQty=(id,quantity,stock)=>{
        const newQty=quantity+1
        if(newQty > stock)
        return
        dispatch(addItemToCart(id,newQty))
    }
    const decreaseQty=(id,quantity)=>{
        const newQty=quantity-1
        if(newQty < 1)
        return
        dispatch(addItemToCart(id,newQty))
    }
    const removeCartHandler=(id,name)=>{
        dispatch(removeItemFromCart(id))
        toast(`${name} remove from the Cart`)
    }

    return (
        <>
            <Nav />
            <ToastContainer position="top-center" autoClose={2000}/>
            {cartItems.length === 0 ? <center><h2 className="mt-5 text-danger">Your Cart is Empty</h2></center> : (
                <>
                <div className="container">
                    <center><h2 className="mt-5">Your Cart: <b>{cartItems.length} items</b></h2></center>
                    <div className="row d-flex justify-content-evenly mb-3">
                        <div className="col-md-8 shadow">
                            {cartItems.map((item, i) => (
                                <Fragment key={i}>
                                <hr/>
                                    <div className="row align-items-center" >
                                    
                                        <div className="col-md-3">
                                            <img src={`http://localhost:8000/${item.image}`} alt={item.name} width="130" />

                                        </div>
                                        <div className="col-md-3">
                                            <Link className="text-decoration-none text-muted" to="">{item.name}</Link>

                                        </div>
                                        <div className="col-md-2">
                                            <p className="text-warning">Rs.{item.price}</p>

                                        </div>
                                        <div className="col-md-3">
                                           <div className="d-flex just-content-evenly">
                                               <button className="btn btn-danger" onClick={()=>decreaseQty(item.product,item.quantity)}>-</button>&nbsp;
                                               <input type="number" value={item.quantity} className="form-control border-0" readOnly/>&nbsp;
                                               <button className="btn btn-primary" onClick={()=>increaseQty(item.product,item.quantity,item.stock)}>+</button>
                                           </div>

                                        </div>
                                        <div className="col-md-1">
                                            <button className="btn btn-danger" onClick={()=>removeCartHandler(item.product,item.name)}><i class='bx bxs-trash fs-5'></i></button>
                                            
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
                            <p>Subtotal :<span>{cartItems.reduce((ac,item)=>(ac+Number(item.quantity)),0)} (Units)</span></p>
                            <p>Subtotal :<span>Rs.{cartItems.reduce((ac,item)=>(ac+item.quantity*item.price),0)} </span></p>
                            <hr/>
                            <button className="btn btn-warning">Check Out</button>
                        </div>
                        </div>
                    </div>
                    </div>

                </>
            )}

            <Footer />

        </>
    )
}

export default Cart
