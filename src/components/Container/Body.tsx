import { ReactNode } from 'react';

type BodyProps = {
    children: ReactNode;
};

export const BodyContainer = ({ children }: BodyProps) => {
    return <body className="bg-background">{children}</body>;
};
