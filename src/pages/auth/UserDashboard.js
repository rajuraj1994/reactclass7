import React,{useEffect} from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

import { useDispatch,useSelector } from 'react-redux'
import { myOrders , clearErrors } from '../../actions/orderActions'
import { toast } from 'react-toastify'

const UserDashboard = () => {
    const dispatch=useDispatch()
    const{loading,error,orders}=useSelector(state=>state.myOrders)

    useEffect(() => {
       dispatch(myOrders())

       if(error){
           toast.error(error)
           dispatch(clearErrors)
       }
    }, [dispatch,toast,error])
    return (
        <>
        <Nav/>
        <h1>User Profile</h1>

        <div className="container">
            <div className="d-flex justify-content-center">
                <div className="col-md-10">
                    <h2 className="text-center text-muted">My Orders History</h2>
                    <table className="table table-success table-striped text-center table-bordered">
                        <thead>
                            <tr>
                                <th>OrderId</th>
                                <th>Number of Items</th>
                                <th>Total Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders && orders.map((order,i)=>(
                                <tr>
                                    <td>{order._id}</td>
                                    <td>{order.orderItems.length}</td>
                                    <td>{`Rs.${order.totalPrice}`}</td>
                                    <td>
                                        {order.status && String(order.status).includes('delivered')? <p style={{color:'green'}}>{order.sttaus}</p> 
                                        :<p style={{color:'red'}}>{order.status}</p>}
                                    </td>

                                </tr>

                            ))}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


        <Footer/>
            
        </>
    )
}

export default UserDashboard
