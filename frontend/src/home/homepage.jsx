// src/components/LandingPage.js
import React from 'react';
import './homepage.css';

const HomePage = () => {
  return (
    <div className="landing-page">
      {/* Header Section */}
      <header className="landing-header">
        <div className="logo">LocalShop Connect</div>
        <nav className="nav-menu">
          <a href="/home">Home</a>
          <a href="/vendors">Vendors</a>
          <a href="/contact">Contact</a>
          <a href="/login" className="btn login-btn">Login</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Empowering Local Shops, One Click at a Time</h1>
          <p>
            Join our online marketplace and bring your store to the digital forefront.
            Connect with local customers easily while growing your business.
          </p>
          <a href="/register" className="btn primary-btn">Get Started</a>
        </div>
        <div className="hero-image">
          <img src="/assets/images/marketplace-hero.jpg" alt="Local Market" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Key Features</h2>
        <div className="features-container">
          <div className="feature-card">
            <img src="/assets/images/dashboard.svg" alt="Vendor Dashboard" />
            <h3>Vendor Dashboard</h3>
            <p>Manage inventory, update products, and view insights with ease.</p>
          </div>
          <div className="feature-card">
            <img src="/assets/images/visibility.svg" alt="Increase Visibility" />
            <h3>Increase Visibility & Sales</h3>
            <p>Stand out with featured listings and in-depth analytics.</p>
          </div>
          <div className="feature-card">
            <img src="/assets/images/payment.svg" alt="Revenue Generation" />
            <h3>Revenue Generation</h3>
            <p>Flexible subscription plans and payment integration for seamless transactions.</p>
          </div>
          <div className="feature-card">
            <img src="/assets/images/customer.svg" alt="Customer Convenience" />
            <h3>Customer Convenience</h3>
            <p>An intuitive, user-friendly experience to discover and connect with vendors.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to transform your local market?</h2>
        <p>Sign up now and join the movement to empower local shops.</p>
        <a href="/register" className="btn primary-btn">Sign Up Today</a>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <p>&copy; {new Date().getFullYear()} LocalShop Connect. All rights reserved.</p>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/contact">Contact Us</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
