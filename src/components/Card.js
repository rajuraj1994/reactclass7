import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({product}) => {
    return (
        <>
  <Link to={`/productdetails/${product._id}`} className="text-decoration-none text-dark">    
  <div className="col">
    <div className="card shadow">
      <img src={`http://localhost:8000/${product.product_image}`} className="card-img-top" alt={product.product_name} style={{height:'200px'}}/>
      <div className="card-body">
       <center><h5 className="card-title">{product.product_name}</h5></center> 
       <center><h5>Rs.{product.product_price}</h5></center>
       <center><button className="btn btn-info">View Details</button></center>
      </div>
    </div>
  </div>
  </Link> 
  
            
        </>
    )
}

export default Card
