// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileNav = document.getElementById("mobile-nav");
  const menuIcon = document.getElementById("menu-icon");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  // Toggle mobile menu
  mobileMenuButton.addEventListener("click", function () {
    mobileNav.classList.toggle("active");

    // Change icon
    if (mobileNav.classList.contains("active")) {
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-times");
    } else {
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars");
    }
  });

  // Close mobile menu when a link is clicked
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileNav.classList.remove("active");
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars");
    });
  });

  // Set current year in footer
  document.getElementById("current-year").textContent =
    new Date().getFullYear();

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerHeight = document.querySelector(".header").offsetHeight;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Form submission
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Here you would typically send the form data to a server
      // For this example, we'll just log it to the console
      console.log("Form submitted:", { name, email, message });

      // Show success message (you can customize this)
      alert("Pesan Anda telah terkirim! Terima kasih.");

      // Reset form
      contactForm.reset();
    });
  }

  // Add animation classes to elements when they come into view
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(
      ".section-title, .skill-card, .project-card, .contact-card"
    );

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 100) {
        element.classList.add("fade-in");
      }
    });
  };

  // Run animation check on scroll
  window.addEventListener("scroll", animateOnScroll);

  // Run animation check on page load
  animateOnScroll();

  // Skill bar animation
  const animateSkillBars = function () {
    const skillBars = document.querySelectorAll(".skill-progress");

    skillBars.forEach((bar) => {
      const barPosition = bar.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (barPosition < windowHeight - 50) {
        const width = bar.style.width;
        bar.style.width = "0";

        setTimeout(() => {
          bar.style.transition = "width 1s ease-in-out";
          bar.style.width = width;
        }, 200);
      }
    });
  };

  // Run skill bar animation on scroll
  window.addEventListener("scroll", animateSkillBars);

  // Run skill bar animation on page load
  setTimeout(animateSkillBars, 500);
});

// Typing effect for hero section (optional)
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.textContent = "";

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Uncomment and modify this if you want to add a typing effect to a specific element
// window.addEventListener('load', function() {
//     const typingElement = document.querySelector('.hero-text h2');
//     if (typingElement) {
//         const originalText = typingElement.textContent;
//         typeWriter(typingElement, originalText);
//     }
// });
