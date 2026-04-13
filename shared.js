// Nav scroll effect
window.addEventListener('scroll', () => {
  document.getElementById('main-nav').style.boxShadow =
    window.scrollY > 40 ? '0 4px 30px rgba(0,0,0,.5)' : 'none';
});

// Mobile menu
function toggleNav() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// Scroll reveal
const revealObs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), e.target.dataset.delay || 0);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.dataset.delay = (i % 6) * 80;
  revealObs.observe(el);
});
