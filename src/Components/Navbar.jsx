import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="d-flex  flex-row align-items-center p-3 px-4 mb-3 bg-white border-bottom border-primary">
  <h5 className="my-0  font-weight-normal">Company name</h5>
  <nav className="my-2  mr-3 ms-auto">
    <Link className="p-2 text-dark" to="/">Pricing</Link>
    <Link className="p-2 text-dark" to="/features">Features</Link>
    <Link className="p-2 text-dark" to="/support">Support</Link>
    <Link className="p-2 text-dark" to="/enterprise">Enterprise</Link>
  </nav>
  <Link className="btn btn-outline-primary" to="#">Sign up</Link>
  </div>
</>
  )
}

export default Navbar