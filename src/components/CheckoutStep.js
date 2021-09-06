import React from 'react'
import { Link } from 'react-router-dom'

const CheckoutStep = ({shipping,confirmOrder,payment}) => {
    return (
        <>
        <div className="d-flex justify-content-center">
            {shipping ?<Link>
            <button className="btn btn-primary">ShippingInfo</button>
            </Link> :
            <Link to="#" disabled>
                 <button className="btn btn-primary" disabled>ShippingInfo</button>
                </Link>}

                {confirmOrder ?<Link>
            <button className="btn btn-primary">Confirm Order</button>
            </Link> :
            <Link to="#" disabled>
                 <button className="btn btn-primary" disabled>Confirm Order</button>
                </Link>}

                {payment ?<Link>
            <button className="btn btn-primary">Payment</button>
            </Link> :
            <Link to="#" disabled>
                 <button className="btn btn-primary" disabled>Payment</button>
                </Link>}

        </div>
            
        </>
    )
}

export default CheckoutStep
