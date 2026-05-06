const year = document.getElementById("currentYear");
const themeToggle = document.getElementById("themeToggle");
const topButton = document.getElementById("topBtn");
const navLinks = Array.from(document.querySelectorAll(".nav a"));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if (year) {
  year.textContent = new Date().getFullYear();
}

const storedTheme = localStorage.getItem("theme");
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

if (storedTheme === "light" || (!storedTheme && prefersLight)) {
  document.body.classList.add("light-theme");
}

function updateThemeLabel() {
  const isLight = document.body.classList.contains("light-theme");
  themeToggle?.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
}

updateThemeLabel();

themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  localStorage.setItem("theme", document.body.classList.contains("light-theme") ? "light" : "dark");
  updateThemeLabel();
});

topButton?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
);

sections.forEach((section) => navObserver.observe(section));

function updateTopButton() {
  topButton?.classList.toggle("visible", window.scrollY > 700);
}

window.addEventListener("scroll", updateTopButton, { passive: true });
updateTopButton();
