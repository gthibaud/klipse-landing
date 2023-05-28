import { StaticImage } from 'gatsby-plugin-image';
import { CardTitle } from './Title';

type CardProps = {
    image: string;
    title: string;
    description: string;
};

export const Card = ({ image, title, description }: CardProps) => {
    return (
        <div>
            <StaticImage
                src={image}
                alt={title}
            />
            <CardTitle>{title}</CardTitle>
            <p>{description}</p>Ò
        </div>
    );
};
