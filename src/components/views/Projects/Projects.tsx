import Carousel from '@/components/ui/Carousel';

const Projects = () => {
  return (
    <section className="flex flex-col items-center bg-slate-900">
      <h1 className="font-fancy m-10 text-9xl font-bold text-white">
        Projects
      </h1>
      <div className="flex w-full flex-col items-center">
        <Carousel />
      </div>
    </section>
  );
};

export default Projects;
