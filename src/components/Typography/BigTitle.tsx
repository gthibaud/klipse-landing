import { ReactNode } from 'react';

type TitleProps = {
    children: ReactNode;
};

export const BigTitle = ({ children }: TitleProps) => {
    return <h1 className="text-4xl font-hero">{children}</h1>;
};
