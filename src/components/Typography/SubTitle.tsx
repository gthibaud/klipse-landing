import { ReactNode } from 'react';

type TitleProps = {
    children: ReactNode;
    align?: string;
};

export const SubTitle = ({ children, align = 'center' }: TitleProps) => {
    return (
        <p className={`text-l font-sans font-medium text-primary text-${align} mx-auto max-w-xl`}>
            {children}
        </p>
    );
};
