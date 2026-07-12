import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <h5>
              <i className="fas fa-graduation-cap me-2"></i>Elite
              <span style={{ color: 'var(--secondary)' }}>Institute</span>
            </h5>
            <p className="text-white-50" style={{ fontSize: '0.95rem', maxWidth: '300px' }}>
              Empowering futures through quality education, innovation, and a commitment to excellence since 2010.
            </p>
            <div className="social-icons mt-3">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <h5>Quick Links</h5>
            <Link to="/#home">Home</Link>
            <br />
            <Link to="/#mission-vision">Mission &amp; Vision</Link>
            <br />
            <Link to="/#services">Services</Link>
            <br />
            <Link to="/#courses">Courses</Link>
          </div>
          <div className="col-lg-2 col-md-6">
            <h5>Support</h5>
            <Link to="/#contact">Contact Us</Link>
            <br />
            <a href="#">FAQs</a>
            <br />
            <a href="#">Privacy Policy</a>
            <br />
            <a href="#">Terms of Service</a>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5>Newsletter</h5>
            <p className="text-white-50" style={{ fontSize: '0.9rem' }}>
              Subscribe to get the latest updates on courses and events.
            </p>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                style={{ borderRadius: '50px 0 0 50px', border: 'none', padding: '12px 18px' }}
              />
              <button
                className="btn"
                style={{
                  background: 'var(--secondary)',
                  color: 'var(--dark)',
                  borderRadius: '0 50px 50px 0',
                  fontWeight: 600,
                  padding: '12px 24px',
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2026 <span>Elite Institute</span>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
