(() => {
  "use strict";

  // Dynamic copyright year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Navigation menu toggle for mobile
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("navLinks");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }));
  }

  // Active section spy in navigation
  const links = [...document.querySelectorAll(".nav-links a")];
  const sections = [...document.querySelectorAll("main section[id]")];
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      links.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`));
    }, { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.2, 0.5] });
    sections.forEach((section) => observer.observe(section));
  }

  // Dark / Light Theme Toggle
  const themeToggle = document.getElementById("themeToggle");
  const root = document.documentElement;

  const getPreferredTheme = () => {
    const stored = localStorage.getItem("portfolio-theme");
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  };

  const applyTheme = (theme) => {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
    if (themeToggle) {
      const isDark = theme === "dark";
      const icon = themeToggle.querySelector(".theme-toggle__icon");
      const label = themeToggle.querySelector(".theme-toggle__label");
      if (icon) icon.textContent = isDark ? "☀️" : "🌙";
      if (label) label.textContent = isDark ? "theme: dark" : "theme: light";
      themeToggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    }
  };

  // Initialize theme
  applyTheme(getPreferredTheme());

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = root.getAttribute("data-theme") || "dark";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
    });
  }

  // Projects Horizontal Carousel & Scroll Animation
  const projectList = document.getElementById("projectList");
  const projectCards = [...document.querySelectorAll(".project-card")];
  const prevBtn = document.getElementById("projPrev");
  const nextBtn = document.getElementById("projNext");
  const counter = document.getElementById("projCounter");
  const indicators = [...document.querySelectorAll(".indicator-dot")];
  const dirLinks = [...document.querySelectorAll(".directory-list a[data-project-idx]")];

  if (projectList && projectCards.length > 0) {
    let activeIndex = 0;

    const updateCarouselUI = (index) => {
      activeIndex = Math.max(0, Math.min(index, projectCards.length - 1));

      // Update counter text (e.g. "01 / 03")
      if (counter) {
        const currNum = String(activeIndex + 1).padStart(2, "0");
        const totalNum = String(projectCards.length).padStart(2, "0");
        counter.textContent = `${currNum} / ${totalNum}`;
      }

      // Update indicator dots
      indicators.forEach((dot, i) => {
        dot.classList.toggle("is-active", i === activeIndex);
        dot.setAttribute("aria-current", i === activeIndex ? "true" : "false");
      });

      // Update card active states
      projectCards.forEach((card, i) => {
        card.classList.toggle("is-active", i === activeIndex);
      });
    };

    const scrollToProject = (index) => {
      if (index < 0 || index >= projectCards.length) return;
      const targetCard = projectCards[index];
      if (targetCard) {
        targetCard.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start"
        });
      }
      updateCarouselUI(index);
    };

    // Button clicks
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        scrollToProject(activeIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        scrollToProject(activeIndex + 1);
      });
    }

    // Indicator dot clicks
    indicators.forEach((dot) => {
      dot.addEventListener("click", () => {
        const idx = parseInt(dot.getAttribute("data-index"), 10);
        if (!isNaN(idx)) scrollToProject(idx);
      });
    });

    // Directory list quick jump links
    dirLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const idx = parseInt(link.getAttribute("data-project-idx"), 10);
        if (!isNaN(idx)) {
          e.preventDefault();
          scrollToProject(idx);
        }
      });
    });

    // Observe scrolling inside projectList to sync active state
    let scrollTimeout;
    projectList.addEventListener("scroll", () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollLeft = projectList.scrollLeft;
        let closestIndex = 0;
        let minDiff = Infinity;

        projectCards.forEach((card, i) => {
          const diff = Math.abs(card.offsetLeft - projectList.offsetLeft - scrollLeft);
          if (diff < minDiff) {
            minDiff = diff;
            closestIndex = i;
          }
        });

        updateCarouselUI(closestIndex);
      }, 60);
    }, { passive: true });

    // Initial state
    updateCarouselUI(0);
  }
})();
