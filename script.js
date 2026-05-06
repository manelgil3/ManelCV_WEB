// ===== 1. Show current year in footer =====
document.getElementById('currentYear').textContent = new Date().getFullYear();

// ===== 2. Top Scroll Button =====
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// ===== 3. Sticky Navbar =====
const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

window.onscroll = function () {
  stickyNavbar();
  fadeInOnScroll();
};

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// ===== 4. Fade-In Animation on Scroll =====
function fadeInOnScroll() {
  let elements = document.querySelectorAll('.fade-in');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const visible = rect.top < window.innerHeight - 100;
    if (visible) el.style.animation = "fadeIn 1s ease forwards";
  });
}

// ===== 5. Dark/Light Theme Toggle =====
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  const body = document.body;
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
});

// ===== 6. Remove Loader After Delay =====
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.querySelector('.loader');
    if (loader) loader.style.display = 'none';
  }, 2000); // adjust as needed
});
