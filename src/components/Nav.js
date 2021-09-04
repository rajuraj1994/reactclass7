import React from 'react'
import { Link,withRouter } from 'react-router-dom'
import {isAuthenticated,signout} from '../pages/auth'
import { useSelector } from 'react-redux'
import './nav.css'
const Nav = ({history}) => {
  const  {cartItems}  = useSelector(state => state.cart)
  return (
    <>
      <div className="container-fluid top-nav ">
        <div className="row align-items-center">
          <div className="col-md-3 d-flex">
            <Link className="navbar-brand" to="/">
            <img src="/images/logo.png" alt="" className="img-fluid" style={{width:"100px"}}/> 
            </Link>
            <div className="d-flex align-items-center">
              <div><i className='bx bxs-location-plus text-white custom-link'></i></div>
              <div><p style={{color:'#CCCCCC',fontSize:'12px',marginBottom:'-5px'}}>Deliver to</p>
              <span style={{color:"white",fontWeight:'bold'}}>Nepal</span>
              </div>
            </div>
          </div>
          <div className="col-md-7">
          <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-warning" type="submit">Search</button>
            </form>
          </div>
          <div className="col-md-2">
            <ul className="d-flex justify-content-end align-items-center">
              {isAuthenticated()&& isAuthenticated().user.role===1 && (
                 <li className="list-unstyled mt-2"><Link to="/admin/dashboard" className="text-decoration-none  px-2 text-white">Dashboard</Link></li>
              )}
               {isAuthenticated()&& isAuthenticated().user.role===0 && (
                 <li className="list-unstyled mt-2"><Link to="/user/dashboard" className="text-decoration-none  px-2 text-white">Profile</Link></li>
              )}
              {!isAuthenticated() && (
                <>
                 <li className="list-unstyled mt-2"><Link to="/signin" className="text-decoration-none px-2 custom-link"><i className='bx bxs-user'></i></Link></li>
              <li className="list-unstyled mt-2"><Link to="/signup" className="text-decoration-none px-2 custom-link"><i className='bx bxs-user-plus'></i></Link></li>

                </>
              )}
             
              {isAuthenticated() && (
                <button className="btn btn-outline-warning mt-2" onClick={()=>signout(()=>{
                  history.push('/')
                })}>Signout</button>
              )}
              <li className="list-unstyled mt-2"><Link to="/cart" className="text-decoration-none px-2 custom-link"><i className='bx bxs-cart-add position-relative'>
              <span className="position-absolute top-0 start-100 bg-warning badge rounded-pill  translate-middle text-dark" style={{fontSize:'12px'}}>
    <span>{cartItems.length}</span>
  </span>

              </i>
              
              </Link>
              
              </li>
            </ul>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light custom-nav">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/deals">Deals</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="#">Customer Service</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="#">Gift Cards</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="#">Registry</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="#">Sell</Link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>


    </>
  )
}

export default withRouter(Nav)
