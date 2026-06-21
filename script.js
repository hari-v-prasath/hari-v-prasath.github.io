// Live local time in status bar (Coimbatore, IST)
function updateClock() {
  const el = document.getElementById('local-time');
  if (!el) return;
  const now = new Date();
  const options = { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Kolkata' };
  el.textContent = now.toLocaleTimeString('en-IN', options) + ' IST';
}
updateClock();
setInterval(updateClock, 1000 * 30);

// Scroll-reveal for timeline and project cards
const revealTargets = document.querySelectorAll('.timeline-item, .project-card, .stack-group, .arch-item');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach((el) => {
  el.classList.add('reveal');
  observer.observe(el);
});
