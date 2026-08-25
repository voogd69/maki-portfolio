const data = SITE_DATA;

document.querySelector('#hero-title').textContent = data.profile.heroTitle;
document.querySelector('#hero-subtitle').textContent = data.profile.heroSubtitle;

document.querySelector('#about-lead').textContent = data.profile.aboutLead;
document.querySelector('#about-text-1').textContent = data.profile.aboutText1;
document.querySelector('#about-text-2').textContent = data.profile.aboutText2;

const profileImage = document.querySelector('#profile-image');
profileImage.src = data.profile.profileImage;
profileImage.onerror = () => {
  profileImage.style.display = 'none';
  profileImage.parentElement.classList.add('placeholder');
  profileImage.parentElement.textContent = 'YOUR PHOTO';
};

const facts = document.querySelector('#facts');
data.profile.facts.forEach(item => {
  const div = document.createElement('div');
  div.innerHTML = `<small>${item.label}</small><strong>${item.value}</strong>`;
  facts.appendChild(div);
});

const serviceList = document.querySelector('#service-list');
data.services.forEach(item => {
  const card = document.createElement('article');
  card.className = 'service-card panel';
  card.innerHTML = `
    <div class="service-icon">${item.icon}</div>
    <h3>${item.title}</h3>
    <p>${item.text}</p>
  `;
  serviceList.appendChild(card);
});

const filterList = document.querySelector('#filter-list');
data.categories.forEach((item, index) => {
  const button = document.createElement('button');
  button.className = `filter ${index === 0 ? 'active' : ''}`;
  button.dataset.filter = item.id;
  button.textContent = item.label;
  filterList.appendChild(button);
});

const grid = document.querySelector('#works-grid');

function renderWorks(filter = 'all') {
  grid.innerHTML = '';

  const filtered = filter === 'all'
    ? data.works
    : data.works.filter(work => work.category === filter);

  filtered.forEach(work => {
    const card = document.createElement('a');
    card.className = 'work-card';
    card.href = work.detail;
    card.style.animationDelay = `${Math.min(grid.children.length * 70, 420)}ms`;
    card.innerHTML = `
      <img src="${work.image}" alt="${work.title}">
      <div class="work-info">
        <small>${work.type}</small>
        <p>${work.title}</p>
      </div>
    `;
    grid.appendChild(card);
  });
}

renderWorks();

filterList.addEventListener('click', event => {
  const button = event.target.closest('.filter');
  if (!button) return;

  document.querySelectorAll('.filter').forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');

  renderWorks(button.dataset.filter);
});

document.querySelector('#contact-text').textContent = data.contact.text;

const mail = document.querySelector('#mail-link');
mail.href = `mailto:${data.contact.email}`;
mail.textContent = data.contact.email;

const instagram = document.querySelector('#instagram-link');
instagram.href = data.contact.instagram;

const x = document.querySelector('#x-link');
x.href = data.contact.x;

document.querySelector('#year').textContent = new Date().getFullYear();

// Scroll reveal / progress / active navigation
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('.reveal');

if (!reducedMotion && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  revealItems.forEach(item => revealObserver.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('is-visible'));
}

const progressBar = document.querySelector('.scroll-progress span');
const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.nav a')];

function updateScrollEffects() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  progressBar.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`;

  const current = sections.reduce((active, section) =>
    window.scrollY >= section.offsetTop - window.innerHeight * .35 ? section.id : active, '');
  navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
}

window.addEventListener('scroll', updateScrollEffects, { passive: true });
updateScrollEffects();
