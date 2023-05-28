import { ReactNode } from 'react';

type TitleProps = {
    children: ReactNode;
    align?: string;
};

export const CardTitle = ({ children, align = 'center' }: TitleProps) => {
    return (
        <h3 className={`text-l font-sans font-medium text-primary text-${align} mx-auto max-w-xl`}>
            {children}
        </h3>
    );
};
