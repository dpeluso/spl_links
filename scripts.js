// Splunk Theme - Interactive enhancements

document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scroll behavior
  document.documentElement.style.scrollBehavior = 'smooth';

  // Enhance link buttons with ripple effect
  const linkButtons = document.querySelectorAll('.link-button, .icon-button');
  linkButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Create ripple effect
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');

      // Only add ripple if button is not a link to external page
      if (this.href && this.target === '_blank') {
        // External link - just let it work normally
      }
    });

    // Add keyboard navigation support
    button.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });

  // Add animation to profile picture on load
  const profilePic = document.querySelector('.profile-pic');
  if (profilePic) {
    profilePic.style.animation = 'fadeInScale 0.6s ease-out';
  }

  // Stagger animation for link buttons
  const links = document.querySelectorAll('.link-button');
  links.forEach((link, index) => {
    link.style.animation = `slideInUp 0.6s ease-out ${index * 0.1}s both`;
  });
});

// CSS animations (injected via JavaScript for better control)
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(4);
    }
  }

  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    transform: scale(0);
    animation: ripple 0.6s ease-out;
    pointer-events: none;
  }

  /* Splunk theme-specific enhancements */
  .container {
    animation: slideInUp 0.8s ease-out;
  }
`;
document.head.appendChild(style);

// Performance optimization: Use requestAnimationFrame for smooth animations
let ticking = false;
window.addEventListener('scroll', function() {
  if (!ticking) {
    window.requestAnimationFrame(function() {
      // Add any scroll-based animations here
      ticking = false;
    });
    ticking = true;
  }
});
