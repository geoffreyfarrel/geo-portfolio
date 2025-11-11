import CertificateCard from '@/components/ui/CertificateCard';
import CERTIFICATE_CARD_CONSTANTS from '@/components/ui/CertificateCard/CertificateCard.constants';
import Star from '@/components/ui/Star';
import Image from 'next/image';
import { useRef } from 'react';
import useCertificates from './useCertificates';

const Certificates = () => {
  const certificateRef = useRef<HTMLDivElement | null>(null);

  useCertificates(certificateRef);

  return (
    <section
      ref={certificateRef}
      className="relative flex !h-auto flex-col justify-center gap-8 overflow-hidden bg-emerald-800 px-10 py-10 lg:px-32"
    >
      <Image
        src={'/img/medal2.svg'}
        alt="medal-background"
        width={700}
        height={700}
        className="pointer-events-none absolute -top-25 -right-50 w-[1100px] opacity-20 invert select-none"
      />
      <div className="flex flex-row items-center justify-center gap-4">
        <Star />
        <h1 className="mb-2 text-center text-4xl font-extrabold text-white md:text-6xl lg:text-8xl">
          Certificates
        </h1>
        <Star />
      </div>
      <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATE_CARD_CONSTANTS.map((certificate) => (
          <CertificateCard
            key={certificate.id}
            title={certificate.title}
            image={certificate.image}
            issuer={certificate.issuer}
          />
        ))}
      </div>
    </section>
  );
};

export default Certificates;
