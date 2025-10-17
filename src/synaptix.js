// Synaptix Website JavaScript

import './synaptix.css';

document.addEventListener('DOMContentLoaded', function() {
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
          <img src="./src/img/Synaptix.png" alt="Synaptix Logo" class="nav-logo">
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
          Welcome to <span class="highlight">SYNAPTIX</span>
        </h1>
        <p class="hero-slogan">One Network, Endless Potential</p>
        <p class="hero-description">
          We are a cutting-edge software organization dedicated to building innovative solutions
          that connect, empower, and transform businesses in the digital age.
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
            <div class="service-icon">⚡</div>
            <h3 class="service-title">Web Development</h3>
            <p class="service-description">
              Build powerful, scalable web applications with modern technologies and best practices
              that deliver exceptional user experiences.
            </p>
          </div>
          <div class="service-card">
            <div class="service-icon">📱</div>
            <h3 class="service-title">Mobile Solutions</h3>
            <p class="service-description">
              Native and cross-platform mobile applications that engage users and drive business
              growth across all devices.
            </p>
          </div>
          <div class="service-card">
            <div class="service-icon">☁️</div>
            <h3 class="service-title">Cloud Infrastructure</h3>
            <p class="service-description">
              Secure, scalable cloud solutions that ensure your applications perform flawlessly
              with maximum uptime and reliability.
            </p>
          </div>
          <div class="service-card">
            <div class="service-icon">🔒</div>
            <h3 class="service-title">Cybersecurity</h3>
            <p class="service-description">
              Protect your digital assets with enterprise-grade security solutions and best
              practices that keep threats at bay.
            </p>
          </div>
          <div class="service-card">
            <div class="service-icon">🤖</div>
            <h3 class="service-title">AI & Machine Learning</h3>
            <p class="service-description">
              Harness the power of artificial intelligence to automate processes and gain
              valuable insights from your data.
            </p>
          </div>
          <div class="service-card">
            <div class="service-icon">🎨</div>
            <h3 class="service-title">UI/UX Design</h3>
            <p class="service-description">
              Create stunning, intuitive interfaces that delight users and enhance brand
              perception through thoughtful design.
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
                <div class="contact-icon">📧</div>
                <div class="contact-text">
                  <h4>Email</h4>
                  <p>hello@synaptix.com</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">📞</div>
                <div class="contact-text">
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-icon">📍</div>
                <div class="contact-text">
                  <h4>Location</h4>
                  <p>San Francisco, CA 94102</p>
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

    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <h3>SYNAPTIX</h3>
            <p>One Network, Endless Potential. Building the future of software, one connection at a time.</p>
            <div class="social-links">
              <a href="#" class="social-link">𝕏</a>
              <a href="#" class="social-link">💼</a>
              <a href="#" class="social-link">📘</a>
              <a href="#" class="social-link">📷</a>
            </div>
          </div>
          <div class="footer-links">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">Mobile Apps</a></li>
              <li><a href="#services">Cloud Solutions</a></li>
              <li><a href="#services">Cybersecurity</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">GDPR</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 <span>Synaptix</span>. All rights reserved. Made with passion and innovation.</p>
        </div>
      </div>
    </footer>
  `;
}

function generateTeamMembers() {

  const photos = [
    './src/img/Ryan.png',
    './src/img/Hiranya.png',
    './src/img/Lagesha.png',
    './src/img/Kaveen.png',
    './src/img/Dulani.png',
    './src/img/Chethiya.png',
    './src/img/Pesandu.png',
    './src/img/Saranga.png',
    './src/img/Hasan.png',
    './src/img/Chethana.png',
    './src/img/Manesh.png',
    './src/img/Tashan.png'
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

  const bios = [
    'Inspiring leader guiding the team to success.',
    'Driving project success through smart planning.',
    'Bridging business needs with smart solutions.',
    'Crafting content that inspires and engages.',
    'Building reliable software with creativity and care.',
    'Building reliable software with creativity and care.',
    'Building reliable software with creativity and care.',
    'Building reliable software with creativity and care.',
    'Building reliable software with creativity and care.',
    'Building reliable software with creativity and care.',
    'Building reliable software with creativity and care.',
    'Building reliable software with creativity and care.'
  ];


  return roles.map((role, index) => `
    <div class="team-member">
      <div class="member-image">
        <img src="${photos[index]}" alt="${names[index]}" class="member-image img">
      </div>
      <div class="member-info">
        <h3 class="member-name">${names[index]}</h3>
        <p class="member-role">${role}</p>
        <p class="member-bio">${bios[index]}</p>
      </div>
    </div>
  `).join('');
}


function hideLoader() {
  const loader = document.querySelector('.loading');
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 3000);
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
