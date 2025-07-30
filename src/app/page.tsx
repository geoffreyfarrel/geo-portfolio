'use client';

import About from '@/components/views/About';
import Hero from '@/components/views/Hero';
import Projects from '@/components/views/Projects';
import { useHeroDone } from '@/contexts/HeroContext';

const HomePage = () => {
  const { done } = useHeroDone();
  return (
    <div className="flex w-full flex-col">
      <Hero />
      {done && (
        <div className="w-full">
          <About />
          <Projects />
          <section></section>
        </div>
      )}
    </div>
  );
};

export default HomePage;
