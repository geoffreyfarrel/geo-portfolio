import { useRef } from 'react';
import TechLogo from '../ui/TechLogo';
import useAbout from './useAbout';
import { Card, CardBody } from '@heroui/react';

const About = () => {
  const aboutRef = useRef<HTMLElement | null>(null);
  useAbout(aboutRef);

  return (
    <section
      ref={aboutRef}
      className="flex items-center justify-center bg-blue-100 py-10 lg:px-32"
    >
      <div className="flex w-full flex-col items-center justify-between gap-4 p-6 lg:p-8">
        <Card className="desc1 h-auto w-auto bg-amber-50 text-right">
          <CardBody className="p-4 md:p-8">
            <p className="text-justify text-sm md:text-xl">
              Hi, I'm <strong>Geoffrey Farrel</strong>, a full-stack web
              developer mainly focusing on Javascript technologies. I love to
              build clean, interactive, and scalable web applications using
              modern frameworks like React, Next.js, and Express.js.
            </p>
          </CardBody>
        </Card>
        <Card className="desc2 h-auto w-auto bg-sky-100 text-right">
          <CardBody className="p-4 md:p-8">
            <p className="text-justify text-sm md:text-xl">
              I'm particularly drawn to Javascript's flexibility in building
              both frontend and backend. Whether it's creating responsive UI,
              builing APIs, or integrating to databases
            </p>
          </CardBody>
        </Card>
        <Card className="desc3 h-auto w-auto bg-pink-100 text-right">
          <CardBody className="p-4 md:p-8">
            <p className="text-justify text-sm md:text-xl">
              I keep learning, exploring new tools and skils in web development.
              Currently, I'm working on projects that sharpen my skills and
              challenge my creativity.
            </p>
          </CardBody>
        </Card>
        <div className="flex flex-col items-center">
          <h1 className="mb-2 text-2xl font-semibold md:text-4xl">
            Tech Stack
          </h1>
          <TechLogo />
        </div>
      </div>
    </section>
  );
};

export default About;
