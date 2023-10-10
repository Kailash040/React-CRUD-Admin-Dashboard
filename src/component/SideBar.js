import React from "react";
import { Link } from "react-router-dom";

import admin_logo from "../assests/admin_logo.png";
import event from "../assests/event.png";

const SideBar = () => {
  return (
    <div className="sideBar_container ">
      <div className="sideBar_item my-5">
        <img src={admin_logo} alt="img" />{" "}
      </div>
      <div className="sideBar_item">
        <Link to="/eventlist">
          {" "}
          <img style={{ width: "16px" }} src={event} alt="img" /> Events
        </Link>
      </div>
      <div className="sideBar_item">
        <Link to="/eventDetails">
          {" "}
          <img
            style={{ width: "16px", color: "white" }}
            src={event}
            alt="img"
          />{" "}
          EventDetails
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
