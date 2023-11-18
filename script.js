///////////////////////////////////////////////////////////
// Sticky navigation
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect().height;

const isDesktopView = () => window.innerWidth >= 735;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting && isDesktopView()) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// Re-run the observer when the window is resized
window.addEventListener("resize", function () {
  if (isDesktopView()) {
    headerObserver.observe(header);
  } else {
    nav.classList.remove("sticky");
    headerObserver.unobserve(header);
  }
});
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// Smooth scrolling for menu navigation links
document.querySelector(".nav__list").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    const navHeight = nav.getBoundingClientRect().height;
    const targetElement = document.querySelector(id);

    if (targetElement) {
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  }
});
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// Set current year in copyright statement
const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;
///////////////////////////////////////////////////////////
