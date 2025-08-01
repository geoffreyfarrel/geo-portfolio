import { Divider } from '@heroui/react';
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { MdMail } from 'react-icons/md';

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-rose-800 px-10 py-8">
      <h1 className="text-center text-6xl font-extrabold text-white">
        Contact Me
      </h1>
      <Divider className="mb-4 h-0.5 bg-white" />
      <div className="mb-2 text-white">
        <div className="flex flex-row items-center gap-2 text-lg font-bold">
          <MdMail />
          <p>geoffreyfarrel67@gmail.com</p>
        </div>
      </div>
      <div className="flex w-full flex-row justify-between">
        <p className="text-white">All rights reserved</p>
        <p className="text-white">© 2025 Geoffrey Farrel</p>
        <div className="flex flex-row gap-2 text-2xl text-white">
          <BsInstagram />
          <BsGithub />
          <BsFacebook />
          <BsLinkedin />
        </div>
      </div>
    </div>
  );
};

export default Footer;
