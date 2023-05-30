import { Link } from 'gatsby';
import { ReactNode } from 'react';
import { TiltingContainer } from '../Container/Titling';

type ButtonProps = {
    children: ReactNode;
    to?: string;
};

export const Button = ({ children, to = '/' }: ButtonProps) => {
    return (
        <TiltingContainer>
            <Link to={to}>
                <button className="text-base font-sans font-medium text-white bg-primary px-4 py-2 rounded-lg hover:bg-secondary transition-colors duration-300 ease-in-out">
                    {children}
                </button>
            </Link>
        </TiltingContainer>
    );
};
