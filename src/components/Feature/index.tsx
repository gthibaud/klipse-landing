import { ReactNode } from 'react';
import { Body } from '../Typography/Body';

interface FeatureProps {
    image: ReactNode;
    title: string;
    description: string | ReactNode;
    inversedDirection?: boolean;
    additionalFooter?: ReactNode;
}

export const Feature = ({
    inversedDirection = false,
    image,
    title,
    description,
    additionalFooter,
}: FeatureProps) => {
    return (
        <div className="mx-auto flex py-4 justify-center">
            <div className={`flex flex-col sm:flex-row gap-10`}>
                <div className="flex mx-auto">
                    {(!inversedDirection || (inversedDirection && window.innerWidth < 640)) &&
                        image}
                </div>
                <div className="flex flex-col gap-6 my-auto max-w-lg">
                    <h3 className="text-xl font-title text-primary">{title}</h3>
                    <Body className="max-w-prose">{description}</Body>
                    {additionalFooter}
                </div>
                <div className="flex mx-auto">
                    {inversedDirection && window.innerWidth >= 640 && image}
                </div>
            </div>
        </div>
    );
};
