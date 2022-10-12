import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

function gsapInit() {
  gsap.registerPlugin(ScrollToPlugin);

  gsap.defaults({ ease: 'power2.out', duration: 0.333 });
}

export default gsapInit;
