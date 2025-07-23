import { useRef } from 'react';
import useHero from './useHero';
import Image from 'next/image';

const Hero = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  useHero(heroRef);

  return (
    <section
      ref={heroRef}
      className="flex h-screen flex-col gap-4 bg-blue-800 p-10 lg:flex-row lg:justify-between lg:px-32"
    >
      <div className="mb-8 flex w-full flex-2/3 flex-col justify-center gap-4 py-10 text-center lg:mb-0 lg:items-start lg:justify-end">
        <h1 className="heroheading text-center text-2xl font-extrabold text-white md:text-5xl lg:text-left lg:text-6xl">
          Hello, I am Geoffrey!
        </h1>
        <p className="herotext text-center text-sm font-semibold text-white underline decoration-2 underline-offset-8 md:text-base lg:text-start lg:text-xl">
          Your Trustworthy Web Developer
        </p>
      </div>
      <div className="profile mx-5 flex w-full flex-1/3 justify-center py-10 text-center">
        <div className="relative aspect-[3/4] w-3/4 bg-white lg:w-fit">
          <Image
            src="/img/profile-white.webp"
            alt="shape"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
