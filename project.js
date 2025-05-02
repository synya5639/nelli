
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.onscroll = () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
};
scrollTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });


const themeToggleBtn = document.getElementById('themeToggleBtn');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}


const fadeElems = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
});
fadeElems.forEach(el => observer.observe(el));

for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDelay = Math.random() * 10 + 's';
    document.body.appendChild(heart);
  }