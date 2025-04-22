// Toggle light/dark mode
const toggle = document.querySelector('#theme-toggle__checkbox');
const toggleLabel = document.querySelector('.theme-toggle__label');



// Table of Contents
const tocLinks = document.querySelectorAll('.toc__item a');
let selected = document.querySelector('.selected');

let callback = (entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      const sectionId = entry.target.id;

      for (let i = 0; i < tocLinks.length; i++) {
        const link = tocLinks[i];

        if (link.getAttribute('href') === ('#' + sectionId)) {
          selected.classList.remove('selected');
          link.classList.add('selected');
          selected = link;
        }
      }
    }
  })
}

const observer = new IntersectionObserver(callback);

const sections = document.querySelectorAll('section');
sections.forEach(section => observer.observe(section));