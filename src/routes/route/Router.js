import React from 'react'
import { Route, Routes} from "react-router-dom"
import EventList from '../../component/EventList'
import EventDetails from '../../component/EventDetails'
import AddEvent from '../../admin/AddEvent'
const Router = () => {
  return (
    <div>
       <Routes>
      <Route path="/eventList" element={<EventList />} />
      <Route path="/eventDetails" element={<EventDetails />} />
      <Route path="/addEvent" element={<AddEvent />} />

    </Routes>
    </div>
  )
}

export default Router
