import { ReactNode } from 'react';

type ColumnsProps = {
    children: ReactNode;
    columnsNumber: number;
};

export const Columns = ({ children, columnsNumber }: ColumnsProps) => {
    return (
        <div className={`columns-${columnsNumber} flex flex-col md:flex-row items-center gap-4`}>
            {children}
        </div>
    );
};
