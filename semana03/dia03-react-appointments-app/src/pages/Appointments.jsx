import { useState } from "react"
import AppointmentsForm from "../components/appoinments/AppointmentsForm"
import AppointmentsList from "../components/appoinments/AppointmentsList"

const Appointments = () => {
  const INITIAL_APPOINTMENTS = [
    {
      id: '1',
      petName: 'Hermosa',
      petAge: '2',
      ownerName: 'Victor',
      appointmentDate: '',
      appointmentTime: '',
      symptoms: 'Duerme mucho'
    }
  ]

  const [appointments, setAppointments] = useState(INITIAL_APPOINTMENTS)

  const handleSaveAppointment = (form) => {
    setAppointments([...appointments, form])
  }

  return (
    <>
      <AppointmentsForm
        onSaveAppointment={handleSaveAppointment}
      />

      <AppointmentsList
        appointments={appointments}
      />
    </>
  )
}

export default Appointments