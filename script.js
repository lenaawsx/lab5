// ==================== Кнопка "Наверх" ====================
const scrollBtn = document.querySelector('#scrollTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = 'flex';
  } else {
    scrollBtn.style.display = 'none';
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ==================== Аккордеон ====================
const accordionTitles = document.querySelectorAll('.accordion-title');

accordionTitles.forEach(title => {
  title.addEventListener('click', () => {
    accordionTitles.forEach(t => {
      if (t !== title) t.nextElementSibling.style.display = 'none';
    });
    const content = title.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

// ==================== Фильтры фотогалереи ====================
const filterButtons = document.querySelectorAll('.filters button');
const galleryImages = document.querySelectorAll('.gallery img');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-category');

    galleryImages.forEach(img => {
      if (category === 'all' || img.getAttribute('data-category') === category) {
        img.style.display = 'block';
      } else {
        img.style.display = 'none';
      }
    });
  });
});

// ==================== Модальное окно ====================
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const closeBtn = modal.querySelector('.close');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});
