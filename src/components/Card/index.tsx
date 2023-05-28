import { ReactNode } from 'react';
import { Body } from '../Typography/Body';
import { CardTitle } from './Title';

type CardProps = {
    image: ReactNode;
    title: string;
    description: string;
};

export const Card = ({ image, title, description }: CardProps) => {
    return (
        <div className="flex flex-1 flex-col items-center gap-4 text-center">
            {image}
            <CardTitle>{title}</CardTitle>
            <Body>{description}</Body>
        </div>
    );
};
