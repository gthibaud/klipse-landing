import { FC, ReactNode, useRef, useState } from 'react';
import { isBrowser } from '../../utils/browser';
import { Body } from '../Typography/Body';

interface FAQProps {
    question: string;
    answer: string | ReactNode;
}

export const FAQ: FC<FAQProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const collapsableRef = useRef<HTMLDivElement>(null);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    const getCollapsableHeight = (): string => {
        if (isBrowser() && collapsableRef.current) {
            return collapsableRef.current.scrollHeight.toString() + 'px';
        }
        return '0px';
    };

    return (
        <div className="flex flex-col gap-6">
            <div
                className="flex flex-col gap-4 w-full hover:bg-backgroundVariant pt-4 cursor-pointer transition rounded-lg px-4"
                onClick={handleOpen}
            >
                <div className="flex flex-row justify-between gap-4 w-full items-center">
                    <h3 className="text-xl font-title text-primary">{question}</h3>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`transition shrink-0`}
                        style={{
                            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        }}
                    >
                        <path
                            className={`fill-primary`}
                            d="M10 20C8.63182 20 7.3443 19.7386 6.13746 19.2159C4.93062 18.6996 3.86576 17.98 2.94288 17.0571C2.02646 16.1342 1.30687 15.0694 0.784124 13.8625C0.261375 12.6557 0 11.3682 0 10C0 8.63182 0.261375 7.3443 0.784124 6.13746C1.30687 4.93062 2.02646 3.86899 2.94288 2.95257C3.86576 2.02969 4.9274 1.30687 6.12778 0.784124C7.33462 0.261375 8.62214 0 9.99032 0C11.365 0 12.6557 0.261375 13.8625 0.784124C15.0694 1.30687 16.1342 2.02969 17.0571 2.95257C17.98 3.86899 18.7028 4.93062 19.2256 6.13746C19.7483 7.3443 20.0097 8.63182 20.0097 10C20.0097 11.3682 19.7483 12.6557 19.2256 13.8625C18.7028 15.0694 17.98 16.1342 17.0571 17.0571C16.1342 17.98 15.0694 18.6996 13.8625 19.2159C12.6557 19.7386 11.3682 20 10 20ZM10 18.0252C11.1165 18.0252 12.1588 17.8187 13.1268 17.4056C14.0949 16.9926 14.9468 16.4182 15.6825 15.6825C16.4182 14.9468 16.9926 14.0949 17.4056 13.1268C17.8186 12.1588 18.0252 11.1165 18.0252 10C18.0252 8.88996 17.8186 7.85092 17.4056 6.88287C16.9926 5.90836 16.4182 5.05324 15.6825 4.31752C14.9468 3.5818 14.0916 3.00742 13.1171 2.59439C12.1491 2.18135 11.1068 1.97483 9.99032 1.97483C8.88028 1.97483 7.83801 2.18135 6.8635 2.59439C5.89545 3.00742 5.04679 3.5818 4.31752 4.31752C3.58825 5.05324 3.0171 5.90836 2.60407 6.88287C2.19103 7.85092 1.98451 8.88996 1.98451 10C1.98451 11.1165 2.19103 12.1588 2.60407 13.1268C3.0171 14.0949 3.58825 14.9468 4.31752 15.6825C5.05324 16.4182 5.90513 16.9926 6.87318 17.4056C7.84769 17.8187 8.88996 18.0252 10 18.0252ZM5.52759 10C5.52759 9.72894 5.61149 9.50952 5.77928 9.34172C5.94708 9.16747 6.16973 9.08035 6.44724 9.08035H9.09971V6.42788C9.09971 6.16328 9.18361 5.94708 9.3514 5.77928C9.5192 5.60503 9.73217 5.51791 9.99032 5.51791C10.2614 5.51791 10.4808 5.60181 10.6486 5.7696C10.8228 5.9374 10.91 6.15682 10.91 6.42788V9.08035H13.5624C13.8335 9.08035 14.0529 9.16747 14.2207 9.34172C14.3885 9.50952 14.4724 9.72894 14.4724 10C14.4724 10.2581 14.3885 10.4711 14.2207 10.6389C14.0529 10.8067 13.8335 10.8906 13.5624 10.8906H10.91V13.5528C10.91 13.8174 10.8228 14.0368 10.6486 14.211C10.4808 14.3788 10.2614 14.4627 9.99032 14.4627C9.73217 14.4627 9.5192 14.3788 9.3514 14.211C9.18361 14.0368 9.09971 13.8174 9.09971 13.5528V10.8906H6.44724C6.17619 10.8906 5.95353 10.8067 5.77928 10.6389C5.61149 10.4711 5.52759 10.2581 5.52759 10Z"
                        />
                    </svg>
                </div>
                <div className="w-full border-b-2 border-divider" />
            </div>
            <div
                ref={collapsableRef}
                style={{
                    maxHeight: isOpen ? getCollapsableHeight() : '0px',
                }}
                className={`overflow-hidden transition-all duration-200 px-4`}
            >
                <Body className="pb-4">{answer}</Body>
            </div>
        </div>
    );
};
