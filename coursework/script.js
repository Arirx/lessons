// header menu
const menu = document.querySelector('.header__nav');
const menuBtn = document.querySelector('.header__nav-btn');
const menuIcon = menuBtn.querySelector('.header__menu-btn');
const closeIcon = menuBtn.querySelector('.header__close-btn');

function toggleMenu() {
  const isOpen = menu.classList.toggle('open');
  
  menuBtn.classList.toggle('active', isOpen);
  
  menuBtn.setAttribute('aria-expanded', isOpen);
  menuBtn.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
  
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

menuBtn.setAttribute('aria-label', 'Открыть меню');
menuBtn.setAttribute('aria-expanded', 'false');

menuBtn.addEventListener('click', toggleMenu);

document.querySelectorAll('.header__nav-link').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuBtn.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', 'Открыть меню');
    document.body.style.overflow = '';
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu.classList.contains('open')) {
    menu.classList.remove('open');
    menuBtn.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', 'Открыть меню');
    document.body.style.overflow = '';
  }
});

let gallerySwiper = null;

function checkSlider() {
  if (window.innerWidth < 1180) {
    if (!gallerySwiper) {
      gallerySwiper = new Swiper('.gallery__slider', {
        slidesPerView: 1.2,
        spaceBetween: 20,

        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }
  } else {
    if (gallerySwiper) {
      gallerySwiper.destroy(true, true);
      gallerySwiper = null;
    }
  }
}

checkSlider();
window.addEventListener('resize', checkSlider);

let blogSwiper = null;

function initBlogSlider() {
  if (window.innerWidth < 1180) {
    if (!blogSwiper) {
      blogSwiper = new Swiper('.blog__slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: '.blog-slider-next',
          prevEl: '.blog-slider-prev'
        }
      });
    }
  } else {
    if (blogSwiper) {
      blogSwiper.destroy(true, true);
      blogSwiper = null;
    }
  }
}

initBlogSlider();
window.addEventListener('resize', initBlogSlider);

