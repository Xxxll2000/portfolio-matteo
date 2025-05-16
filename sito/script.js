document.addEventListener('DOMContentLoaded', function() {
  // Theme toggle functionality
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const icon = themeToggle.querySelector('i');
  
  // Check for saved theme preference or use preferred color scheme
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme) {
    body.classList.add(savedTheme + '-theme');
    updateIcon(savedTheme);
  } else if (prefersDark) {
    body.classList.add('dark-theme');
    updateIcon('dark');
  } else {
    body.classList.add('light-theme');
    updateIcon('light');
  }
  
  // Toggle theme on button click
  themeToggle.addEventListener('click', function() {
    if (body.classList.contains('dark-theme')) {
      body.classList.replace('dark-theme', 'light-theme');
      localStorage.setItem('theme', 'light');
      updateIcon('light');
    } else {
      body.classList.replace('light-theme', 'dark-theme');
      localStorage.setItem('theme', 'dark');
      updateIcon('dark');
    }
  });
  
  // Update the theme icon based on current theme
  function updateIcon(theme) {
    if (theme === 'dark') {
      icon.classList.replace('fa-sun', 'fa-moon');
    } else {
      icon.classList.replace('fa-moon', 'fa-sun');
    }
  }
  
  // Form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Messaggio inviato! Grazie per avermi contattato.');
      this.reset();
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});<!-- ... resto del codice HTML ... -->

  <script src="js/script.js" defer></script>
</body>
</html>