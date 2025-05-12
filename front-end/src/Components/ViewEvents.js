import React, { useEffect, useState } from "react";
//import './CSS/ViewEvents.css';


function ViewEvents() {

    const [events, setEvents] = useState([]); // State to hold event data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to handle errors

  // Fetch events from the API
  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:5000/getevents", {
        method: "GET",
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      const data = await response.json();
      setEvents(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching events:", err);
      setError(err.message);
      setLoading(false);
    }
  };

  // Use useEffect to fetch events when the component mounts
  useEffect(() => {
    fetchEvents();
  }, []);

  // Logout handler
  

  if (loading) {
    return <div>Loading events...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ padding: "20px" } }>
      <h2>Event List</h2>
      {events.length === 0 ? (
        <p>No events found.</p>
      ) : (
        <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Role</th>
              <th>Address</th>
              <th>Event</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index}>
                <td>{event.role}</td>
                <td>{event.address}</td>
                <td>{event.event}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default ViewEvents