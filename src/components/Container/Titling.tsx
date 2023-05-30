import { FC, useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

interface TiltingContainerProps {
    children: React.ReactNode;
    glare?: boolean;
    className?: string;
    [key: string]: any;
}

export const TiltingContainer: FC<TiltingContainerProps> = (props) => {
    const { glare, max, ...rest } = props;
    const options = {
        scale: 1.02,
        speed: 1000,
        max: max ? max : 1,
        perspective: 500,
        maxGlare: 0.01,
        glare: glare ? true : false,
        fullPageListening: true,
        gyroscope: true,
    };

    const tilt = useRef(null);

    useEffect(() => VanillaTilt.init(tilt.current || new HTMLElement(), options), [options]);

    return (
        <div
            ref={tilt}
            {...rest}
        />
    );
};
