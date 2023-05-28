import { ReactNode } from 'react';

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
        <div className="container max-w-4xl mx-auto flex py-4 px-4 lg:px-0">
            <div className={`flex flex-col sm:flex-row gap-10`}>
                {inversedDirection || image}
                <div className="flex flex-col gap-4 my-auto max-w-lg">
                    <h3 className="text-xl font-title text-primary">{title}</h3>
                    <p className="max-w-prose">{description}</p>
                    {additionalFooter}
                </div>
                {inversedDirection && image}
            </div>
        </div>
    );
};
