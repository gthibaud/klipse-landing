import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { ReactNode } from 'react';

type ButtonProps = {
    children: ReactNode;
    to?: string;
    anchor?: boolean;
};

export const Button = ({ children, anchor = false, to = '/' }: ButtonProps) => {
    const renderButton = () => {
        return (
            <button className="text-base font-sans font-medium text-white bg-primary px-4 py-2 rounded-lg hover:bg-secondary transition-colors duration-300 ease-in-out">
                {children}
            </button>
        );
    };

    return anchor ? (
        <AnchorLink to={to}>{renderButton()}</AnchorLink>
    ) : (
        <Link to={to}>{renderButton()}</Link>
    );
};
