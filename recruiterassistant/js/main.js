/* Trigger fade-up animations when elements scroll into view */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

/* Expand the founder section on button click */
function expandFounder() {
  document.getElementById('founderTeaser').style.display = 'none';
  document.getElementById('founderContent').classList.add('open');
}
