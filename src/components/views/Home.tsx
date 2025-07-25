import { useHeroDone } from '@/contexts/HeroContext';
import Hero from '../Hero';
import About from '../About';

const Home = () => {
  const { done } = useHeroDone();
  return (
    <div className="scroller">
      <Hero />
      {done && (
        <div className="w-full">
          <About />
          <section></section>
        </div>
      )}
    </div>
  );
};

export default Home;
