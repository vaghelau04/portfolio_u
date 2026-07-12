import { useEffect, useCallback } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { useBackToTop, useNavbarScroll, useActiveNavOnScroll } from '../hooks/useScrollEffects';
import { useFadeUp } from '../hooks/useFadeUp';
import { homeGalleryItems } from '../data/gallery';
import '../styles/home.css';

const services = [
  { icon: 'fa-user-graduate', color: 'purple', title: 'Career Counseling', desc: 'Personalized guidance to help you choose the right career path and achieve your professional aspirations.', link: '#' },
  { icon: 'fa-chart-line', color: 'gold', title: 'Skill Development', desc: 'Industry-relevant training programs designed to bridge the gap between academic knowledge and real-world skills.', link: '/projects', isRoute: true },
  { icon: 'fa-hand-holding-heart', color: 'red', title: 'Scholarship Support', desc: 'Financial assistance and scholarship programs to ensure that talented students can access quality education without barriers.', link: '#' },
  { icon: 'fa-globe', color: 'teal', title: 'Global Exposure', desc: 'International exchange programs, guest lectures, and global partnerships to broaden your academic and cultural horizons.', link: '#' },
  { icon: 'fa-briefcase', color: 'blue', title: 'Placement Assistance', desc: 'Dedicated placement cell with strong industry connections to help you secure internships and job opportunities.', link: '#' },
  { icon: 'fa-users', color: 'pink', title: 'Community & Networking', desc: 'Join a vibrant community of learners, alumni, and industry experts to build lasting professional relationships.', link: '#' },
];

