import Image from 'next/image';
import TECH_LOGO_ICON from './TechLogo.constants';

const TechLogo = () => {
  return (
    <div className="tech-logos grid w-fit grid-cols-5 justify-start gap-3 rounded-xl bg-slate-700 p-3 text-center sm:grid-cols-8 md:grid-cols-11">
      {TECH_LOGO_ICON.map((item) => (
        <Image
          key={item.key}
          src={item.icon}
          alt={item.key}
          width={item.width}
          height={item.height}
          className={`tech-logo self-center rounded-lg ${item.key}`}
        />
      ))}
    </div>
  );
};

export default TechLogo;
