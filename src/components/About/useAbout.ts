import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RefObject } from 'react';

gsap.registerPlugin(ScrollTrigger);

const useAbout = (ref: RefObject<HTMLElement | null>) => {
  useGSAP(
    () => {
      if (!ref.current) return;

      const tl = gsap.timeline({});

      tl.fromTo(
        '.desc1',
        {
          opacity: 0,
          scale: 0.1,
          x: -100,
          y: 100,
          rotate: -5,
          transformOrigin: 'bottom left',
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          rotate: 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 100%',
            end: 'top 30%',
            scrub: true,
            markers: false,
          },
        }
      );
      tl.fromTo(
        '.desc2',
        {
          opacity: 0,
          scale: 0.1,
          x: -100,
          y: 100,
          rotate: -5,
          transformOrigin: 'bottom right',
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          rotate: 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.desc1',
            start: 'bottom 100%',
            end: 'top 30%',
            scrub: true,
            markers: true,
          },
        }
      );
      tl.fromTo(
        '.desc3',
        {
          opacity: 0,
          scale: 0.5,
          x: -100,
          y: 100,
          rotate: -5,
          transformOrigin: 'bottom left',
        },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          rotate: 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.desc2',
            start: 'bottom 100%',
            end: 'top 30%',
            scrub: true,
            markers: true,
          },
        }
      );
    },
    { scope: ref }
  );
};

export default useAbout;
