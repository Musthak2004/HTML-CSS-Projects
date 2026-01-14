/* =========================
   Smooth Scroll for Links
========================= */
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

/* =========================
   Active Nav Link Highlight
========================= */
const navLinks = document.querySelectorAll("nav a");
const currentPage = location.pathname.split("/").pop();

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.style.color = "#38bdf8";
    link.style.fontWeight = "600";
  }
});

/* =========================
   Scroll Reveal Animation
========================= */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll("section, .project-card, .skill-group").forEach(el => {
  observer.observe(el);
});

/* =========================
   Card Hover Lift Effect
========================= */
document.querySelectorAll(".project-card, .skill-category, .skill-group").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-6px)";
    card.style.transition = "0.3s ease";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

/* =========================
   CTA Attention Pulse
========================= */
const cta = document.querySelector(".cta");

if (cta) {
  setInterval(() => {
    cta.classList.toggle("pulse");
  }, 3000);
}
