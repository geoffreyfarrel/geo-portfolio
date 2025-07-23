'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

interface HeroContextType {
  done: boolean;
  setDone: (value: boolean) => void;
}

const HeroContext = createContext<HeroContextType | null>(null);

const HeroProvider = ({ children }: { children: ReactNode }) => {
  const [done, setDone] = useState(false);

  return (
    <HeroContext.Provider value={{ done, setDone }}>
      {children}
    </HeroContext.Provider>
  );
};

const useHeroDone = () => {
  const ctx = useContext(HeroContext);
  if (!ctx) throw new Error('useHeroDone must be used within HeroProvider');
  return ctx;
};

export { HeroProvider, useHeroDone };
