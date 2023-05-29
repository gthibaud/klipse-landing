import { ReactNode } from 'react';

type ColumnsProps = {
    children: ReactNode;
    columnsNumber: number;
};

export const Columns = ({ children, columnsNumber }: ColumnsProps) => {
    return <div className={`columns-${columnsNumber}`}>{children}</div>;
};
