import { Link } from 'gatsby';
import { ReactNode } from 'react';
import { TiltingContainer } from '../Container/Titling';

type ButtonUnstyledProps = {
    children: ReactNode;
    to?: string;
    ariaLabel: string;
};

export const ButtonUnstyled = ({ children, to = '/', ariaLabel }: ButtonUnstyledProps) => {
    return (
        <TiltingContainer>
            <Link
                to={to}
                aria-label={ariaLabel}
            >
                <button aria-label={ariaLabel}>{children}</button>
            </Link>
        </TiltingContainer>
    );
};
