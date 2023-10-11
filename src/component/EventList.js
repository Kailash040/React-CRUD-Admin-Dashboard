import React from "react";
import Vector from "../assests/Vector.png";
import { Link } from "react-router-dom";
import eventData from "../Data/Data";
const EventList = () => {
  return (
    <div className="eventlist_container ">
      <div className="dashboard_container ">
        <img src={Vector} alt="img" /> &nbsp;&nbsp;<span>DashBoard</span>
      </div>
      <div className="events_container_main d-flex my-5 justify-content-between">
        <p>Events</p>
        <Link to="/addEvent"> Add Event +</Link>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Event Name</th>
            <th scope="col">title</th>
            <th scope="col">Price</th>
            <th scope="col">Event Date</th>
            <th scope="col">Show Details</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {eventData.map((data, id) => {
            return (
              <tr key={id}>
                <td>{data.eventName}</td>

                <td>{data.title}</td>
                <td>{data.price}</td>
                <td>{data.eventData}</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EventList;
