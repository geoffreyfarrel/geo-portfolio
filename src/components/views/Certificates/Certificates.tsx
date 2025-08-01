import CertificateCard from '@/components/ui/CertificateCard';
import CERTIFICATE_CARD_CONSTANTS from '@/components/ui/CertificateCard/CertificateCard.constants';
import Image from 'next/image';

const Certificates = () => {
  return (
    <section className="relative flex !h-auto flex-col justify-center gap-8 overflow-hidden bg-emerald-800 px-10 py-10 lg:px-32">
      <Image
        src={'/img/medal.svg'}
        alt="medal-background"
        width={700}
        height={700}
        className="pointer-events-none absolute -top-20 -right-90 w-[1100px] opacity-20 invert select-none"
      />
      <h1 className="mb-2 text-center text-8xl font-extrabold text-white">
        Certificates
      </h1>
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
