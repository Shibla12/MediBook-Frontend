import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  getAppointmentsAPI,
  updateAppointmentAPI
} from '../services/api'

function EditAppointment() {

  const { id } = useParams()
  const navigate = useNavigate()

  const [appointment, setAppointment] = useState({
    patientName: '',
    age: '',
    gender: '',
    weight: '',
    phone: '',
    email: '',
    doctorName: '',
    department: '',
    date: '',
    time: '',
    reason: ''
  })

  const getAppointment = async () => {

    const response = await getAppointmentsAPI()

    const selectedAppointment = response.data.find(
      (item) => String(item.id) === String(id)
    )

    if (selectedAppointment) {

      setAppointment({
        patientName: selectedAppointment.patientName || '',
        age: selectedAppointment.age || '',
        gender: selectedAppointment.gender || '',
        weight: selectedAppointment.weight || '',
        phone: selectedAppointment.phone || '',
        email: selectedAppointment.email || '',
        doctorName: selectedAppointment.doctorName || '',
        department: selectedAppointment.department || '',
        date: selectedAppointment.date || '',
        time: selectedAppointment.time || '',
        reason: selectedAppointment.reason || ''
      })

    }

  }

  useEffect(() => {
    getAppointment()
  }, [id])

  const handleChange = (e) => {

    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    const response = await updateAppointmentAPI(id, appointment)
console.log("Edit Appointment Response:",response.data);

    alert('Appointment updated successfully!')

    navigate('/appointments')

  }

  return (

    <div className="booking-page">

      <div className="booking-container">

        <div className="booking-heading">

          <div className="booking-icon">
            <i className="fa-solid fa-pen-to-square"></i>
          </div>

          <h2>
            Edit Appointment
          </h2>

          <p>
            Update your appointment details below.
          </p>

        </div>

        <form onSubmit={handleSubmit}>

        

          <div className="booking-section">

            <h5>
              Patient Details
            </h5>

            <div className="mb-3">

              <label>
                Full Name
              </label>

              <input
                type="text"
                name="patientName"
                value={appointment.patientName}
                onChange={handleChange}
                className="form-control"
                required
              />

            </div>

            <div className="row">

              <div className="col-md-6 mb-3">

                <label>
                  Age
                </label>

                <input
                  type="number"
                  name="age"
                  value={appointment.age}
                  onChange={handleChange}
                  className="form-control"
                  min="1"
                  max="120"
                  required
                />

              </div>

              <div className="col-md-6 mb-3">

                <label>
                  Gender
                </label>

                <select
                  name="gender"
                  value={appointment.gender}
                  onChange={handleChange}
                  className="form-select"
                  required
                >

                  <option value="">
                    Select Gender
                  </option>

                  <option value="Male">
                    Male
                  </option>

                  <option value="Female">
                    Female
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>

            </div>

            <div className="mb-3">

              <label>
                Weight (kg)
              </label>

              <input
                type="number"
                name="weight"
                value={appointment.weight}
                onChange={handleChange}
                className="form-control"
                min="1"
                max="300"
                required
              />

            </div>

            <div className="row">

              <div className="col-md-6 mb-3">

                <label>
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={appointment.phone}
                  onChange={handleChange}
                  className="form-control"
                  required
                />

              </div>

              <div className="col-md-6 mb-3">

                <label>
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={appointment.email}
                  onChange={handleChange}
                  className="form-control"
                />

              </div>

            </div>

          </div>


        

          <div className="booking-section">

            <h5>
              Appointment Details
            </h5>

            <div className="mb-3">

              <label>
                Doctor Name
              </label>

              <input
                type="text"
                name="doctorName"
                value={appointment.doctorName}
                onChange={handleChange}
                className="form-control"
                required
              />

            </div>

            <div className="mb-3">

              <label>
                Department
              </label>

              <select
                name="department"
                value={appointment.department}
                onChange={handleChange}
                className="form-select"
                required
              >

                <option value="">
  Select Department
</option>

<option value="Cardiology">
  Cardiology
</option>

<option value="Neurology">
  Neurology
</option>

<option value="General Medicine">
  General Medicine
</option>

<option value="Dermatology">
  Dermatology
</option>

<option value="Pediatrics">
  Pediatrics
</option>

<option value="Gynecology">
  Gynecology
</option>

<option value="Orthopedics">
  Orthopedics
</option>

<option value="ENT">
  ENT
</option>

<option value="Ophthalmology">
  Ophthalmology
</option>

<option value="Pulmonology">
  Pulmonology
</option>
              </select>

            </div>

            <div className="row">

              <div className="col-md-6 mb-3">

                <label>
                  Appointment Date
                </label>

                <input
                  type="date"
                  name="date"
                  value={appointment.date}
                  onChange={handleChange}
                  className="form-control"
                  required
                />

              </div>

              <div className="col-md-6 mb-3">

                <label>
                  Appointment Time
                </label>

                <input
                  type="time"
                  name="time"
                  value={appointment.time}
                  onChange={handleChange}
                  className="form-control"
                  required
                />

              </div>

            </div>

            <div className="mb-4">

              <label>
                Reason for Visit
              </label>

              <textarea
                name="reason"
                value={appointment.reason}
                onChange={handleChange}
                className="form-control"
                rows="4"
                required
              ></textarea>

            </div>

          </div>


          <button
            type="submit"
            className="booking-submit-btn"
          >
            Update Appointment
           
                </button>

        </form>

      </div>

    </div>

  )

}

export default EditAppointment