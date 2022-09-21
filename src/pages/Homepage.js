import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='position-relative wrapper'>
        <div className="position-absolute showcase">
            <h1 className='text-center'>Create your free survey form.</h1>
            <div className="text-center mt-5">
                <Link className='btn btn-primary d-inline btn-lg' to="/create-form">Get Started</Link>
            </div>
        </div>
    </div>
  )
}

export default Homepage