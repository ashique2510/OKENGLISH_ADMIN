import React, { useState } from "react";

import { Header } from "../components";
import { addAnnouncement } from "../utils/ApiRoutes";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";



function Announcement() {

  const [announcement, setAnnouncement] = useState({ announcement: "" });
  const navigate = useNavigate()

  const handleSubmits = function (e) {

    e.preventDefault();
    const addAnnounce = async() => {

      const response = await axios.post(addAnnouncement,announcement)

      if(response){
        toast.success('Announcement Successfully Submitted !', {
          position: toast.POSITION.TOP_CENTER
          });

          setTimeout(() => {
            navigate("/")
          }, 6000);

          }

    }

    addAnnounce()
    
  };


  const handleChange = function (e) {
    setAnnouncement((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Add Announcement" />

      <div className="w-full ">
        <form
          onSubmit={handleSubmits}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4  border-b border-teal-500 py-2 ">
          
            <input
              onChange={handleChange}
              name="announcement"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Type your announcement"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Subimt
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Announcement;
