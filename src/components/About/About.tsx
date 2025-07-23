import TechLogo from '../ui/TechLogo';

const About = () => {
  return (
    <div>
      <h2 className="mb-4 text-xl">
        My name is Geoffrey Farrel. I am a full-stack web developer. I am a JS
        fan boy so my tech stack is JS related.
      </h2>
      <h1 className="mb-2 text-4xl font-semibold">Tech Stack: </h1>
      <TechLogo />
    </div>
  );
};

export default About;
