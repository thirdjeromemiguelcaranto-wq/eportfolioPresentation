/* =====================================================
   PORTFOLIO BEHAVIOR – you usually don't need to edit this.
   Content lives in js/data.js
   ===================================================== */

const TARGETS = { activities: "c-act", quizzes: "c-quiz", projects: "c-proj", exams: "c-exam" };
let currentTerm = "All";

/* ---------- Build output cards ---------- */
function buildCards() {
  for (const key in TARGETS) {
    document.getElementById(TARGETS[key]).innerHTML = DATA[key].map(x => `
      <article class="card open" data-term="${x.term}">
        <button class="head" aria-expanded="true">
          <span class="tag t-${x.term}">${x.term}</span><span class="chev">▾</span>
          <h3>${x.title}</h3><p>${x.desc}</p>
        </button>
        <div class="more"><div><div class="in">
          ${x.img
            ? `<img class="output-preview" src="${x.img}" alt="${x.title} preview">`
            : /\.pdf(?:$|[?#])/i.test(x.link)
              ? `<iframe class="output-preview pdf-preview" src="${x.link}" title="${x.title} PDF preview"></iframe>`
              : `<div class="ph">🖼 Screenshot / file preview</div>`}
          <p style="margin:12px 0 4px"><b>What I learned:</b> Add a one-line takeaway.</p>
          <a href="${x.link}" target="_blank" rel="noopener">View full output →</a>
        </div></div></div>
      </article>`).join("");
  }
  document.querySelectorAll(".card .head").forEach(btn => {
    btn.onclick = () => {
      const open = btn.parentElement.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
    };
  });
}

/* ---------- Filter chips (All / Prelim / Midterm / Final) ---------- */
function buildFilters() {
  const bar = document.createElement("div");
  bar.className = "chips";
  bar.innerHTML = ["All", "Prelim", "Midterm", "Final"]
    .map(t => `<button class="chip" aria-pressed="${t === "All"}" data-f="${t}">${t}</button>`).join("")
    + `<span class="count" id="count"></span>`;
  document.querySelector("#s5 .sub").after(bar);
  bar.onclick = e => {
    const f = e.target.dataset.f;
    if (!f) return;
    currentTerm = f;
    bar.querySelectorAll(".chip").forEach(c => c.setAttribute("aria-pressed", c.dataset.f === f));
    applyFilter();
  };
}
function applyFilter() {
  let shown = 0;
  document.querySelectorAll(".card").forEach(c => {
    const hide = currentTerm !== "All" && c.dataset.term !== currentTerm;
    c.classList.toggle("hide", hide);
    if (!hide) shown++;
  });
  document.getElementById("count").textContent = shown + " outputs shown";
}

/* ---------- Table of contents ---------- */
function buildToc() {
  document.getElementById("toc").innerHTML = SECTIONS.map((name, i) =>
    `<a href="#s${i + 1}"><i>${String(i + 1).padStart(2, "0")}</i>${name.replace("&", "&amp;")}</a>`).join("");
}

/* ---------- Summary stats ---------- */
function buildStats() {
  const stats = [
    [DATA.activities.length, "Activities"], [DATA.quizzes.length, "Quizzes"],
    [DATA.projects.length, "Projects"],     [DATA.exams.length, "Exams"]
  ];
  document.getElementById("stats").innerHTML = stats.map(s =>
    `<div class="panel stat"><b data-to="${s[0]}">0</b><span>${s[1]}</span></div>`).join("");
}
function countUp(el) {
  const to = +el.dataset.to; let i = 0;
  const timer = setInterval(() => { el.textContent = ++i; if (i >= to) clearInterval(timer); }, 180);
}

/* ---------- Theme switcher (remembers your choice) ---------- */
function setTheme(name) {
  document.documentElement.dataset.theme = name;
  document.querySelectorAll(".dot").forEach(d => d.setAttribute("aria-pressed", d.dataset.t === name));
  try { localStorage.setItem("pf-theme", name); } catch (e) {}
}
function initTheme() {
  document.querySelectorAll(".dot").forEach(d => d.onclick = () => setTheme(d.dataset.t));
  let saved = null;
  try { saved = localStorage.getItem("pf-theme"); } catch (e) {}
  setTheme(saved || (matchMedia("(prefers-color-scheme:dark)").matches ? "midnight" : "classic"));
}

/* ---------- Scroll animations + progress bar ---------- */
function initScroll() {
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("in");
      e.target.querySelectorAll("[data-to]").forEach(countUp);
      io.unobserve(e.target);
    }
  }), { threshold: .12 });
  document.querySelectorAll(".reveal").forEach(r => io.observe(r));

  addEventListener("scroll", () => {
    const h = document.documentElement;
    document.getElementById("progress").style.width =
      (h.scrollTop / (h.scrollHeight - h.clientHeight || 1) * 100) + "%";
  }, { passive: true });
}

/* ---------- Start everything ---------- */
initTheme();
buildCards();
buildFilters();
buildToc();
buildStats();
applyFilter();
initScroll();
