import { ReactNode } from 'react';

type BodyProps = {
    children: ReactNode;
    className?: string;
};

export const Body = ({ children, className: additionalClassNames = '' }: BodyProps) => {
    return <p className={`font-sans text-body ${additionalClassNames}`}>{children}</p>;
};
