import { useRef } from 'react';
import useHero from './useHero';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';

const Hero = () => {
  const heroRef = useRef<HTMLElement | null>(null);

  useHero(heroRef);

  return (
    <section
      ref={heroRef}
      className="grid grid-cols-1 gap-4 bg-blue-800 p-10 lg:px-32"
    >
      <div className="brand hidden lg:flex">
        <h1 className="text-3xl font-extrabold text-white">geoffreyfarrel</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:flex-row lg:justify-between">
        <div className="flex w-full flex-col justify-end gap-4 text-center lg:items-start lg:py-10">
          <h1 className="heroheading text-center text-3xl font-extrabold text-white md:text-5xl lg:text-left lg:text-6xl">
            Hi, I am Geoffrey !
          </h1>
          <p className="herotext text-center text-sm font-semibold text-white underline decoration-2 underline-offset-8 md:text-base lg:text-start lg:text-xl">
            A Full-stack Web Developer
          </p>
        </div>
        <div className="profile flex w-full flex-col items-center justify-center py-10 lg:mx-5">
          <div className="relative mb-4 aspect-[3/4] min-w-[248px] rounded-3xl bg-white md:min-w-[300px] lg:min-w-[338px]">
            <Image
              src="/img/profile-white.webp"
              alt="profile"
              fill
              sizes="max-width: 100%"
              className="rounded-3xl object-cover"
              priority
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <Link
              href={'https://github.com/geoffreyfarrel'}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2"
            >
              <FaGithub className="text-2xl text-white" />
              <p className="text-lg font-bold text-white">geoffreyfarrel</p>
            </Link>
            <div className="flex items-center gap-2">
              <MdEmail className="text-2xl text-white" />
              <p className="text-lg font-bold text-white">
                geoffreyfarrel@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
