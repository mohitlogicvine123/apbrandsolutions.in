// navbar class add 
window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 120) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


// offcanvas 
function toggleMenu() {
    const menu = document.getElementById('offcanvas-menu');
    const body = document.body;
    const menuIcon = document.getElementById('menu-icon');
    menu.classList.toggle('-translate-x-full');
    if (menu.classList.contains('-translate-x-full')) {
      body.style.overflow = 'auto';  // Enable scrolling when menu is closed
      menuIcon.classList.remove('open'); // Change icon back to menu
    } else {
      body.style.overflow = 'hidden';  // Disable scrolling when menu is open
      menuIcon.classList.add('open');   // Change icon to close (X)
    }
}
function closeMenu() {
    const menu = document.getElementById('offcanvas-menu');
    const body = document.body;
    const menuIcon = document.getElementById('menu-icon');
    menu.classList.add('-translate-x-full');  // Close the menu
    body.style.overflow = 'auto';  // Enable scrolling
    menuIcon.classList.remove('open');  // Change icon back to menu
}


// faq js
const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    const icon = header.querySelector('[data-accordion-icon]');
    header.addEventListener('click', () => {
      const isExpanded = header.getAttribute('aria-expanded') === 'true';
      accordionItems.forEach(otherItem => {
        if (otherItem !== item) {
          const otherContent = otherItem.querySelector('.accordion-content');
          const otherIcon = otherItem.querySelector('[data-accordion-icon]');
          otherContent.classList.add('hidden');
          otherIcon.classList.remove('rotate-180'); // Reset rotation of other icons
          otherItem.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
        }
      });
      content.classList.toggle('hidden');
      icon.classList.toggle('rotate-180');
      header.setAttribute('aria-expanded', !isExpanded);
  });
});


// slider js
{
  class SliderClip {
    constructor(el) {
      this.el = el;
      this.Slides = Array.from(this.el.querySelectorAll('.slider-inner'));
      this.Nav = Array.from(this.el.querySelectorAll('.slider-dot'));
      this.totalSlides = this.Slides.length;
      this.current = 0;
      this.autoPlay = true; //true or false
      this.timeTrans = 4000; //transition time in milliseconds
      this.IndexElements = [];

      for (let i = 0; i < this.totalSlides; i++) {
        this.IndexElements.push(i);
      }

      this.setCurret();
      this.initEvents();
    }
    setCurret() {
      this.Slides[this.current].classList.add('current');
      this.Nav[this.current].classList.add('current_dot');
    }
    initEvents() {
      const self = this;

      this.Nav.forEach(dot => {
        dot.addEventListener('click', ele => {
          ele.preventDefault();
          this.changeSlide(this.Nav.indexOf(dot));
        });
      });

      this.el.addEventListener('mouseenter', () => self.autoPlay = false);
      this.el.addEventListener('mouseleave', () => self.autoPlay = true);

      setInterval(function () {
        if (self.autoPlay) {
          self.current = self.current < self.Slides.length - 1 ? self.current + 1 : 0;
          self.changeSlide(self.current);
        }
      }, this.timeTrans);

    }
    changeSlide(index) {

      this.Nav.forEach(allDot => allDot.classList.remove('current_dot'));

      this.Slides.forEach(allSlides => allSlides.classList.remove('prev', 'current'));

      const getAllPrev = value => value < index;

      const prevElements = this.IndexElements.filter(getAllPrev);

      prevElements.forEach(indexPrevEle => this.Slides[indexPrevEle].classList.add('prev'));

      this.Slides[index].classList.add('current');
      this.Nav[index].classList.add('current_dot');
    }}


  const slider = new SliderClip(document.querySelector('.slider'));
} 

