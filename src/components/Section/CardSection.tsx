import { ReactNode } from 'react';

interface CardSectionProps {
    children: ReactNode;
}

export const CardSection = ({ children }: CardSectionProps) => {
    return <div>{children}</div>;
};
