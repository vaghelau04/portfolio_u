import { useEffect } from 'react';

export function useBackToTop(threshold = 400) {
  useEffect(() => {
    const backBtn = document.getElementById('backToTop');
    if (!backBtn) return;

    const onScroll = () => {
      if (window.scrollY > threshold) {
        backBtn.classList.add('show');
      } else {
        backBtn.classList.remove('show');
      }
    };

    const onClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    window.addEventListener('scroll', onScroll);
    backBtn.addEventListener('click', onClick);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      backBtn.removeEventListener('click', onClick);
    };
  }, [threshold]);
}

export function useNavbarScroll() {
  useEffect(() => {
    const navbar = document.querySelector('.navbar-custom');
    if (!navbar) return;

    const onScroll = () => {
      if (window.scrollY > 50) {
        navbar.style.background = 'rgba(26, 26, 46, 0.96)';
        navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.3)';
      } else {
        navbar.style.background = 'rgba(26, 26, 46, 0.92)';
        navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.2)';
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}

export function useActiveNavOnScroll(sectionIds, linkSelector = '.navbar-nav .nav-link') {
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const navLinks = document.querySelectorAll(linkSelector);
    if (!sections.length || !navLinks.length) return;

    const onScroll = () => {
      let current = '';
      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) {
          current = section.id;
        }
      });
      navLinks.forEach((link) => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${current}` || href === `/#${current}`) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionIds, linkSelector]);
}
