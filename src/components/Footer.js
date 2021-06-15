import React from 'react'
import {Link} from 'react-router-dom'
import './footer.css'

const Footer = () => {
    return (
        <>
        <footer className="container-fluid py-5">
  <div className="row">
    <div className="col-12 col-md">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="d-block mb-2" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
      <small className="d-block mb-3 text-muted">&copy; 2017–2021</small>
    </div>
    <div className="col-6 col-md">
      <h5>Features</h5>
      <ul className="list-unstyled text-small">
        <li><Link className="link-secondary" to="#">Cool stuff</Link></li>
        <li><Link className="link-secondary" to="#">Random feature</Link></li>
        <li><Link className="link-secondary" to="#">Team feature</Link></li>
        <li><Link className="link-secondary" to="#">Stuff for developers</Link></li>
        <li><Link className="link-secondary" to="#">Another one</Link></li>
        <li><Link className="link-secondary" to="#">Last time</Link></li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h5>Resources</h5>
      <ul className="list-unstyled text-small">
        <li><Link className="link-secondary" to="#">Resource name</Link></li>
        <li><Link className="link-secondary" to="#">Resource</Link></li>
        <li><Link className="link-secondary" to="#">Another resource</Link></li>
        <li><Link className="link-secondary" to="#">Final resource</Link></li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h5>Resources</h5>
      <ul className="list-unstyled text-small">
        <li><Link className="link-secondary" to="#">Business</Link></li>
        <li><Link className="link-secondary" to="#">Education</Link></li>
        <li><Link className="link-secondary" to="#">Government</Link></li>
        <li><Link className="link-secondary" to="#">Gaming</Link></li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h5>About</h5>
      <ul className="list-unstyled text-small">
        <li><Link className="link-secondary" to="#">Team</Link></li>
        <li><Link className="link-secondary" to="#">Locations</Link></li>
        <li><Link className="link-secondary" to="#">Privacy</Link></li>
        <li><Link className="link-secondary" to="#">Terms</Link></li>
      </ul>
    </div>
  </div>
</footer>
            
        </>
    )
}

export default Footer
