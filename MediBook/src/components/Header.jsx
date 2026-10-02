import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/imagee.png'

function Header() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container">

        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="MediBook"
            className="medi-logo"
          />
        </Link>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        <div className={`navbar-nav ms-auto ${menuOpen ? 'show-menu' : ''}`}>
          <Link
            className="nav-link"
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            className="nav-link"
            to="/appointments"
            onClick={() => setMenuOpen(false)}
          >
            Appointments
          </Link>

          <Link
            className="nav-link"
            to="/doctors"
            onClick={() => setMenuOpen(false)}
          >
            Doctors
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default Header