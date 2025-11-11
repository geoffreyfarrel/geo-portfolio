import { Divider } from '@heroui/react';
import Link from 'next/link';
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { MdMail } from 'react-icons/md';

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-rose-800 px-10 py-8">
      <h1 className="text-center text-3xl font-extrabold text-white md:text-6xl">
        Contact Me
      </h1>
      <Divider className="mb-4 h-0.5 bg-white" />
      <div className="mb-2 text-white">
        <div className="flex flex-row items-center gap-2 font-bold md:text-lg">
          <MdMail />
          <p>geoffreyfarrel67@gmail.com</p>
        </div>
      </div>
      <div className="flex w-full flex-row justify-between gap-4">
        <p className="text-center text-white">All rights reserved</p>
        <p className="text-center text-white">© 2025 Geoffrey Farrel</p>
        <div className="grid grid-cols-2 gap-3 text-xl text-white md:grid-cols-4 md:gap-2 md:text-2xl">
          <Link
            href="https://www.instagram.com/geoffreyfarrel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram />
          </Link>
          <Link
            href="https://github.com/geoffreyfarrel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </Link>
          <Link
            href="https://www.facebook.com/geoffrey.farrel.2025"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook />
          </Link>
          <Link
            href="https://www.linkedin.com/in/geoffrey-farrel-393b41229/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
