import { ReactNode } from 'react';

type TitleProps = {
    children: ReactNode;
};

export const SubTitle = ({ children }: TitleProps) => {
    return <h1 className="text-l font-sans">{children}</h1>;
};
