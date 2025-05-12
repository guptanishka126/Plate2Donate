import React, { useState } from 'react';
import './CSS/Register.css'; // Assuming you have a CSS file for styles
import { useNavigate } from 'react-router-dom';



function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    category: 'Head', // Default category
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = getApiEndpoint(formData.category); // Get the endpoint based on category
      if (!endpoint) {
        alert('Invalid category selected!');
        return;
      }
      await registerUser(endpoint, formData.email, formData.password, formData.category);
    } catch (err) {
      console.error(err);
    }
  };

  const getApiEndpoint = (category) => {
    switch (category) {
      case 'Head':
        return 'http://localhost:5000/headsignup';
      case 'Donor':
        return 'http://localhost:5000/donorsignup';
      case 'Volunteer':
        return 'http://localhost:5000/volunteersignup';
      default:
        return null;
    }
  };

  const registerUser = async (endpoint, email, password, category) => {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, category }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Error: ${errorMessage}`);
      }

      const result = await response.json();
      console.log('Success:', result);
      alert('Registration successful!'); 
      navigate('/');
      // Notify user of success
    } catch (error) {
      console.error('Error:', error);
      alert(`Registration failed: ${error.message}`); // Notify user of failure
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="Head">Head</option>
            <option value="Donor">Donor</option>
            <option value="Volunteer">Volunteer</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
  );
}

export default Register;
