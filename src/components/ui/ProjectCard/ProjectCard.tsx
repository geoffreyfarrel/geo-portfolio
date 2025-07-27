import { Card, CardBody, CardHeader } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';

interface PropTypes {
  description: string;
  image: string;
  title: string;
  url?: string;
  isActive?: boolean;
}

const ProjectCard = (props: PropTypes) => {
  const { description, image, title, url, isActive } = props;

  const cardContent = (
    <Card className={isActive ? 'hover:scale-115' : ''}>
      <CardHeader className="flex justify-center p-5">
        <Image
          src={`/img/${image}`}
          alt="profile"
          width="320"
          height="180"
          className="rounded-xl"
        />
      </CardHeader>
      <CardBody className="px-5">
        <h2 className="text-2xl font-extrabold">{title}</h2>
        <p className="font-light text-gray-500">{description}</p>
      </CardBody>
    </Card>
  );

  if (isActive && url) {
    return (
      <Link
        href={url ?? ''}
        className={isActive ? 'hover:scale-115' : ''}
        target="_blank"
        rel="noreferrer noopener"
      >
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};

export default ProjectCard;
