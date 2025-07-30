import Carousel from '@/components/ui/Carousel';
import Marquee from '@/components/ui/Marquee';
import { useRef } from 'react';

const Projects = () => {
  return (
    <section className="flex flex-col items-center justify-between overflow-hidden bg-slate-900">
      <h1 className="font-fancy m-10 text-9xl font-bold text-white">
        Projects
      </h1>
      <div className="flex w-full flex-col items-center">
        <Carousel />
      </div>
      <div className="h-auto w-full">
        <Marquee />
      </div>
    </section>
  );
};

export default Projects;
