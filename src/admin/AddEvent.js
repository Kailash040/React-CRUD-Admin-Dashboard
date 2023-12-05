import mobile_image from "../assests/mobile_image.png";
import Vector from "../assests/Vector.png";
import {useState,useEffect} from "react"
import axios from "axios";
import eventData from "../Data/Data";
import Data from '../Data/Data'
const AddEvent = () => {
  const  [list,setList] =useState([]);
  
  const [data,setData] =useState({
    eventName:"",
    title:"",
    shortDescription:"",
    eventLink:"",
    price:"",
    eventDate:"",
})

const handleSubmit = (event) => {
  event.preventDefault();
// 

};
console.log(list)
  return (
    <div>
      <form className="container" onSubmit={handleSubmit} >
        <div className="dashboard_container ">
          <img src={Vector} alt="img" /> &nbsp;&nbsp;<span>DashBoard</span>
        </div>
        <h5 className="my-5">Add Event</h5>
        {/* <div className="row">
          <label for="" class="form-label">
            Upload Main Image
          </label>
          <div className="position-relative col">
            <label htmlFor="files">
              <div
                class="mb-3 position-absolute"
                style={{ visibility: "hidden" }}
              >
                <input
                  type="file"
                  accept="image/*"
                  id="files"
                  class="form-control"
                />
              </div>
              <div class="mb-3">
                <img src={mobile_image} style={{ width: "250px" }} id="files" />
              </div>
            </label>
          </div>
        </div> */}
        <div class="mb-3">
          <label for="" class="form-label">
            Event Name
          </label>
          <input type="name" class="form-control" value={data.eventName} onChange={(e)=>setData({...data,eventName:e.target.value})} />
        </div>
        {/* <div class="mb-3">
          <label for="title" class="form-label">
            Title
          </label>
          <input type="text" class="form-control" id="title" value={data.title} onChange={(e)=>setData({...data,title:e.target.value})} />
        </div>
        <div class="mb-3">
          <label for="shortDescription" class="form-label">
            Short Description
          </label>
          <textarea
            class="form-control"
            id="shortDescription"
            rows="3"
            value={data.shortDescription}
            onChange={(e)=>setData({...data,shortDescription:e.target.value})}
          ></textarea>
        </div>
        <div class="mb-3">
          <label for="eventLink" class="form-label">
            Event Link
          </label>
          <input type="email" class="form-control" value={data.eventLink}   onChange={(e)=>setData({...data,eventLink:e.target.value})} id="eventLink" />
        </div>
        <div className="row">
          <div class="mb-3 col">
            <label for="price" class="form-label">
              Price
            </label>
            <input type="name" class="form-control" id="price"  value={data.price} onChange={(e)=>setData({...data,price:e.target.value})} />
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
              value={data.eventDate}
              onChange={(e)=>setData({...data,eventDate:e.target.value})}
            />
          </div>
        </div> */}
        <button
          type="submit"
          class="btn  col-2 p-2 text-light"
          style={{ background: "#270F33" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
