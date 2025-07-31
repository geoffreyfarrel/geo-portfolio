import { Card, CardBody, CardHeader } from '@heroui/react';
import Image from 'next/image';

interface PropTypes {
  title: string;
  image: string;
  issuer: string;
  url?: string;
}

const CertificateCard = (props: PropTypes) => {
  const { title, image, issuer, url } = props;

  return (
    <Card className="hover:scale-110">
      <CardHeader className="flex justify-center">
        <Image
          src={image}
          alt="profile"
          width="1920"
          height="1080"
          className="rounded-xl"
        />
      </CardHeader>
      <CardBody>
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="font-light text-gray-500">
          <strong className="font-medium">Issuer: </strong>
          {issuer}
        </p>
      </CardBody>
    </Card>
  );
};

export default CertificateCard;
