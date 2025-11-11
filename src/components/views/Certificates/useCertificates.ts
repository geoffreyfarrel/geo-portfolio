import { useGSAP } from '@gsap/react';
import gsap from 'gsap'; // eslint-disable-line import/no-named-as-default
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RefObject } from 'react';

gsap.registerPlugin(ScrollTrigger);

const useCertificates = (ref: RefObject<HTMLDivElement | null>): void => {
  useGSAP(
    () => {
      if (!ref.current) return;

      gsap.to('.star', {
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        duration: 1,
        scale: 1.5,
        filter: 'drop-shadow(0 0 10px white)',
      });
    },
    { scope: ref }
  );
};

export default useCertificates;
