import React, { useState } from 'react'
import { addAppointmentAPI } from '../services/api'

function BookAppointment() {

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

  const doctors = [
    {
      name: 'Dr. Rahul',
      department: 'Cardiology',
      available: true,
      time: '10:00 AM - 1:00 PM'
    },
    {
      name: 'Dr. Nikhil',
      department: 'Cardiology',
      available: true,
      time: '2:00 PM - 5:00 PM'
    },
    {
      name: 'Dr. Anjali',
      department: 'Neurology',
      available: false,
      time: '10:00 AM - 1:00 PM'
    },
    {
      name: 'Dr. Vivek',
      department: 'Neurology',
      available: true,
      time: '2:00 PM - 5:00 PM'
    },
    {
      name: 'Dr. Meera',
      department: 'General Medicine',
      available: true,
      time: '9:00 AM - 12:00 PM'
    },
    {
      name: 'Dr. Arun Kumar',
      department: 'General Medicine',
      available: true,
      time: '2:00 PM - 5:00 PM'
    },
    {
      name: 'Dr. Fathima',
      department: 'Dermatology',
      available: true,
      time: '10:00 AM - 1:00 PM'
    },
    {
      name: 'Dr. Neha',
      department: 'Dermatology',
      available: true,
      time: '2:00 PM - 5:00 PM'
    },
    {
      name: 'Dr. Arun',
      department: 'Pediatrics',
      available: true,
      time: '9:00 AM - 12:00 PM'
    },
    {
      name: 'Dr. Riya',
      department: 'Pediatrics',
      available: true,
      time: '2:00 PM - 5:00 PM'
    },
    {
      name: 'Dr. Sneha',
      department: 'Gynecology',
      available: false,
      time: '10:00 AM - 1:00 PM'
    },
    {
      name: 'Dr. Anitha',
      department: 'Gynecology',
      available: true,
      time: '2:00 PM - 5:00 PM'
    },
    {
      name: 'Dr. Akhil',
      department: 'Orthopedics',
      available: true,
      time: '10:00 AM - 1:00 PM'
    },
    {
      name: 'Dr. Suresh',
      department: 'Orthopedics',
      available: true,
      time: '2:00 PM - 5:00 PM'
    },
    {
      name: 'Dr. Priya',
      department: 'ENT',
      available: true,
      time: '9:00 AM - 12:00 PM'
    },
    {
      name: 'Dr. Faisal',
      department: 'ENT',
      available: true,
      time: '2:00 PM - 5:00 PM'
    },
    {
      name: 'Dr. Kavya',
      department: 'Ophthalmology',
      available: true,
      time: '10:00 AM - 1:00 PM'
    },
    {
      name: 'Dr. Manoj',
      department: 'Ophthalmology',
      available: true,
      time: '2:00 PM - 5:00 PM'
    },
    {
      name: 'Dr. Adarsh',
      department: 'Pulmonology',
      available: true,
      time: '9:00 AM - 12:00 PM'
    },
    {
      name: 'Dr. Swetha',
      department: 'Pulmonology',
      available: true,
      time: '2:00 PM - 5:00 PM'
    }
  ]

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.department === appointment.department
  )

  const selectedDoctor = doctors.find(
    (doctor) =>
      doctor.name === appointment.doctorName
  )

  const handleChange = (e) => {

    const { name, value } = e.target

    setAppointment({
      ...appointment,
      [name]: value
    })

  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      // Generate OP number
      const opNumber =
        `OP-${1001 + Math.floor(Math.random() * 8999)}`

      // Find selected doctor
      const selectedDoctor = doctors.find(
        (doctor) =>
          doctor.name === appointment.doctorName
      )

      // Save appointment
      const addResponse = await addAppointmentAPI({
        ...appointment,
        opNumber,
        time: selectedDoctor.time
      })

      console.log(
        'BookAppointment Response:',
        addResponse.data
      )

      alert('Appointment booked successfully!')

      // Reset form
      setAppointment({
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

    } catch (error) {

      console.log(error)

      alert(
        'Something went wrong. Please try again!'
      )

    }

  }

  return (

    <div className="booking-page">

      <div className="booking-container">

        <div className="booking-heading">

          <div className="booking-icon">
            <i className="fa-solid fa-calendar-check"></i>
          </div>

          <h2>
            Book an Appointment
          </h2>

          <p>
            Schedule your hospital visit quickly and easily.
          </p>

        </div>

        <form onSubmit={handleSubmit}>

          {/* PATIENT DETAILS */}

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
                placeholder="Enter your full name"
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
                  placeholder="Enter age"
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
                placeholder="Enter weight"
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
                  placeholder="Enter phone number"
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
                  placeholder="Enter email address"
                />

              </div>

            </div>

          </div>

          {/* APPOINTMENT DETAILS */}

          <div className="booking-section">

            <h5>
              Appointment Details
            </h5>

            {/* DEPARTMENT */}

            <div className="mb-3">

              <label>
                Department
              </label>

              <select
                name="department"
                value={appointment.department}
                onChange={(e) => {

                  setAppointment({
                    ...appointment,
                    department: e.target.value,
                    doctorName: '',
                    time: ''
                  })

                }}
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

            {/* DOCTOR */}

            <div className="mb-3">

              <label>
                Doctor Name
              </label>

              <select
                name="doctorName"
                value={appointment.doctorName}
                onChange={handleChange}
                className="form-select"
                required
                disabled={!appointment.department}
              >

                <option value="">
                  {appointment.department
                    ? 'Select Doctor'
                    : 'First select Department'}
                </option>

                {filteredDoctors.map(
                  (doctor) => (

                    <option
                      key={doctor.name}
                      value={doctor.name}
                      disabled={!doctor.available}
                    >

                      {doctor.name}

                      {!doctor.available
                        ? ' - On Leave'
                        : ''}

                    </option>

                  )
                )}

              </select>

              {/* CONSULTATION TIME */}

              {selectedDoctor &&
                selectedDoctor.available && (

                  <div className="alert alert-info mt-2">

                    <i className="fa-solid fa-clock me-2"></i>

                    <strong>
                      Consultation Time:
                    </strong>{' '}

                    {selectedDoctor.time}

                  </div>

                )}

            </div>

            {/* APPOINTMENT DATE */}

            <div className="mb-3">

              <label>
                Appointment Date
              </label>

              <input
                type="date"
                name="date"
                value={appointment.date}
                onChange={handleChange}
                className="form-control"
                min={
                  new Date()
                    .toISOString()
                    .split('T')[0]
                }
                required
              />

            </div>

            {/* REASON */}

            <div className="mb-4">

              <label>
                Reason for Visit
              </label>

              <textarea
                name="reason"
                value={appointment.reason}
                onChange={handleChange}
                className="form-control"
                placeholder="Briefly describe your reason for the visit"
                rows="4"
                required
              ></textarea>

            </div>

          </div>

          {/* SUBMIT */}

          <button
            type="submit"
            className="booking-submit-btn"
          >

            Book Appointment

            <span>
              →
            </span>

          </button>

        </form>

      </div>

    </div>

  )
}

export default BookAppointment