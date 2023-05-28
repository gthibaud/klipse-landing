import { StaticImage } from 'gatsby-plugin-image';

interface FeatureProps {
    image: string;
    title: string;
    description: string;
    inversedDirection?: boolean;
}

export const Feature = ({ inversedDirection = false, image, title, description }: FeatureProps) => {
    return (
        <div className={`feature ${inversedDirection ? 'feature--inversed' : ''}`}>
            <StaticImage
                src={image}
                alt={title}
            />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};
