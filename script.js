document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navLinksList = document.querySelectorAll('.nav-links li a'); // Get all individual links

  if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', () => {
          navLinks.classList.toggle('active');
      });

      // Close mobile menu when a link is clicked
      navLinksList.forEach(link => {
          link.addEventListener('click', () => {
              if (navLinks.classList.contains('active')) {
                  navLinks.classList.remove('active');
              }
          });
      });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          // Handle the case where the target might be hidden by fixed nav
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          const headerOffset = document.querySelector('.navbar').offsetHeight; // Get nav height

          if (targetElement) {
              const elementPosition = targetElement.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 20; // -20 for a little extra padding

              window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth"
              });
          }
      });
  });

  // Change navbar background on scroll
  const navbar = document.querySelector('.navbar');

  if (navbar) {
      window.addEventListener('scroll', () => {
          if (window.scrollY > 50) { // Add 'scrolled' class after scrolling 50px
              navbar.classList.add('scrolled');
          } else {
              navbar.classList.remove('scrolled');
          }
      });
  }
});