const courses = [
  { img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=center', tag: 'Popular', category: 'Technology', icon: 'fa-code', title: 'Full Stack Web Development', desc: 'Master front-end & back-end development with hands-on projects and real-world applications.', duration: '6 Months', seats: '45 Seats' },
  { img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center', tag: 'New', category: 'AI & Data', icon: 'fa-brain', title: 'Data Science & Machine Learning', desc: 'Learn Python, analytics, ML algorithms, and build intelligent systems from data.', duration: '8 Months', seats: '35 Seats' },
  { img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&crop=center', tag: 'Trending', category: 'Cloud & DevOps', icon: 'fa-cloud', title: 'Cloud Computing & DevOps', desc: 'Master AWS, Docker, CI/CD pipelines, and cloud-native application deployment.', duration: '5 Months', seats: '30 Seats' },
  { img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&crop=center', tag: 'Design', category: 'Design', icon: 'fa-paint-brush', title: 'UI/UX Design Masterclass', desc: 'Learn design thinking, prototyping, Figma, and create user-centered digital experiences.', duration: '4 Months', seats: '25 Seats' },
  { img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop&crop=center', tag: 'Cybersecurity', category: 'Security', icon: 'fa-shield-alt', title: 'Cybersecurity & Ethical Hacking', desc: 'Protect systems, learn ethical hacking, and build a career in information security.', duration: '6 Months', seats: '28 Seats' },
  { img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop&crop=center', tag: 'Business', category: 'Business', icon: 'fa-chart-pie', title: 'Digital Marketing & Analytics', desc: 'Master SEO, social media, content marketing, and data-driven campaign strategies.', duration: '4 Months', seats: '40 Seats' },
];

function Home() {
  const location = useLocation();

  useBackToTop();
  useNavbarScroll();
  useActiveNavOnScroll(['home', 'mission-vision', 'services', 'courses', 'gallery', 'contact']);
  useFadeUp();

  const scrollToSection = useCallback((hash) => {
    const target = document.querySelector(hash);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => scrollToSection(location.hash), 100);
    }
  }, [location.hash, scrollToSection]);

  const handleHeroClick = (e, hash) => {
    e.preventDefault();
    scrollToSection(hash);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let valid = true;
    inputs.forEach((input) => {
      if (!input.value.trim()) {
        input.style.border = '2px solid #ff6b6b';
        valid = false;
      } else {
        input.style.border = '2px solid #00b894';
      }
    });
    if (valid) {
      alert('✅ Thank you for your message! We will get back to you soon.');
      form.reset();
      inputs.forEach((input) => { input.style.border = 'none'; });
    } else {
      alert('⚠️ Please fill in all required fields.');
    }
  };

  return (
    <>
      <Navbar activePage="home" />

      <section className="hero" id="home">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 hero-content">
              <span className="badge"><i className="fas fa-star me-2"></i>Since 2026</span>
              <h1>
                Empowering Futures <br />
                <span className="highlight">Through Education</span>
              </h1>
              <p>
                Elite Institute provides world-class training, expert faculty,
                and a vibrant learning environment to help you achieve your career goals.
              </p>
              <div className="hero-buttons">
                <a href="#courses" className="btn btn-primary-custom" onClick={(e) => handleHeroClick(e, '#courses')}>
                  <i className="fas fa-book-open me-2"></i>Explore Courses
                </a>
                <a href="#contact" className="btn btn-outline-custom" onClick={(e) => handleHeroClick(e, '#contact')}>
                  <i className="fas fa-phone-alt me-2"></i>Get in Touch
                </a>
              </div>
              <div className="row mt-5 g-3">
                <div className="col-4">
                  <h3 className="text-white fw-bold">12k+</h3>
                  <p className="text-white-50 small">Students</p>
                </div>
                <div className="col-4">
                  <h3 className="text-white fw-bold">150+</h3>
                  <p className="text-white-50 small">Courses</p>
                </div>
                <div className="col-4">
                  <h3 className="text-white fw-bold">98%</h3>
                  <p className="text-white-50 small">Placement</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 hero-image position-relative">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=600&h=450&fit=crop&crop=center"
                alt="Institute Campus"
                className="img-fluid"
              />
              <div className="floating-card" style={{ top: '10%', right: '-8%' }}>
                <i className="fas fa-chalkboard-teacher"></i>
                <span>Expert Faculty</span>
              </div>
              <div className="floating-card" style={{ bottom: '20%', left: '-12%' }}>
                <i className="fas fa-laptop-code"></i>
                <span>Modern Labs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-vision section-padding" id="mission-vision">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Our Mission &amp; Vision</h2>
            <p className="section-subtitle">Guiding principles that drive us to deliver excellence in education.</p>
          </div>
          <div className="row g-4 mt-3">
            <div className="col-md-6 fade-up">
              <div className="mv-card">
                <div className="icon-circle purple"><i className="fas fa-bullseye"></i></div>
                <h4>Our Mission</h4>
                <p>
                  To empower learners with cutting-edge skills, critical thinking,
                  and ethical values that prepare them for lifelong success in a
                  rapidly changing world. We are committed to making quality education accessible to all.
                </p>
              </div>
            </div>
            <div className="col-md-6 fade-up">
              <div className="mv-card">
                <div className="icon-circle gold"><i className="fas fa-eye"></i></div>
                <h4>Our Vision</h4>
                <p>
                  To become a globally recognized center of excellence that
                  transforms lives through innovative education, fosters
                  intellectual curiosity, and builds a community of future
                  leaders who drive positive change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services section-padding" id="services">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">Comprehensive support and resources to enhance your learning journey.</p>
          </div>
          <div className="row g-4 mt-3">
            {services.map((s) => (
              <div className="col-lg-4 col-md-6 fade-up" key={s.title}>
                <div className="service-card">
                  <div className={`icon-box ${s.color}`}><i className={`fas ${s.icon}`}></i></div>
                  <h5>{s.title}</h5>
                  <p>{s.desc}</p>
                  {s.isRoute ? (
                    <Link to={s.link} className="read-more">Learn More <i className="fas fa-arrow-right"></i></Link>
                  ) : (
                    <a href={s.link} className="read-more">Learn More <i className="fas fa-arrow-right"></i></a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="courses section-padding" id="courses">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Our Courses</h2>
            <p className="section-subtitle">Explore our diverse range of programs designed for the careers of tomorrow.</p>
          </div>
          <div className="row g-4 mt-3">
            {courses.map((c) => (
              <div className="col-lg-4 col-md-6 fade-up" key={c.title}>
                <div className="course-card">
                  <div className="course-img" style={{ backgroundImage: `url('${c.img}')` }}>
                    <span className="course-tag">{c.tag}</span>
                  </div>
                  <div className="course-body">
                    <span className="course-category"><i className={`fas ${c.icon} me-1`}></i> {c.category}</span>
                    <h5>{c.title}</h5>
                    <p>{c.desc}</p>
                    <div className="course-meta">
                      <span><i className="fas fa-clock"></i> {c.duration}</span>
                      <span><i className="fas fa-user-graduate"></i> {c.seats}</span>
                      <a href="#" className="btn-course">Enroll Now</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery section-padding" id="gallery">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Institute Gallery</h2>
            <p className="section-subtitle">A glimpse into our campus, facilities, and vibrant community life.</p>
          </div>
          <div className="row g-4 mt-3">
            {homeGalleryItems.map((item) => (
              <div className="col-lg-4 col-md-6 fade-up" key={item.title}>
                <div className="gallery-item">
                  <img src={item.src} alt={item.title} />
                  <div className="gallery-overlay">
                    <h6><i className="fas fa-camera me-2"></i>{item.title}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact section-padding" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Have questions? We&apos;d love to hear from you. Reach out to us anytime.</p>
          </div>
          <div className="row g-4 mt-3">
            <div className="col-lg-4">
              <div className="contact-info-card fade-up">
                <div className="icon-circle"><i className="fas fa-map-marker-alt"></i></div>
                <h6>Address</h6>
                <p>123 Education Avenue,<br />Knowledge City, KC 10001</p>
              </div>
              <div className="contact-info-card fade-up mt-3">
                <div className="icon-circle"><i className="fas fa-phone-alt"></i></div>
                <h6>Phone</h6>
                <p>+1 (555) 123-4567<br />+1 (555) 987-6543</p>
              </div>
              <div className="contact-info-card fade-up mt-3">
                <div className="icon-circle"><i className="fas fa-envelope"></i></div>
                <h6>Email</h6>
                <p>vaghelau04@gmail.com<br />support@eliteinstitute.edu</p>
              </div>
            </div>
            <div className="col-lg-8 fade-up">
              <div className="contact-form">
                <h5 className="fw-bold mb-4">Send Us a Message</h5>
                <form id="contactForm" onSubmit={handleContactSubmit} noValidate>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input type="text" className="form-control" placeholder="Your Full Name" required />
                    </div>
                    <div className="col-md-6">
                      <input type="email" className="form-control" placeholder="Your Email Address" required />
                    </div>
                    <div className="col-12">
                      <input type="text" className="form-control" placeholder="Subject" />
                    </div>
                    <div className="col-12">
                      <textarea className="form-control" rows="4" placeholder="Your Message..." required></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn-submit">
                        <i className="fas fa-paper-plane me-2"></i>Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </>
  );
}

export default Home;
