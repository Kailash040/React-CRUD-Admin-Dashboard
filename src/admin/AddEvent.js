import React from "react";
import mobile_image from "../assests/desktop_image.png";

import Vector from '../assests/Vector.png'
const AddEvent = () => {
  return (
    <div>
      <form className="container">
      <div className="dashboard_container ">
        <img src={Vector} alt="img" /> &nbsp;&nbsp;<span>DashBoard</span>
      </div>
        <h5 className="my-5">Add Event</h5>
        <div className="row">
        <label for="" class="form-label">
          Upload Main Image
        </label>
        <div className="position-relative col">
            <label htmlFor="files">

        <div class="mb-3 position-absolute" style={{"visibility":"hidden"}}>
          <input type="file"  accept="image/*" id="files" class="form-control" />
        </div>
        <div class="mb-3" >
          <img src={mobile_image} style={{width:"250px"}} id="files" />
        </div>
            </label>
        </div>
      
        </div>
        <div class="mb-3">
          <label for="" class="form-label">
            Event Name
          </label>
          <input type="name" class="form-control" id="" />
        </div>
        <div class="mb-3">
          <label for="" class="form-label">
            Title
          </label>
          <input type="text" class="form-control" id="" />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Short Description
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div class="mb-3">
          <label for="" class="form-label">
            Event Link
          </label>
          <input type="url" class="form-control" id="" />
        </div>
        <div className="row">
          <div class="mb-3 col">
            <label for="" class="form-label">
              Price
            </label>
            <input type="name" class="form-control" id="" />
          </div>
          <div class="mb-3 col">
            <label for="" class="form-label">
              EventDate
            </label>
            <input
              type="date"
              class="form-control"
              min="2023-01-01"
              max="2023-12-29"
              id=""
            />
          </div>
        </div>
        <button type="submit" class="btn  col-2 p-2 text-light" style={{"background":"#270F33"}}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
