import React from 'react';
import { Link } from 'react-router-dom'; 
import Navbar from './Navbar'; 
import './CSS/Home.css'; 

function Home() {
  return (
    <div className="maroon">
    <h2 style={{ margin: 0 }}>Plate2Donate</h2>
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h2>Help End Hunger, One Meal at a Time</h2>
          <p>Join our mission to provide nutritious meals to those in need.</p>
          <div className="cta-buttons">
            <Link to="/login" className="cta-button">LOGIN</Link>
            <Link to="/register" className="cta-button secondary">REGISTER</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Us</h2>
        <p>Our platform connects communities to fight food insecurity. We organize donation events, collect food, and provide meals to those in need. Join us to make a difference.</p>
        <Link to="/about" className="link-button">Learn More</Link>
      </section>

      {/* Recent Events Section */}
      <section className="recent-events">
        <h2>Recent Events</h2>
        <div className="event-card">
          <h3>Community Bhandara</h3>
          <p>Serving meals to over 500 people in our city center.</p>
          <Link to="/events" className="link-button">View Event</Link>
        </div>
        <div className="event-card">
          <h3>School Food Drive</h3>
          <p>Collected over 2000 canned goods for local families.</p>
          <Link to="/events" className="link-button">View Event</Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Volunteers Say</h2>
        <div className="testimonial">
          <p>"Volunteering here has been a life-changing experience. Making a real difference in people’s lives is incredibly rewarding."</p>
          <h4>- Anuj, Volunteer</h4>
        </div>
        <div className="testimonial">
          <p>"The joy of helping others is unmatched. I encourage everyone to contribute and support this wonderful cause."</p>
          <h4>- Sheetal, Donor</h4>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <p>&copy; 2024 Food Donation Platform | <Link to="/privacy-policy">Privacy Policy</Link></p>
        <p>
          <Link to="/facebook">Facebook</Link> | <Link to="/twitter">Twitter</Link> | <Link to="/instagram">Instagram</Link>
        </p>
      </footer>
    </div>
  );
}

export default Home;
