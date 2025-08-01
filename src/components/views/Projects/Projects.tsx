import Carousel from '@/components/ui/Carousel';
import Marquee from '@/components/ui/Marquee';

const Projects = () => {
  return (
    <section className="relative flex flex-col items-center justify-between overflow-hidden bg-slate-900">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none">
        <h1 className="absolute top-10 left-10 text-[350px] font-extrabold text-white opacity-10">
          PROJECTS
        </h1>
      </div>
      <div className="absolute top-20 left-13 z-10">
        <h2 className="text-6xl font-extrabold tracking-wide text-white">
          PROJECTS
        </h2>
      </div>
      <div className="z-10 mt-45 flex w-full flex-col items-center">
        <Carousel />
      </div>
      <div className="z-10 h-auto w-full">
        <Marquee />
      </div>
    </section>
  );
};

export default Projects;
