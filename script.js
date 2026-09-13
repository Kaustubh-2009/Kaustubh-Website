/* =====================================================================
   EDIT ME — everything you need to personalize lives in this one object.
   Change the values below; you don't need to touch the HTML/CSS.
===================================================================== */
const CONFIG = {
  name: "Kaustubh Bharti",
  initials: "KB", // shown top-left
  location: "Nagpur, India",
  roles: [
    "Building projects",
    "Learning DSA",
    "Preparing for internships",
    "Open to opportunities"
  ],
  about: [
    "I'm a first-year Computer Science Engineering student focused on building a strong foundation in data structures, algorithms, and software development — with the goal of landing an internship from second year onward and a strong final placement.",
    "Outside coursework, I like turning small ideas into working projects, and documenting what I build so it's easy for others — including recruiters — to follow."
  ],
  facts: {
    focus: "DSA, Web Development, AI tooling",
    currently: "Year 1 of B.Tech CSE",
    tools: "Git, VS Code, Linux basics, Vibe Coding"
  },

  // Group skills however makes sense to you — add or remove rows freely.
  skills: [
    { category: "Languages", items: "C, C++, Python, Java (learning), Vibe Coding" },
    { category: "Web", items: "HTML, CSS, JavaScript (basics)" },
    { category: "Tools", items: "Git & GitHub, VS Code, Linux command line, Cursor AI, Lovable, Replit, AntiGravity,etc." },
    { category: "Currently learning", items: "Data Structures & Algorithms" }
  ],

  // Add a new object to this array for each project. Delete the sample
  // entries and replace with your own — even a coursework project counts.
  projects: [
    {
      title: "First Project -Nixon Website",
      year: "2026",
      description: "One or two sentences on what this project does and why you built it.",
      stack: "e.g. Python, Flask, SQLite",
      role: "Solo project",
      link: "https://github.com/Kaustubh-2009/nixon-website"
    },
    {
      title: "Second Project — E-Commerce Website",
      year: "2026",
      description: "What problem it solves, and one detail a recruiter would find interesting.",
      stack: "e.g. HTML, CSS, JavaScript",
      role: "Solo project",
      link: "https://github.com/Kaustubh-2009/E-Commerce-Website"
    }
  ],

  education: [
    {
      period: "2026 — Present",
      title: "B.Tech, Computer Science Engineering — Ramdeobaba University",
      detail: "First year. Coursework: programming fundamentals, mathematics, data structures."
    },
    {
      period: "Earlier",
      title: "Higher Secondary (12th) — Science",
      detail: "Taywade Junior College-PCM"
    }
  ],

  // Add/remove any link. `label` is what's shown on the button.
  links: [
    { label: "GitHub", url: "https://github.com/Kaustubh-2009" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/kaustubh-bharti/" },
    { label: "Linktr", url: "https://linktr.ee/Kaustubh_2009" },
    { label: "Resume", url: "Kaustubh_Bharti_Resume_Cse.pdf" }
  ]
};

/* =====================================================================
   Rendering — you generally don't need to edit below this line.
===================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // Text fields
  document.querySelectorAll("[data-name]").forEach(el => el.textContent = CONFIG.name);
  document.querySelectorAll("[data-mark]").forEach(el => el.textContent = CONFIG.initials);
  document.querySelectorAll("[data-location]").forEach(el => el.textContent = CONFIG.location);
  document.querySelectorAll("[data-footer-name]").forEach(el => el.textContent = CONFIG.name);
  document.querySelector("[data-footer-year]").textContent = new Date().getFullYear();

  const aboutParas = document.querySelectorAll("[data-about-1], [data-about-2]");
  if (CONFIG.about[0]) document.querySelector("[data-about-1]").textContent = CONFIG.about[0];
  if (CONFIG.about[1]) document.querySelector("[data-about-2]").textContent = CONFIG.about[1];

  document.querySelector("[data-focus]").textContent = CONFIG.facts.focus;
  document.querySelector("[data-currently]").textContent = CONFIG.facts.currently;
  document.querySelector("[data-tools]").textContent = CONFIG.facts.tools;

  // Skills matrix
  const skillsEl = document.querySelector("[data-skills-matrix]");
  skillsEl.innerHTML = CONFIG.skills.map(row => `
    <div class="skill-row">
      <span class="skill-cat">${escapeHTML(row.category)}</span>
      <span class="skill-items">${escapeHTML(row.items)}</span>
    </div>
  `).join("");

  // Projects
  const projectsEl = document.querySelector("[data-project-list]");
  projectsEl.innerHTML = CONFIG.projects.map(p => `
    <article class="project-card">
      <div class="project-head">
        <h3 class="project-title"><a href="${escapeAttr(p.link)}" target="_blank" rel="noopener">${escapeHTML(p.title)}</a></h3>
        <span class="project-year">${escapeHTML(p.year)}</span>
      </div>
      <p class="project-desc">${escapeHTML(p.description)}</p>
      <div class="project-specs">
        <span>Stack: <strong>${escapeHTML(p.stack)}</strong></span>
        <span>Role: <strong>${escapeHTML(p.role)}</strong></span>
      </div>
    </article>
  `).join("");

  // Education timeline
  const timelineEl = document.querySelector("[data-timeline]");
  timelineEl.innerHTML = CONFIG.education.map(e => `
    <div class="timeline-item">
      <p class="timeline-period">${escapeHTML(e.period)}</p>
      <p class="timeline-title">${escapeHTML(e.title)}</p>
      <p class="timeline-detail">${escapeHTML(e.detail)}</p>
    </div>
  `).join("");

  // Contact links
  const linksEl = document.querySelector("[data-contact-links]");
  linksEl.innerHTML = CONFIG.links.map(l => `
    <a class="contact-link" href="${escapeAttr(l.url)}" target="_blank" rel="noopener">${escapeHTML(l.label)}</a>
  `).join("");

  // Typed role text
  const typedEl = document.querySelector("[data-typed]");
  typeLoop(typedEl, CONFIG.roles);

  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", false);
  }));
});

function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, s => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[s]));
}
function escapeAttr(str) { return escapeHTML(str); }

function typeLoop(el, phrases) {
  if (!el || !phrases || !phrases.length) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) { el.textContent = phrases[0]; return; }

  let phraseIndex = 0, charIndex = 0, deleting = false;

  function tick() {
    const current = phrases[phraseIndex];
    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }
    setTimeout(tick, deleting ? 35 : 55);
  }
  tick();
}
