import { ReactNode } from 'react';

type TitleProps = {
    children: ReactNode;
};

export const SectionTitle = ({ children }: TitleProps) => {
    return <h2 className="text-2xl font-title text-primary text-center my-10">{children}</h2>;
};
