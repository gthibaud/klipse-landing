import { Link } from 'gatsby';
import { ReactNode } from 'react';

type ButtonUnstyledProps = {
    children: ReactNode;
    to?: string;
};

export const ButtonUnstyled = ({ children, to = '/' }: ButtonUnstyledProps) => {
    return (
        <Link to={to}>
            <button>{children}</button>
        </Link>
    );
};
