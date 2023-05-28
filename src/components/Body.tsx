import { ReactNode } from 'react';

type BodyProps = {
    children: ReactNode;
};

export const Body = ({ children }: BodyProps) => {
    return <body className="primary-gradient text-red">{children}</body>;
};
