import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RefObject } from 'react';
import { horizontalLoop } from '@/utils/gsap-horizontal-loop';

gsap.registerPlugin(ScrollTrigger);

const useMarquee = (ref: RefObject<HTMLDivElement | null>) => {
  useGSAP(
    () => {
      const marquee = ref.current;
      if (!marquee) return;

      const items = marquee.querySelectorAll('.marquee-item');
      if (!items.length) return;

      const loop = horizontalLoop(items, {
        speed: 1,
        paused: false,
        repeat: -1,
      });

      ScrollTrigger.create({
        trigger: marquee,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const direction = self.direction === -1 ? -1 : 1;
          const boost = Math.min(Math.abs(self.getVelocity()), 3000) * 0.003;
          const baseSpeed = 1;
          loop.timeScale(direction * (baseSpeed + boost));
        },
      });

      return () => {
        loop.kill();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: ref }
  );
};

export default useMarquee;
