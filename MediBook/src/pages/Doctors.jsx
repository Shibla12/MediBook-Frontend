import React from 'react'

function Doctors() {

 
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

  return (
    <div className="doctors-page">

      <div className="doctors-container">

        <h2>Our Doctors</h2>

        <p>Check doctor availability before booking an appointment.</p>

        <div className="doctors-grid">

          {doctors.map((doctor) => (

            <div className="doctor-card" key={doctor.name}>

              <h5>{doctor.name}</h5>

              <p>{doctor.department}</p>

              {doctor.available ? (
                <span className="available">
                  <i className ="fa-solid fa-circle-check"></i>Available
                </span>
              ) : (
                <span className="leave">
                  <i className ="fa-solid fa-circle-xmark"></i> On Leave
                </span>
              )}

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default Doctors