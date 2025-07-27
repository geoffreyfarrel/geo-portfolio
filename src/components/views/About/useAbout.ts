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
            start: 'top 70%',
            end: 'top 10%',
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
            markers: false,
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
            markers: false,
          },
        }
      );

      const wrapper = '.tech-logos';
      const logos = '.tech-logo';

      const techTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: 'top 100%',
          toggleActions: 'play none none none',
          markers: false,
        },
      });

      gsap.set(logos, {
        scale: 0,
        opacity: 0,
      });

      techTimeline
        .to(wrapper, {
          width: 'auto',
          duration: 0.5,
          ease: 'power2.out',
        })
        .to(wrapper, {
          height: 'auto',
          duration: 0.5,
          ease: 'power2.out',
        })
        .to(
          logos,
          {
            opacity: 1,
            scale: 1,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            duration: 0.3,
          },
          '+=0.1'
        );
    },
    { scope: ref }
  );
};

export default useAbout;
