const sections = [...document.querySelectorAll('.document-section')];
const tocLinks = [...document.querySelectorAll('.toc-link')];

const setActiveLink = (id) => {
  tocLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
  });
};

const observer = new IntersectionObserver((entries) => {
  const visible = entries
    .filter((entry) => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (visible) setActiveLink(visible.target.id);
}, { rootMargin: '-16% 0px -65% 0px', threshold: [0, 0.25, 0.6] });

sections.forEach((section) => observer.observe(section));

tocLinks.forEach((link) => {
  link.addEventListener('click', () => setActiveLink(link.getAttribute('href').slice(1)));
});
