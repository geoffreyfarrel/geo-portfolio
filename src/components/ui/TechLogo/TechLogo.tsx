import Image from 'next/image';
import TECH_LOGO_ICON from './TechLogo.constants';
import { cn } from '@/utils/cn';

const TechLogo = () => {
  return (
    <div className="flex w-fit flex-row gap-3 rounded-xl bg-slate-700 p-3">
      {TECH_LOGO_ICON.map((item) => (
        <Image
          key={item.key}
          src={item.icon}
          alt={item.key}
          width={item.width}
          height={item.height}
          className="rounded-lg"
        />
      ))}
    </div>
  );
};

export default TechLogo;
