import React from 'react'
import { Link } from 'react-router-dom'

function Home() {

  return (

    <div className="home-page">

      <div className="home-content">

        <div className="health-icon">
          <i className="fa-solid fa-heart-pulse"></i>
        </div>

        <h1>
          Your Health <span>Matters</span>
        </h1>

        <p>
          Take care of your health with easy and
          convenient hospital appointments.
        </p>

        <Link
          to="/book"
          className="book-btn"
        >
          Book Appointment
          <span>→</span>
        </Link>
        <button
          className="emergency-btn"
          onClick={() => alert("Emergency Contact\n\nCall: +91 98765 43210")}
        >
          <i className="fa-solid fa-phone"></i>
          Emergency: Call Now
        </button>
        <div className="home-features">
          <span>Simple</span>
          <b>•</b>
          <span>Quick</span>
          <b>•</b>
          <span>Convenient</span>
        </div>

      </div>

    </div>

  )
}

export default Home