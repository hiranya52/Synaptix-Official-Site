// Synaptix Website JavaScript

import './synaptix.css';
import './footer.css';

document.addEventListener('DOMContentLoaded', function () {
  initWebsite();
});

function initWebsite() {
  renderHTML();
  setTimeout(() => {
    initNavigation();
    initScrollEffects();
    initParticles();
    initCounterAnimation();
    initFormHandler();
    hideLoader();
  }, 100);
}

function renderHTML() {
  const app = document.getElementById('synaptix-site');

  app.innerHTML = `
    <div class="loading">
      <div class="loader">
        <span class="synaptix-loader">SYNAP<span class="highlight">TIX</span></span>
      </div>
    </div>

    <div class="scroll-indicator" id="scrollIndicator"></div>

    <nav id="navbar">
      <div class="nav-content">
        <div class="logo">
          <img src="https://res.cloudinary.com/dtol8lk5b/image/upload/v1760966396/logo_dph2dv.png" alt="Synaptix Logo" class="nav-logo">
          <span class="logo-text">SYNAP<span>TIX</span></span>
        </div>
        <button class="mobile-menu-btn" id="mobileMenuBtn">☰</button>
        <ul class="nav-links" id="navLinks">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#contact" class="cta-button">Get In Touch</a></li>
        </ul>
      </div>
    </nav>

    <section class="hero" id="home">
      <div class="hero-background">
        <div class="grid-lines"></div>
        <div class="particles" id="particles"></div>
        <div class="glow-orb glow-orb-1"></div>
        <div class="glow-orb glow-orb-2"></div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title">
          One Network <br> Endless Potential <span class="highlight">SYNAPTIX</span>
        </h1>
        <p class="hero-description">
          Innovative software solutions that connect, empower, and transform businesses in the digital age.
        </p>
        <div class="hero-buttons">
          <a href="#services" class="btn btn-primary">
            Explore Services
            <span>→</span>
          </a>
          <a href="#contact" class="btn btn-secondary">
            Contact Us
          </a>
        </div>
      </div>
    </section>

    <section class="about" id="about">
      <div class="container">
        <div class="section-header">
          <p class="section-subtitle">About Synaptix</p>
          <h2 class="section-title">Connecting Innovation with Excellence</h2>
          <p class="section-description">
            At Synaptix, we believe in the power of connectivity. Our network of talented professionals
            works seamlessly to deliver world-class software solutions that drive success.
          </p>
        </div>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-number" data-target="12">0</div>
            <div class="stat-label">Team Members</div>
          </div>
          <div class="stat-card">
            <div class="stat-number" data-target="1">0</div>
            <div class="stat-label">Projects Delivered</div>
          </div>
          <div class="stat-card">
            <div class="stat-number" data-target="99">0</div>
            <div class="stat-label">Success Rate %</div>
          </div>
        </div>
      </div>
    </section>

    <section class="services" id="services">
      <div class="container">
        <div class="section-header">
          <p class="section-subtitle">Our Services</p>
          <h2 class="section-title">What We Offer</h2>
          <p class="section-description">
            Comprehensive software solutions tailored to meet your unique business needs
          </p>
        </div>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 18l6-6-6-6"/>
                <path d="M8 6l-6 6 6 6"/>
                <path d="M10 4l4 16"/>
              </svg>
            </div>
            <h3 class="service-title">Custom Software Development</h3>
            <p class="service-description">
              Build powerful, scalable web applications with modern technologies and best practices
              that deliver exceptional user experiences.
            </p>
          </div>
          <div class="service-card">
            <div class="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <h3 class="service-title">Automation & Industry Solutions</h3>
            <p class="service-description">
              Native and cross-platform mobile applications that engage users and drive business
              growth across all devices.
            </p>
          </div>
          <div class="service-card">
            <div class="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
              </svg>
            </div>
            <h3 class="service-title">Web & Mobile App Development</h3>
            <p class="service-description">
              Secure, scalable cloud solutions that ensure your applications perform flawlessly
              with maximum uptime and reliability.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="team" id="team">
      <div class="container">
        <div class="section-header">
          <p class="section-subtitle">Our Team</p>
          <h2 class="section-title">Meet the Synaptix Network</h2>
          <p class="section-description">
            12 exceptional professionals united by passion, innovation, and excellence
          </p>
        </div>
        <div class="team-grid">
          ${generateTeamMembers()}
        </div>
      </div>
    </section>

    <section class="field-visits" id="field-visits">
      <div class="container">
        <div class="section-header">
          <p class="section-subtitle">Field Visits</p>
          <h2 class="section-title">Our Project Journey</h2>
          <p class="section-description">
            Documenting our field research and project implementation progress
          </p>
        </div>
        
        <div class="field-visit-day">
          <h3 class="day-title">Research Phase I: Discovery & Analysis</h3>
          <div class="field-visits-grid">
            <div class="field-visit-card">
              <img src="https://res.cloudinary.com/dtol8lk5b/image/upload/v1760966358/fieldVisitDy1-01_ma6thg.png" alt="Field Visit Day 1 - Image 1" class="field-visit-image">
              <div class="field-visit-overlay">
                <h3>Environmental Study</h3>
                <p>Exploring the ecosystem and contextual dynamics</p>
              </div>
            </div>
            <div class="field-visit-card">
              <img src="https://res.cloudinary.com/dtol8lk5b/image/upload/v1760966640/fieldVisitDy1-02_acgon5.png" alt="Field Visit Day 1 - Image 2" class="field-visit-image">
              <div class="field-visit-overlay">
                <h3>Collaborative Insights</h3>
                <p>Team brainstorming and knowledge sharing</p>
              </div>
            </div>
            <div class="field-visit-card">
              <img src="https://res.cloudinary.com/dtol8lk5b/image/upload/v1760966632/fieldVisitDy1-03_popa4f.png" alt="Field Visit Day 1 - Image 3" class="field-visit-image">
              <div class="field-visit-overlay">
                <h3>Pattern Recognition</h3>
                <p>Identifying key trends and opportunities</p>
              </div>
            </div>
          </div>
        </div>

        <div class="field-visit-day">
          <h3 class="day-title">Research Phase II: Deep Dive & Innovation</h3>
          <div class="field-visits-grid">
            <div class="field-visit-card">
              <img src="https://res.cloudinary.com/dtol8lk5b/image/upload/v1760966337/fieldVisitDy2-01_maspnx.png" alt="Field Visit Day 2 - Image 1" class="field-visit-image">
              <div class="field-visit-overlay">
                <h3>Solution Mapping</h3>
                <p>Crafting innovative approaches to challenges</p>
              </div>
            </div>
            <div class="field-visit-card">
              <img src="https://res.cloudinary.com/dtol8lk5b/image/upload/v1760966429/fieldVisitDy2-02_gycg9g.png" alt="Field Visit Day 2 - Image 2" class="field-visit-image">
              <div class="field-visit-overlay">
                <h3>Concept Validation</h3>
                <p>Testing hypotheses and refining ideas</p>
              </div>
            </div>
            <div class="field-visit-card">
              <img src="https://res.cloudinary.com/dtol8lk5b/image/upload/v1760966340/fieldVisitDy2-03_hih68h.png" alt="Field Visit Day 2 - Image 3" class="field-visit-image">
              <div class="field-visit-overlay">
                <h3>Future Vision</h3>
                <p>Mapping the path forward with insights</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="contact" id="contact">
      <div class="container">
        <div class="section-header">
          <p class="section-subtitle">Get In Touch</p>
          <h2 class="section-title">Let's Build Something Amazing</h2>
          <p class="section-description">
            Ready to transform your ideas into reality? Contact us today
          </p>
        </div>
        <div class="contact-content">
          <div class="contact-info">
            <h3>Connect With Us</h3>
            <p>
              Whether you have a project in mind or just want to chat about possibilities,
              we're here to help turn your vision into reality.
            </p>
                          <div class="contact-details">
              <div class="contact-item">
                <div class="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div class="contact-text">
                  <h4>Email</h4>
                  <p>hello@synaptix.com</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div class="contact-text">
                  <h4>Phone</h4>
                  <p>+94 72 564 5053</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div class="contact-text">
                  <h4>Location</h4>
                  <p>223A Galle Road, Panadura 12500</p>
                </div>
              </div>
            </div>
          </div>
          <form class="contact-form" id="contactForm">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
              <label for="message">Your Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" class="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>

    <footer class="site-footer">
      <div class="footer-content">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <h1 class="footer-title">Synaptix</h1><br>
              <p class="brand-description">
                One Network Endless Potential
              </p>
              <p class="footer-description">
                Innovative software solutions that connect, empower, and transform businesses in the digital age.
              </p>
            </div>

            <div class="footer-links quick-links">
              <h4>QUICK LINKS</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#mission">Mission & Vision</a></li>
                <li><a href="#team">Our Team</a></li>
              </ul>
            </div>

            <div class="footer-links contact-info">
              <h4>CONTACT US</h4>
              <ul>
                <li>
                  <a href="mailto:synaptix.2025@gmail.com">
                    synaptix.2025@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+94775257159">
                    +94 72 564 5053
                  </a>
                </li>
                <li>Panadura, Sri Lanka</li>
              </ul>
            </div>

            <div class="footer-links social-connect">
              <h4>CONNECT WITH US</h4>
              <p>Follow us on social media for updates and insights</p>
              <div class="social-links">
                <a href="https://www.linkedin.com/company/synaptix-official/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://github.com/Synaptix-One-network-endless-potential" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="mailto:synaptix.2025@gmail.com" aria-label="Email">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div class="powered-by">
            <h4>POWERED BY</h4>
            <div class="powered-by-logos">
              <img src="https://res.cloudinary.com/dtol8lk5b/image/upload/v1760966400/icetLogo_o58mvf.png" alt="ICET Logo">
              <img src="https://res.cloudinary.com/dtol8lk5b/image/upload/v1760966370/industryMindsLogo_jxgrre.png" alt="Industry Minds Logo">
            </div>
          </div>
          
          <div class="footer-bottom">
            <p class="copyright">&copy; 2025 Synaptix. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function generateTeamMembers() {

  const photos = [
    'https://res.cloudinary.com/dtol8lk5b/image/upload/v1760966446/Ryan_n5shyq.png',
    'https://res.cloudinary.com/dtol8lk5b/image/upload/v1760966368/Hiranya_sdz9wj.png',
    'https://res.cloudinary.com/dtol8lk5b/image/upload/v1760966387/Lagesha_r1mxz8.png',
    'https://res.cloudinary.com/dtol8lk5b/image/upload/v1760966377/Kaveen_ltfgtw.png',
    'https://res.cloudinary.com/dtol8lk5b/image/upload/v1760966301/Dulani_jcg6qo.png',
    'https://res.cloudinary.com/dtol8lk5b/image/upload/v1760966646/Chethiya_rqanbw.png',
    'https://res.cloudinary.com/dtol8lk5b/image/upload/v1760966423/Pesandu_g8bqzc.png',
    'https://res.cloudinary.com/dtol8lk5b/image/upload/v1760966523/Saranga_gew8bv.png',
    'https://res.cloudinary.com/dtol8lk5b/image/upload/v1760966427/Hasan_admr66.png',
    'https://res.cloudinary.com/dtol8lk5b/image/upload/v1760966289/Chethana_ve9t3r.png',
    'https://res.cloudinary.com/dtol8lk5b/image/upload/v1760966445/Manesh_gyltig.png',
    'https://res.cloudinary.com/dtol8lk5b/image/upload/v1760966491/Tashan_iqw3xg.png'
  ];

  const names = [
    'Buddeema Ryan',
    'Hiranya Mendis',
    'Lagensha Rupasinghe',
    'Kaveen Peiris',
    'Dulani Piusha',
    'Chethiya Pradeeptha',
    'Pesandu Jayasinghe',
    'Saranga Kalhari',
    'Hasan Ifthikar',
    'Chethana Perera',
    'Manesh Edirisinghe',
    'Tashan Appuhami'
  ];

  const roles = [
    'Team Leader',
    'Project Manager',
    'Buisness Analyst',
    'Social Media Manager',
    'Software Developer',
    'Software Developer',
    'Software Developer',
    'Software Developer',
    'Software Developer',
    'Software Developer',
    'Software Developer',
    'Software Developer'
  ];

  return roles.map((role, index) => `
    <div class="team-member">
      <div class="member-image" style="text-align: center;">
        <img src="${photos[index]}" alt="${names[index]}" class="member-image img">
      </div>
      <div class="member-info" style="text-align: center;">
        <h3 class="member-name">${names[index]}</h3>
        <p class="member-role">${role}</p>
      </div>
    </div>
  `).join('');
}


function hideLoader() {
  const loader = document.querySelector('.loading');
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 2700);
}

function initNavigation() {
  const navbar = document.getElementById('navbar');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  const links = navLinks.querySelectorAll('a');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
  });

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      if (link.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          navLinks.classList.remove('active');
          mobileMenuBtn.textContent = '☰';
        }
      }
    });
  });
}

function initScrollEffects() {
  const scrollIndicator = document.getElementById('scrollIndicator');

  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollIndicator.style.width = scrolled + '%';
  });

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.stat-card, .service-card, .team-member').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
  });
}

function initParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 20;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    const size = Math.random() * 4 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';

    particlesContainer.appendChild(particle);
  }
}

function initCounterAnimation() {
  const counters = document.querySelectorAll('.stat-number');
  let started = false;

  const observerOptions = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'));
          const duration = 2000;
          const increment = target / (duration / 16);
          let current = 0;

          const updateCounter = () => {
            current += increment;
            if (current < target) {
              counter.textContent = Math.floor(current);
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target + (target === 99 ? '%' : '+');
            }
          };

          updateCounter();
        });
      }
    });
  }, observerOptions);

  const aboutSection = document.querySelector('.about');
  if (aboutSection) {
    observer.observe(aboutSection);
  }
}

function initFormHandler() {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.textContent = '✓ Message Sent!';
      form.reset();

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 3000);
    }, 1500);
  });
}
