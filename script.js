///////////////////////////////////////////////////////////
// Sticky navigation
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);
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
