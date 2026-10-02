import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import BookAppointment from './pages/BookAppointment'
import Appointments from './pages/Appointments'
import EditAppointment from './pages/EditAppointment'
import Doctors from './pages/Doctors'

function App() {

  return (

    <>
      <Header />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/book"
          element={<BookAppointment />}
        />
        <Route
          path="/appointments"
          element={<Appointments />}
        />
<Route
          path="/edit/:id"
          element={<EditAppointment />}

        />
        <Route
          path="*"
          element={<Home />}

        />

        <Route
          path="/doctors"
          element={<Doctors/>}

        />
      </Routes>
    </>

  )
}

export default App