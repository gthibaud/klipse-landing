import { ReactNode, useEffect } from 'react';

type ColumnsProps = {
    children: ReactNode;
    columnsNumber: number;
};

export const Columns = ({ children, columnsNumber }: ColumnsProps) => {
    useEffect(() => {
        console.log('Columns component mounted', `columns-${columnsNumber}`);
    }, [columnsNumber]);
    return <div className={`columns-${columnsNumber}`}>{children}</div>;
};
