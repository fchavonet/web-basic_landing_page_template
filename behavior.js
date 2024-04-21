/*jshint esversion: 6 */


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