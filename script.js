// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll behavior for all nav links
    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
      });
    });
  
    // Animasi muncul saat scroll
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-section");
        }
      });
    }, { threshold: 0.1 });
  
    sections.forEach(section => {
      section.classList.add("hide-section");
      observer.observe(section);
    });
  
    // Tema Siang/Malam Toggle
    const toggle = document.getElementById("theme-toggle");
    const fadeOverlay = document.getElementById("theme-fade-overlay");
    
    toggle.addEventListener("click", () => {
      fadeOverlay.style.opacity = "1";
      setTimeout(() => {
        document.body.classList.toggle("dark-theme");
        const icon = toggle.textContent.trim();
        toggle.textContent = icon === "☀️" ? "🌙" : "☀️";
        fadeOverlay.style.opacity = "0";
      }, 300);
    });
    
  
    // Simulasi loading screen
    const loader = document.getElementById("loader");
    window.addEventListener("load", () => {
      loader.classList.add("fade-out");
      setTimeout(() => loader.style.display = "none", 500);
    });
  });
  