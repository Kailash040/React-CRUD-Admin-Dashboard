import React from "react";
import Vector from "../assests/Vector.png";
import { Link } from "react-router-dom";

const EventList = () => {
  return (
    <div className="eventlist_container ">
      <div className="dashboard_container ">
        <img src={Vector} alt="img" /> <span>DashBoard</span>
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
            <th scope="col">edit</th>
            <th scope="col">Delete</th>
            <th scope="col">Show Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Paradox</td>

            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EventList;
