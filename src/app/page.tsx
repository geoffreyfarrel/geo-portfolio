'use client';

import Home from '@/components/views';
import { useHeroDone } from '@/contexts/HeroContext';

const HomePage = () => {
  const { done } = useHeroDone();

  return (
    <div className="flex w-full flex-col">
      <Home />
    </div>
  );
};

export default HomePage;
