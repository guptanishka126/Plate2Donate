import React, { useState } from 'react';
import './CSS/Login.css'; // Assuming you have a CSS file for styles
import { useNavigate } from 'react-router-dom';

function Login() 
{

const navigate=useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    category: 'Head', // Default category
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(credentials.email, credentials.password, credentials.category);
    } catch (err) {
      console.error(err);
    }
  };

  const loginUser = async (email, password, category) => {
    let endpoint = '';

    // Determine the API endpoint based on the selected category
    if (category === 'Head') {
      endpoint = 'http://localhost:5000/headsignin';
    } else if (category === 'Donor') {
      endpoint = 'http://localhost:5000/donorsignin';
    } else if (category === 'Volunteer') {
      endpoint = 'http://localhost:5000/volunteersignin';
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Error: ${errorMessage}`);
      }

      const result = await response.json();
      console.log('Login successful:', result);
      alert('Login successful!');
      navigate('/page'); 
      // Notify user of success
    } catch (error) {
      console.error('Error:', error);
      alert(`Login failed: ${error.message}`); // Notify user of failure
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={credentials.email}
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
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={credentials.category}
            onChange={handleChange}
            required
          >
            <option value="Head">Head</option>
            <option value="Donor">Donor</option>
            <option value="Volunteer">Volunteer</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Login</button>
      </form>
    </div>
  );
}

export default Login;
