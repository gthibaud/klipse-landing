import { ReactNode } from 'react';

type TitleProps = {
    children: ReactNode;
};

export const SectionTitle = ({ children }: TitleProps) => {
    return <h2 className="text-3xl font-title text-primary text-center mt-14 mb-10">{children}</h2>;
};
