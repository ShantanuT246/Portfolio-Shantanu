(() => {
  "use strict";

  /* ── NAV: active link on scroll ── */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a, .nav-mobile a");

  function setActiveNav() {
    let currentId = "";
    sections.forEach((sec) => {
      if (window.scrollY >= sec.offsetTop - 80) currentId = sec.id;
    });
    navLinks.forEach((a) => {
      a.classList.toggle("active", a.getAttribute("href") === `#${currentId}`);
    });
  }

  /* ── NAV: hamburger toggle ── */
  const toggle = document.getElementById("nav-toggle");
  const mobileMenu = document.getElementById("nav-mobile");

  if (toggle && mobileMenu) {
    toggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
      const spans = toggle.querySelectorAll("span");
      const isOpen = mobileMenu.classList.contains("open");
      spans[0].style.transform = isOpen ? "translateY(5.5px) rotate(45deg)" : "";
      spans[1].style.opacity = isOpen ? "0" : "1";
      spans[2].style.transform = isOpen ? "translateY(-5.5px) rotate(-45deg)" : "";
    });
    // Close on link click
    mobileMenu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        toggle.querySelectorAll("span").forEach((s) => {
          s.style.transform = "";
          s.style.opacity = "";
        });
      });
    });
  }

  /* ── SCROLL ANIMATIONS ── */
  const fadeEls = document.querySelectorAll(".fade-up");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );
  fadeEls.forEach((el) => observer.observe(el));

  /* ── EMAIL COPY ── */
  const emailBtn = document.getElementById("copy-email");
  if (emailBtn) {
    emailBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(CONTENT.email).then(() => {
        const orig = emailBtn.innerHTML;
        emailBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Copied!`;
        setTimeout(() => (emailBtn.innerHTML = orig), 2000);
      });
    });
  }

  /* ── SCROLL LISTENER ── */
  window.addEventListener("scroll", setActiveNav, { passive: true });
  setActiveNav();
})();
