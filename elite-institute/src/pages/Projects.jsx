import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { useBackToTop, useNavbarScroll } from '../hooks/useScrollEffects';
import { useFadeUp } from '../hooks/useFadeUp';
import { projects } from '../data/projects';
import '../styles/projects.css';

function Projects() {
  useBackToTop();
  useNavbarScroll();
  useFadeUp();

  return (
    <>
      <Navbar brandName="Elite" brandHighlight="Institute" activePage="projects" />

      <section className="projects-hero">
        <div className="container">
          <h1>
            Skill Development <span>Projects</span>
          </h1>
          <p>
            Explore our hands‑on initiatives that bridge theory with practice,
            empowering learners with real‑world expertise.
          </p>
        </div>
      </section>

      <section className="projects-grid section-padding">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Our Projects</h2>
            <p className="section-subtitle">
              Each project is designed to build practical skills and foster innovation.
            </p>
          </div>
          <div className="row g-4">
            {projects.map((proj) => (
              <div className="col-lg-4 col-md-6 fade-up" key={proj.title}>
                <div className="project-card">
                  <div className="project-img" style={{ backgroundImage: `url('${proj.image}')` }}>
                    <span className="project-tag">{proj.tag}</span>
                  </div>
                  <div className="project-body">
                    <span className="project-category">
                      <i className="fas fa-tag me-1"></i> {proj.category}
                    </span>
                    <h5>{proj.title}</h5>
                    <p>{proj.description}</p>
                    <div className="project-meta">
                      <span><i className="fas fa-users"></i> {proj.team}</span>
                      <span><i className="fas fa-clock"></i> {proj.duration}</span>
                      <a href="#" className="btn-project">View Details</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </>
  );
}

export default Projects;
