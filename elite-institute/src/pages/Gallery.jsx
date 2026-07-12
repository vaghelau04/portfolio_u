import { useState, useEffect, useRef } from 'react';
import { Modal, Carousel } from 'bootstrap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { useBackToTop, useNavbarScroll } from '../hooks/useScrollEffects';
import { useFadeUp } from '../hooks/useFadeUp';
import { imageUrls, imageTitles } from '../data/gallery';
import '../styles/gallery.css';

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const modalRef = useRef(null);
  const carouselRef = useRef(null);
  const modalInstance = useRef(null);
  const carouselInstance = useRef(null);

  useBackToTop();
  useNavbarScroll();
  useFadeUp();

  useEffect(() => {
    if (modalRef.current) {
      modalInstance.current = new Modal(modalRef.current, { backdrop: 'static', keyboard: true });
    }
    if (carouselRef.current) {
      carouselInstance.current = new Carousel(carouselRef.current, { interval: false, keyboard: true });
    }
    return () => {
      modalInstance.current?.dispose();
      carouselInstance.current?.dispose();
    };
  }, []);

  const openLightbox = (index) => {
    setActiveIndex(index);
    carouselInstance.current?.to(index);
    modalInstance.current?.show();
  };

  return (
    <>
      <Navbar brandName="UMESH" brandHighlight="Vaghela" activePage="gallery" />

      <section className="gallery-hero">
        <div className="container">
          <h1><span>Gallery</span></h1>
          <p>A visual journey through our campus, labs, events, and the vibrant life at Elite Institute.</p>
        </div>
      </section>

      <section className="gallery-grid section-padding">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Explore More</h2>
            <p className="section-subtitle">Click on any photo to open the full lightbox gallery.</p>
          </div>
          <div className="row g-4">
            {imageUrls.map((url, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 fade-up" key={`${url}-${index}`}>
                <div className="gallery-item" onClick={() => openLightbox(index)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}>
                  <img src={url} alt={imageTitles[index]} loading="lazy" />
                  <div className="gallery-overlay">
                    <h6><i className="fas fa-expand"></i> {imageTitles[index]}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="modal fade lightbox-modal" id="galleryLightbox" tabIndex="-1" aria-hidden="true" ref={modalRef}>
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <button className="btn-close-lightbox" data-bs-dismiss="modal" aria-label="Close">
              <i className="fas fa-times"></i>
            </button>
            <div className="modal-body">
              <div id="lightboxCarousel" className="carousel slide" ref={carouselRef}>
                <div className="carousel-inner">
                  {imageUrls.map((url, index) => (
                    <div className={`carousel-item${index === activeIndex ? ' active' : ''}`} key={`slide-${index}`}>
                      <img src={url} className="d-block" alt={imageTitles[index]} />
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#lightboxCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#lightboxCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
                <div className="carousel-indicators">
                  {imageUrls.map((_, index) => (
                    <button
                      key={`indicator-${index}`}
                      type="button"
                      data-bs-target="#lightboxCarousel"
                      data-bs-slide-to={index}
                      className={index === activeIndex ? 'active' : ''}
                      aria-label={`Slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </>
  );
}

export default Gallery;
