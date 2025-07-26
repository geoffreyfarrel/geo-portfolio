import { useRef } from 'react';
import useHero from './useHero';
import Image from 'next/image';

const Hero = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  useHero(heroRef);

  return (
    <section
      ref={heroRef}
      className="grid grid-cols-1 gap-4 bg-blue-800 p-10 lg:grid-cols-2 lg:flex-row lg:justify-between lg:px-32"
    >
      <div className="flex w-full flex-col justify-end gap-4 text-center lg:items-start lg:py-10">
        <h1 className="heroheading text-center text-3xl font-extrabold text-white md:text-5xl lg:text-left lg:text-6xl">
          Hi, I am Geoffrey !
        </h1>
        <p className="herotext text-center text-sm font-semibold text-white underline decoration-2 underline-offset-8 md:text-base lg:text-start lg:text-xl">
          A Full-stack Web Developer
        </p>
      </div>
      <div className="profile flex w-full items-center justify-center py-10 lg:mx-5">
        <div className="relative aspect-[3/4] min-w-[338px] bg-white">
          <Image
            src="/img/profile-white.webp"
            alt="profile"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
