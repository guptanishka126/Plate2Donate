import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import './CSS/Common_page.css';

function Common_page() {

  const [role, setRole] = useState("")
  const [address, setAddress] = useState("")
  const [event, setEvent] = useState("")

  const navigate = useNavigate();

  const postEvent = async (role, address, event) => {
  try {
    const response = await fetch('http://localhost:5000/addevent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ role, address, event }),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error: ${errorMessage}`);
    }

    const result = await response.json();
    console.log('Event added successfully:', result);
    alert('Event added successfully!');
  } catch (error) {
    console.error('Error adding event:', error);
    alert(`Failed to add event: ${error.message}`);
  }
};

const handleSubmit = async () => {
  if (!role || !address || !event) {
    alert('Please fill all fields');
    return;
  }
  await postEvent(role, address, event);
};





  return (
    <div style={{display : "flex" , justifyContent:"center" , alignItems : "center" }}>
      <div className="Box" style={{width : "50%"}}>
        <input type="text" placeholder="Role" value={role} onChange={(e) => {setRole(e.target.value)}}/>
        <input type="text" placeholder="Adderess" value={address} onChange={(e) => {setAddress(e.target.value)}}/>
        <input type="text" placeholder="Event" value={event} onChange={(e) => {setEvent(e.target.value)}}/>


        <button onClick={() => {handleSubmit()}}>Submit</button>
        <button onClick={() => {navigate('/view')}}>Go to View</button>

      </div>
    </div>
  );
}

export default Common_page;
