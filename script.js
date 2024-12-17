function viewPDF() {
    window.open('assets/Carlo M. Manalo_resume.pdf', '_blank');
}

// Get the button
const scrollUpBtn = document.getElementById("scrollUpBtn");

// Show the button when user scrolls 100px down
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollUpBtn.classList.add("show");
  } else {
    scrollUpBtn.classList.remove("show");
  }
});

// Scroll to the top when the button is clicked
scrollUpBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});