let currentPage = 0;
const totalPages = 4;
let isInPages = false;

function startAdventure() {
  const hero = document.getElementById('hero');
  const navbar = document.getElementById('navbar');
  const navArrows = document.getElementById('navArrows');

  hero.classList.add('slide-up');

  setTimeout(() => {
    navbar.classList.add('visible');
    navArrows.classList.add('visible');
    hero.style.display = 'none';
    isInPages = true;
    goToPage(0);
  }, 1000);
}

function goToPage(pageNum) {
  if (!isInPages) return;

  const currentPageEl = document.getElementById(`page-${currentPage}`);
  if (currentPageEl) {
    currentPageEl.classList.remove('active');
  }

  currentPage = pageNum;

  const newPageEl = document.getElementById(`page-${currentPage}`);
  newPageEl.classList.add('active');

  updateNavigation();
}

function nextPage() {
  if (currentPage < totalPages - 1) {
    goToPage(currentPage + 1);
  }
}

function previousPage() {
  if (currentPage > 0) {
    goToPage(currentPage - 1);
  }
}

function updateNavigation() {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  prevBtn.disabled = currentPage === 0;
  nextBtn.disabled = currentPage === totalPages - 1;

  for (let i = 0; i < totalPages; i++) {
    const navLink = document.getElementById(`nav-${i}`);
    if (i === currentPage) {
      navLink.classList.add('active');
    } else {
      navLink.classList.remove('active');
    }
  }
}

function goBackToHero() {
  const hero = document.getElementById('hero');
  const navbar = document.getElementById('navbar');
  const navArrows = document.getElementById('navArrows');

  hero.style.display = 'flex';
  hero.classList.remove('slide-up'); 

  navbar.classList.remove('visible');
  navArrows.classList.remove('visible');

  isInPages = false;
  currentPage = 0;

  for (let i = 0; i < totalPages; i++) {
    const pageEl = document.getElementById(`page-${i}`);
    if (pageEl) pageEl.classList.remove('active');
  }

  hero.scrollIntoView({ behavior: 'smooth' });
}