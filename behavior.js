/*jshint esversion: 6 */


////////// RESPONSIVE NAVIGATION BAR BEHAVIOR \\\\\\\\\\
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav_link");
const hamburgerIcon = document.querySelector("#hamburger_icon");

// Scroll to a specific section on the page
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Toggle the navigation menu and hamburger icon's active state
hamburgerIcon.addEventListener("click", () => {
  nav.classList.toggle("active");
  hamburgerIcon.classList.toggle("active");
});

// Scroll to section and close the navigation menu when a nav link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const sectionId = link.getAttribute('data-section-id');
    scrollToSection(sectionId);
    nav.classList.remove("active");
    hamburgerIcon.classList.remove("active");
  });
});


////////// MOVE TO TOP BUTTON BEHAVIOR \\\\\\\\\\
const moveToTopButton = document.querySelector("#move_to_top_button");

// Show or hide the 'Move to Top' button based on scroll position
window.addEventListener("scroll", () => {
  let scrollPosition = window.screenY || document.documentElement.scrollTop;

  if (scrollPosition > 250) {
    moveToTopButton.style.bottom = "50px";
  } else {
    moveToTopButton.style.bottom = "-50px";
  }
});

// Scroll smoothly to the top of the page when the button is clicked
moveToTopButton.addEventListener("click", (onclick) => {
  onclick.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


////////// GALLERY BEHAVIOR \\\\\\\\\\
document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const mainImage = document.getElementById("main_image");

  // Update the main image when a thumbnail is clicked
  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", function () {
      const imageUrl = this.getAttribute("src");
      mainImage.setAttribute("src", imageUrl);
    });
  });
});


////////// GLOBAL ANIMATION BEHAVIOR \\\\\\\\\\
// Observe elements and add or remove animation classes based on their visibility
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("hidden")) {
        entry.target.classList.add("show");
      } else if (entry.target.classList.contains("hidden_top")) {
        entry.target.classList.add("show_top");
      } else if (entry.target.classList.contains("hidden_right")) {
        entry.target.classList.add("show_right");
      } else if (entry.target.classList.contains("hidden_bottom")) {
        entry.target.classList.add("show_bottom");
      } else if (entry.target.classList.contains("hidden_left")) {
        entry.target.classList.add("show_left");
      }
    } else {
      entry.target.classList.remove("show", "show_top", "show_right", "show_bottom", "show_left");
    }
  });
});

// Observe hidden elements to trigger animations when they become visible
const hiddenElements = document.querySelectorAll(".hidden, .hidden_top, .hidden_right, .hidden_bottom, .hidden_left");
hiddenElements.forEach((element) => observer.observe(element));