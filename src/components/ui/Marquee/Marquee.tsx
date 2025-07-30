import { useRef } from 'react';
import useMarquee from './useMarquee';

const Marquee = () => {
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  useMarquee(marqueeRef);

  return (
    <div ref={marqueeRef} className="marquee overflow-hidden whitespace-nowrap">
      <div className="marquee-item inline-block py-8 text-7xl font-extrabold text-white">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i}> Git Init • Git Add • Git Commit • Git Push •</span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
