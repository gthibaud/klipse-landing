import { ReactNode } from 'react';

interface CardSectionProps {
    children: ReactNode;
}

export const CardSection = ({ children }: CardSectionProps) => {
    return (
        <div className="container max-w-4xl mx-auto flex flex-col sm:flex-row py-10 px-4 lg:px-0 gap-10">
            {children}
        </div>
    );
};
