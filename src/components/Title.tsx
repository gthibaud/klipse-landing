import { ReactNode } from 'react';

type TitleProps = {
    children: ReactNode;
};

export default function Title({ children }: TitleProps) {
    return <h1 className="text-l font-bold underline">{children}</h1>;
}
