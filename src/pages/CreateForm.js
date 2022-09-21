import React from 'react'
import { Link } from 'react-router-dom'
import SurveyForm from '../components/SurveyForm'
import DisplayTest from '../components/DisplayTest'

const CreateForm = () => {
  return (
    <div className='bg-light min-h-100v'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <Link to="/" className="nav-link" >Back</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <DisplayTest />
    </div>
  )
}

export default CreateForm