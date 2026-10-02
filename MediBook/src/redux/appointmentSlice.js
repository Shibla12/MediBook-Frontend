import { createSlice } from '@reduxjs/toolkit'

const appointmentSlice = createSlice({
  name: 'appointments',

  initialState: [],

  reducers: {

    setAppointments: (state, action) => {
      return action.payload
    }

  }
})

export const { setAppointments } = appointmentSlice.actions

export default appointmentSlice.reducer