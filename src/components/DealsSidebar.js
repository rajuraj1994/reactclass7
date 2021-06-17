import React from'react'
import { Link } from 'react-router-dom'

const DealsSidebar = () => {
    return (
        <>
            <div className="col-md-2 p-2 shadow-lg" style={{ backgroundColor: '#f5f5f5' }}>
                <h4>Categories</h4>
                <form>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" />
                        <label className="form-check-label">Mobile</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" />
                        <label className="form-check-label">Computers</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" />
                        <label className="form-check-label">Baby</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" />
                        <label className="form-check-label">Beauty</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" />
                        <label className="form-check-label">Books</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" />
                        <label className="form-check-label">Camera & Photo</label>
                    </div>
                    <Link className="text-decoration-none" to="#">See More Categories</Link>


                </form>
                <h4>Deal Type</h4>
                <Link className="text-decoration-none" to="#">Deal of the Day</Link> <br/>
                <Link className="text-decoration-none" to="#">Lightning Deals</Link> <br/>
                <Link className="text-decoration-none" to="#">Savings & Sales</Link> <br/>
                <Link className="text-decoration-none" to="#">Prime Early Access Deals</Link><br/>

            </div>
        </>
    )
}

export default DealsSidebar
