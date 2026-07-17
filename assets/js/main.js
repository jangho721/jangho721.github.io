const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Scroll-spy: highlight the nav link for the section currently in view
const navLinks = Array.from(document.querySelectorAll("header nav a[href^='#']"));
const sections = navLinks
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

if (sections.length) {
  const setActive = (id) => {
    navLinks.forEach((a) => {
      const isActive = a.getAttribute("href") === `#${id}`;
      a.classList.toggle("bg-accent/10", isActive);
      a.classList.toggle("text-accent", isActive);
      a.classList.toggle("text-ink/70", !isActive);
    });
  };

  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  sections.forEach((s) => spy.observe(s));
}

// Fade sections in as they scroll into view
if (!reduceMotion) {
  const revealEls = document.querySelectorAll("main section[id]");
  revealEls.forEach((el) => el.classList.add("reveal"));

  const reveal = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => reveal.observe(el));
}
