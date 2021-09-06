import React from 'react'
import { Link } from 'react-router-dom'

const CheckoutStep = ({ shipping, confirmOrder, payment }) => {
    return (
        <>
            <div className="col-md-5 offset-md-3 p-3 mb-3 mt-4">
                <div className="d-flex justify-content-evenly">
                    {shipping ? <Link to="/shipping">
                        <button className="btn btn-success">Shipping Info</button>
                    </Link> :
                        <Link to="#">
                            <button className="btn btn-light disabled">Shipping Info</button>

                        </Link>
                    }

                    {confirmOrder ? <Link to="/confirm">
                        <button className="btn btn-success">Confirm Order</button>
                    </Link> :
                        <Link to="#">
                            <button className="btn btn-light disabled">Confirm Order</button>

                        </Link>
                    }

                    {payment ? <Link to="/payment">
                        <button className="btn btn-success">Payment</button>
                    </Link> :
                        <Link to="#">
                            <button className="btn btn-light disabled">Payment</button>

                        </Link>
                    }



                </div>

            </div>

        </>
    )
}

export default CheckoutStep
