import { ReactNode } from 'react';

type MainProps = {
    children: ReactNode;
};

export const MainContainer = ({ children }: MainProps) => {
    return (
        <main className="bg-background md:max-w-screen-lg mx-auto px-6 lg:px-0">{children}</main>
    );
};
