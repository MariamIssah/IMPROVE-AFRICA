// js/script.js
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
  
    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        console.log("Hamburger clicked, menu toggled"); // Debugging
      });
    } else {
      console.error("Hamburger or nav-links not found"); // Debugging
    }
  });