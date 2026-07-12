import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Collapse } from 'bootstrap';

const navItems = [
  { label: 'Home', hash: '#home', route: '/' },
  { label: 'Mission & Vision', hash: '#mission-vision', route: '/#mission-vision' },
  { label: 'Services', hash: '#services', route: '/#services' },
  { label: 'Courses', hash: '#courses', route: '/#courses' },
  { label: 'Projects', route: '/projects', isRoute: true },
  { label: 'Gallery', route: '/gallery', isRoute: true },
  { label: 'Contact', hash: '#contact', route: '/#contact' },
  { label: 'AI TOOLS', route: '/ai', isRoute: true },
];

function Navbar({ brandName = 'Vaghela', brandHighlight = 'Umesh', activePage }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleNavClick = (e, item) => {
    if (item.isRoute) return;

    e.preventDefault();
    const hash = item.hash;

    if (!isHome) {
      navigate({ pathname: '/', hash: hash.slice(1) });
      return;
    }

    const target = document.querySelector(hash);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }

    const menu = document.getElementById('navbarNav');
    const bsCollapse = Collapse.getInstance(menu);
    if (bsCollapse) bsCollapse.hide();
  };

  const isActive = (item) => {
    if (activePage) {
      if (item.isRoute && item.route === `/${activePage}`) return true;
      if (!item.isRoute && activePage === 'home' && item.hash === '#home') return true;
      return false;
    }
    if (item.isRoute) {
      return location.pathname === item.route;
    }
    if (!isHome) return false;
    return item.hash === '#home';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-graduation-cap me-2"></i>
          {brandName}
          <span>{brandHighlight}</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {navItems.map((item) => (
              <li className="nav-item" key={item.label}>
                {item.isRoute ? (
                  <Link
                    className={`nav-link${isActive(item) ? ' active' : ''}`}
                    to={item.route} style={{"tager": "_blank"}}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    className={`nav-link${isActive(item) ? ' active' : ''}`}
                    href={item.route}
                    onClick={(e) => handleNavClick(e, item)}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
