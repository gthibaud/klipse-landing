import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { ReactNode } from 'react';

type ButtonUnstyledProps = {
    children: ReactNode;
    to?: string;
    anchor?: boolean;
};

export const ButtonUnstyled = ({ children, anchor = false, to = '/' }: ButtonUnstyledProps) => {
    const renderButton = () => {
        return <button>{children}</button>;
    };

    return anchor ? (
        <AnchorLink to={to}>{renderButton()}</AnchorLink>
    ) : (
        <Link to={to}>{renderButton()}</Link>
    );
};
