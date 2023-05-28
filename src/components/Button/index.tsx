import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { ReactNode } from 'react';

type ButtonProps = {
    children: ReactNode;
};

export const Button = ({ children }: ButtonProps) => {
    return (
        <AnchorLink
            to="#test"
            className="text-4xl font-hero"
        >
            {children}
        </AnchorLink>
    );
};
