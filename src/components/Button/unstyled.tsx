import { Link } from 'gatsby';
import { ReactNode } from 'react';

type ButtonUnstyledProps = {
    children: ReactNode;
    to?: string;
    ariaLabel: string;
};

export const ButtonUnstyled = ({ children, to = '/', ariaLabel }: ButtonUnstyledProps) => {
    return (
        <Link
            to={to}
            aria-label={ariaLabel}
        >
            <button>{children}</button>
        </Link>
    );
};
