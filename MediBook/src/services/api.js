import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:3000'
})

export const getAppointmentsAPI = () =>
  API.get('/appointments')

export const addAppointmentAPI = (appointment) =>
  API.post('/appointments', appointment)

export const deleteAppointmentAPI = (id) =>
  API.delete(`/appointments/${id}`)

export const updateAppointmentAPI = (id, appointment) =>
  API.put(`/appointments/${id}`, appointment)