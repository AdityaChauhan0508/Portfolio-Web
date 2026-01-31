/* ============================================
   HERO TYPING EFFECT
============================================ */

const roles = [
  "Full Stack Developer",
  "AI Engineer",
  "Web Architect",
  "Problem Solver"
];

const typingEl = document.getElementById("typing");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  if (!typingEl) return;

  const current = roles[roleIndex];

  if (!deleting) {
    typingEl.textContent = current.slice(0, charIndex++);
  } else {
    typingEl.textContent = current.slice(0, charIndex--);
  }

  if (charIndex === current.length + 1) {
    deleting = true;
    setTimeout(typeEffect, 1200);
    return;
  }

  if (deleting && charIndex === 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(typeEffect, deleting ? 60 : 90);
}

typeEffect();


/* ============================================
   SCROLL REVEAL (PERFORMANCE FRIENDLY)
============================================ */

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll("section").forEach(sec => {
  observer.observe(sec);
});


/* ============================================
   NAVBAR SCROLL PROGRESS
============================================ */

const scrollBar = document.getElementById("scroll-bar");

window.addEventListener("scroll", () => {

  const winScroll = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrolled = (winScroll / height) * 100;

  if (scrollBar) {
    scrollBar.style.width = scrolled + "%";
  }

});


/* ============================================
   ACTIVE NAV LINK
============================================ */

const navLinks = document.querySelectorAll(".nav-links a");
const pageSections = document.querySelectorAll("section");

function updateActiveNav() {

  let current = "";

  pageSections.forEach(section => {
    const sectionTop = section.offsetTop - 150;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }

  });

}

window.addEventListener("scroll", updateActiveNav);


/* ============================================
   SKILL BAR ANIMATION
============================================ */

const skillBars = document.querySelectorAll(".bar span");

function animateSkills() {

  skillBars.forEach(bar => {

    const barTop = bar.getBoundingClientRect().top;

    if (barTop < window.innerHeight - 50) {
      const level = bar.dataset.level;
      bar.style.width = level + "%";
    }

  });

}

window.addEventListener("scroll", animateSkills);
animateSkills();


/* ============================================
   SKILL FILTER SYSTEM
============================================ */

const filterBtns = document.querySelectorAll(".skill-filters button");
const skillCards = document.querySelectorAll(".skill-card");

filterBtns.forEach(btn => {

  btn.addEventListener("click", () => {

    // Active state
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    skillCards.forEach(card => {

      if (filter === "all" || card.classList.contains(filter)) {
        card.style.display = "block";
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateX(0)";
        }, 50);
      } 
      else {
        card.style.opacity = "0";
        card.style.transform = "translateX(-20px)";
        setTimeout(() => {
          card.style.display = "none";
        }, 300);
      }

    });

  });

});


/* ============================================
   PROJECT MODAL (CASE STUDY READY)
============================================ */

const modal = document.createElement("div");
modal.classList.add("project-modal");
modal.innerHTML = `
  <div class="modal-content">
    <span class="close-modal">&times;</span>
    <div class="modal-body"></div>
  </div>
`;

document.body.appendChild(modal);

const modalBody = modal.querySelector(".modal-body");
const closeModal = modal.querySelector(".close-modal");

document.querySelectorAll(".open-modal").forEach(btn => {

  btn.addEventListener("click", e => {

    const card = e.target.closest(".project-card");

    const title = card.querySelector("h3").textContent;
    const desc = card.querySelector("p").textContent;
    const img = card.querySelector("img").src;

    modalBody.innerHTML = `
      <img src="${img}" alt="${title}">
      <h2>${title}</h2>
      <p>${desc}</p>

      <h4>Tech Stack</h4>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
      </ul>

      <h4>Highlights</h4>
      <p>
        • Optimized performance<br>
        • Responsive design<br>
        • Clean architecture
      </p>
    `;

    modal.classList.add("show");

  });

});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});


/* ============================================
   SMOOTH PAGE TRANSITION (OPTIONAL)
============================================ */

document.querySelectorAll("a").forEach(link => {

  link.addEventListener("click", e => {

    const href = link.getAttribute("href");

    if (href && href.startsWith("#")) return;

    document.body.classList.add("fade-out");

  });

});
