//use rfc tab -> react function component
import React from 'react'
//impt import prop types
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode === '#343a40' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} bg-${props.mode === '#343a40' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
        <div className="container-fluid" style={{ color: props.mode === '#343a40' ? '#fff' : '#000' }}>
          <Link className="navbar-brand" to="#" style={{ color: props.mode === '#343a40' ? '#fff' : '#000' }}>
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" style={{ color: props.mode === '#343a40' ? '#fff' : '#000' }}>
                  Home
                </Link>
                {/* <a className="nav-link active" aria-current="page" href="#" style={{ color: props.mode === '#343a40' ? '#fff' : '#000' }}>
                  Home
                </a> */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{ color: props.mode === '#343a40' ? '#fff' : '#000' }}>
                  {props.aboutText}
                </Link>
                {/* <a className="nav-link" href="/about" style={{ color: props.mode === '#343a40' ? '#fff' : '#000' }}>
                  {props.aboutText}
                </a> */}
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode==='#878E88'? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" style= {{color: props.mode==='#878E88'? 'dark' : 'light'}} htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
            </div>
          </div>
        </div>
      </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

