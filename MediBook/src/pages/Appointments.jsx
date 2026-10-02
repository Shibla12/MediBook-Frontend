import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getAppointmentsAPI,
  deleteAppointmentAPI
} from '../services/api'
import { setAppointments } from '../redux/appointmentSlice'

function Appointments() {

  const dispatch = useDispatch()

  const appointments = useSelector(
    (state) => state.appointments
  )

  const [search, setSearch] = useState('')
  const [doctorFilter, setDoctorFilter] = useState('')
  const [departmentFilter, setDepartmentFilter] = useState('')
  const [dateFilter, setDateFilter] = useState('')

  const getAppointments = async () => {

    const response = await getAppointmentsAPI()

    console.log("Appointments Response:", response.data)

    dispatch(setAppointments(response.data))
  }

  useEffect(() => {
    getAppointments()
  }, [])

  const handleDelete = async (id) => {

    const response = await deleteAppointmentAPI(id)

    console.log("Delete Appointment Response:", response.data)

    getAppointments()
  }

  const handlePrint = (appointment) => {

    const printWindow = window.open('', '_blank')

    const opNumber = appointment.opNumber || 'OP-NA'

    printWindow.document.write(`
      <html>

        <head>

          <title>MediBook - Appointment</title>

          <style>

            * {
              box-sizing: border-box;
            }

            body {
              margin: 0;
              padding: 40px;
              font-family: Arial, sans-serif;
              background: #f4f9ff;
              color: #26384a;
            }

            .print-container {
              max-width: 750px;
              margin: auto;
              background: white;
              border-radius: 16px;
              padding: 35px;
            }

            .header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              border-bottom: 2px solid #e5edf6;
              padding-bottom: 20px;
              margin-bottom: 25px;
            }

            .logo {
              color: #0d6efd;
              font-size: 28px;
              font-weight: bold;
            }

            .subtitle {
              color: #718096;
              font-size: 13px;
              margin-top: 5px;
            }

            .op-number {
              text-align: right;
            }

            .op-label {
              color: #718096;
              font-size: 12px;
              margin-bottom: 4px;
            }

            .op-value {
              color: #0d6efd;
              font-size: 20px;
              font-weight: bold;
            }

            .appointment-title {
              text-align: center;
              margin-bottom: 25px;
            }

            .appointment-title h2 {
              color: #102a43;
              margin-bottom: 6px;
            }

            .appointment-title p {
              color: #718096;
              margin: 0;
            }

            .section {
              margin-top: 25px;
            }

            .section-title {
              color: #0d6efd;
              font-size: 17px;
              font-weight: bold;
              border-bottom: 1px solid #e5edf6;
              padding-bottom: 8px;
              margin-bottom: 15px;
            }

            .info-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 12px;
            }

            .info-box {
              background: #f7faff;
              border: 1px solid #e3edf7;
              border-radius: 8px;
              padding: 12px;
            }

            .label {
              display: block;
              color: #718096;
              font-size: 12px;
              margin-bottom: 5px;
            }

            .value {
              font-size: 14px;
              font-weight: 600;
              color: #26384a;
            }

            .reason {
              background: #f7faff;
              border: 1px solid #e3edf7;
              border-radius: 8px;
              padding: 15px;
              line-height: 1.6;
            }

            .footer {
              text-align: center;
              margin-top: 35px;
              padding-top: 18px;
              border-top: 1px solid #e5edf6;
              color: #718096;
              font-size: 12px;
            }

            @media print {

              body {
                background: white;
                padding: 0;
              }

              .print-container {
                max-width: 100%;
              }

            }

          </style>

        </head>

        <body>

          <div class="print-container">

            <div class="header">

              <div>

                <div class="logo">
                  🏥 MediBook
                </div>

                <div class="subtitle">
                  Hospital Appointment System
                </div>

              </div>

              <div class="op-number">

                <div class="op-label">
                  OP Number
                </div>

                <div class="op-value">
                  ${opNumber}
                </div>

              </div>

            </div>

            <div class="appointment-title">

              <h2>
                Appointment Details
              </h2>

              <p>
                Please keep this appointment information for your reference.
              </p>

            </div>

            <div class="section">

              <div class="section-title">
                Patient Details
              </div>

              <div class="info-grid">

                <div class="info-box">
                  <span class="label">Full Name</span>
                  <span class="value">${appointment.patientName}</span>
                </div>

                <div class="info-box">
                  <span class="label">Age</span>
                  <span class="value">${appointment.age}</span>
                </div>

                <div class="info-box">
                  <span class="label">Gender</span>
                  <span class="value">${appointment.gender}</span>
                </div>

                <div class="info-box">
                  <span class="label">Weight</span>
                  <span class="value">${appointment.weight} kg</span>
                </div>

                <div class="info-box">
                  <span class="label">Phone</span>
                  <span class="value">${appointment.phone}</span>
                </div>

                <div class="info-box">
                  <span class="label">Email</span>
                  <span class="value">${appointment.email || 'N/A'}</span>
                </div>

              </div>

            </div>

            <div class="section">

              <div class="section-title">
                Doctor Details
              </div>

              <div class="info-grid">

                <div class="info-box">
                  <span class="label">Doctor</span>
                  <span class="value">${appointment.doctorName}</span>
                </div>

                <div class="info-box">
                  <span class="label">Department</span>
                  <span class="value">${appointment.department}</span>
                </div>

                <div class="info-box">
                  <span class="label">Appointment Date</span>
                  <span class="value"> ${appointment.date}</span>
                </div>

                <div class="info-box">
                  <span class="label">Appointment Time</span>
                  <span class="value"> ${appointment.time}</span>
                </div>

              </div>

            </div>

            <div class="section">

              <div class="section-title">
                Reason for Visit
              </div>

              <div class="reason">
                ${appointment.reason}
              </div>

            </div>

            <div class="footer">
              MediBook • Your Health, Our Priority
            </div>

          </div>

        </body>

      </html>
    `)

    printWindow.document.close()

    printWindow.focus()

    printWindow.print()
  }


  const doctors = [
    'Dr. Rahul',
    'Dr. Nikhil',
    'Dr. Anjali',
    'Dr. Vivek',
    'Dr. Meera',
    'Dr. Arun Kumar',
    'Dr. Fathima',
    'Dr. Neha',
    'Dr. Arun',
    'Dr. Riya',
    'Dr. Sneha',
    'Dr. Anitha',
    'Dr. Akhil',
    'Dr. Suresh',
    'Dr. Priya',
    'Dr. Faisal',
    'Dr. Kavya',
    'Dr. Manoj',
    'Dr. Adarsh',
    'Dr. Swetha'
  ]

  const departments = [
    'Cardiology',
    'Neurology',
    'General Medicine',
    'Dermatology',
    'Pediatrics',
    'Gynecology',
    'Orthopedics',
    'ENT',
    'Ophthalmology',
    'Pulmonology'
  ]


  const filteredAppointments =
    appointments.filter((appointment) => {

      
      const searchText = search
        .toLowerCase()
        .trim()
        .replace('.', '')

      const patientName =
        (appointment.patientName || '')
          .toLowerCase()

      const doctorName =
        (appointment.doctorName || '')
          .toLowerCase()
          .replace('.', '')

      const opNumber =
        (appointment.opNumber || '')
          .toLowerCase()

      const searchMatch =
        patientName.includes(searchText) ||
        doctorName.includes(searchText) ||
        opNumber.includes(searchText)


      
      const doctorMatch =
        doctorFilter === '' ||
        appointment.doctorName === doctorFilter


      
      const departmentMatch =
        departmentFilter === '' ||
        appointment.department === departmentFilter


      
      const dateMatch =
        dateFilter === '' ||
        appointment.date === dateFilter


      return (
        searchMatch &&
        doctorMatch &&
        departmentMatch &&
        dateMatch
      )

    })


  return (

    <div className="appointments-page">

      <div className="appointments-container">


        <div className="appointments-heading">

          <h2>
            My Appointments
          </h2>

          <p>
            View and manage your hospital appointments
          </p>

        </div>


    

        <div className="summary-cards">

          <div className="summary-card">

            <i className="fa-solid fa-calendar-check"></i>

            <div>

              <small>
                Total Appointments
              </small>

              <h3>
                {appointments.length}
              </h3>

            </div>

          </div>


          <div className="summary-card">

            <i className="fa-solid fa-calendar-day"></i>

            <div>

              <small>
                Today's Appointments
              </small>

              <h3>

                {
                  appointments.filter(
                    (item) =>
                      item.date ===
                      new Date()
                        .toISOString()
                        .split('T')[0]
                  ).length
                }

              </h3>

            </div>

          </div>


          <div className="summary-card">

            <i className="fa-solid fa-calendar-plus"></i>

            <div>

              <small>
                Upcoming Appointments
              </small>

              <h3>

                {
                  appointments.filter(
                    (item) =>
                      item.date >
                      new Date()
                        .toISOString()
                        .split('T')[0]
                  ).length
                }

              </h3>

            </div>

          </div>

        </div>


        

        <div className="appointment-filters">

        

          <div className="search-box">

            <i className="fa-solid fa-magnifying-glass"></i>

            <input
              type="text"
              className="form-control"
              placeholder="Search patient or doctor or OP number"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>


          

          <select
            className="form-select"
            value={doctorFilter}
            onChange={(e) =>
              setDoctorFilter(e.target.value)
            }
          >

            <option value="">
              All Doctors
            </option>

            {doctors.map((doctor) => (

              <option
                key={doctor}
                value={doctor}
              >
                {doctor}
              </option>

            ))}

          </select>


      

          <select
            className="form-select"
            value={departmentFilter}
            onChange={(e) =>
              setDepartmentFilter(e.target.value)
            }
          >

            <option value="">
              All Departments
            </option>

            {departments.map((department) => (

              <option
                key={department}
                value={department}
              >
                {department}
              </option>

            ))}

          </select>


        

          <input
            type="date"
            className="form-control"
            value={dateFilter}
            onChange={(e) =>
              setDateFilter(e.target.value)
            }
          />

        </div>


      

        {filteredAppointments.length === 0 ? (

          <div className="no-appointments">

            <div>

              <i className="fa-solid fa-calendar-xmark"></i>

            </div>

            <h5>
              No appointments found
            </h5>

            <p>
              Your booked appointments will appear here.
            </p>

          </div>

        ) : (

          <div className="appointments-grid">

            {filteredAppointments.map(
              (appointment) => (

                <div
                  className="appointment-card-new"
                  key={appointment.id}
                >

                  

                  <div className="appointment-card-header">

                    <div>

                      <h5>
                        {appointment.patientName}
                      </h5>

                      <span>
                        Appointment
                      </span>

                    </div>

                    <div className="appointment-icon">

                      <i className="fa-solid fa-calendar-check"></i>

                    </div>

                  </div>


                  <div className="appointment-card-body">

                

                    <div className="op-card-number">

                      <small>
                        OP Number
                      </small>

                      <strong>
                        {appointment.opNumber || 'OP-NA'}
                      </strong>

                    </div>


                    

                    <div className="patient-info-grid">

                      <div>

                        <small>
                          Age
                        </small>

                        <strong>
                          {appointment.age}
                        </strong>

                      </div>


                      <div>

                        <small>
                          Gender
                        </small>

                        <strong>
                          {appointment.gender}
                        </strong>

                      </div>


                      <div>

                        <small>
                          Weight
                        </small>

                        <strong>
                          {appointment.weight} kg
                        </strong>

                      </div>

                    </div>


              

                    <div className="contact-info">

                      <p>

                        <strong>
                          Phone:
                        </strong>{' '}

                        {appointment.phone}

                      </p>

                      <p>

                        <strong>
                          Email:
                        </strong>{' '}

                        {appointment.email || 'N/A'}

                      </p>

                    </div>


                    

                    <div className="doctor-info">

                      <h6>
                        Doctor Details
                      </h6>

                      <p>

                        <strong>
                          Doctor:
                        </strong>{' '}

                        {appointment.doctorName}

                      </p>

                      <p>

                        <strong>
                          Department:
                        </strong>{' '}

                        {appointment.department}

                      </p>

                    </div>


                  

                    <div className="date-time-grid">

                      <div>

                        <small>
                          Date
                        </small>

                        <strong>

                          <i className="fa-solid fa-calendar-days"></i>{' '}

                          {appointment.date}

                        </strong>

                      </div>


                      <div>

                        <small>
                          Time
                        </small>

                        <strong>

                          <i className="fa-solid fa-clock"></i>{' '}

                          {appointment.time}

                        </strong>

                      </div>

                    </div>


                    

                    <div className="reason-info">

                      <small>
                        Reason for Visit
                      </small>

                      <p>
                        {appointment.reason}
                      </p>

                    </div>


                

                    <div className="appointment-actions">

                      <button
                        className="edit-btn"
                        onClick={() =>
                          window.location.href =
                          `/edit/${appointment.id}`
                        }
                      >

                        <i className="fa-solid fa-pen-to-square"></i>{' '}

                        Edit

                      </button>


                      <button
                        className="delete-btn"
                        onClick={() =>
                          handleDelete(appointment.id)
                        }
                      >

                        <i className="fa-solid fa-trash"></i>{' '}

                        Delete

                      </button>


                      <button
                        className="print-btn"
                        onClick={() =>
                          handlePrint(appointment)
                        }
                      >

                        <i className="fa-solid fa-print"></i>{' '}

                        Print

                      </button>

                    </div>

                  </div>

                </div>

              )
            )}

          </div>

        )}

      </div>

    </div>

  )
}

export default Appointments