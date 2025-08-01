import { useHeroDone } from '@/contexts/HeroContext';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'; // eslint-disable-line import/no-named-as-default
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin'; // eslint-disable-line import/no-named-as-default
import { SplitText } from 'gsap/SplitText';
import { RefObject } from 'react';

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

const useHero = (ref: RefObject<HTMLElement | null>): void => {
  const { setDone } = useHeroDone();

  useGSAP(
    () => {
      if (!ref.current) return;

      const tl = gsap.timeline({
        defaults: { ease: 'power2.out' },
        onComplete: () => {
          setDone(true);
          ref.current!.style.position = 'relative';
        },
      });

      tl.fromTo(
        ref.current,
        {
          position: 'absolute',
          height: '0px',
          width: '0px',
          paddingTop: '1rem',
          paddingBottom: '1rem',
          opacity: 0,
          top: '50%',
          left: '50%',
          xPercent: -50,
          yPercent: -50,
        },
        {
          height: '100vh',
          width: '100%',
          paddingTop: '4rem',
          paddingBottom: '4rem',
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          top: 0,
          left: 0,
          bottom: 100,
          xPercent: 0,
          yPercent: 0,
          borderRadius: '0rem',
        }
      );

      const split = new SplitText('.heroheading', {
        type: 'words, chars',
        wordsClass: 'word',
        charsClass: 'char',
      });

      gsap.set('.word', {
        display: 'inline',
        whiteSpace: 'normal',
      });

      gsap.set('.char', {
        display: 'inline',
      });

      tl.from(split.chars, {
        opacity: 0,
        stagger: 0.05,
        scrambleText: {
          text: 'x',
          chars: 'lowerCase',
          speed: 1,
          delimiter: '',
          tweenLength: true,
        },
        ease: 'expo.out',
      });

      tl.to({}, { duration: 0.45 });

      tl.from('.herotext', {
        opacity: 0,
        y: 30,
        duration: 1,
        bottom: 100,
        ease: 'power2.out',
      });

      const mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        tl.from('.profile', {
          opacity: 0,
          right: 100,
          x: 30,
          duration: 1,
          ease: 'power3.out',
        });
      });

      mm.add('(max-width: 1023px)', () => {
        tl.from('.profile', {
          opacity: 0,
          bottom: 100,
          duration: 1.2,
          y: 30,
          ease: 'power3.out',
        });
      });

      tl.fromTo(
        '.brand',
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          ease: 'power3.out',
        }
      );
    },
    { scope: ref }
  );
};

export default useHero;
