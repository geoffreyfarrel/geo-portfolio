import { useHeroDone } from '@/contexts/HeroContext';
import Hero from '../Hero';
import About from '../About';

const Home = () => {
  const { done } = useHeroDone();
  return (
    <>
      <Hero />
      {done && (
        <div className="h-screen w-full p-10 lg:px-32">
          <About />
        </div>
      )}
    </>
  );
};

export default Home;
