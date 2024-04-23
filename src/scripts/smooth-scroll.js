import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

const anchers = document.querySelectorAll('a[href^="#"]');

anchers.forEach((ancher) => {
  ancher.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const target = document.querySelector(targetId);
    gsap.to(window, {
      duration: 1,
      ease: 'power4.out',
      scrollTo: {
        y: target,
        autoKill: false,
      },
    });
  });
});