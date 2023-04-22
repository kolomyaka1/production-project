import { createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState } from 'react';

type SpringType = typeof import('@react-spring/web');
type GestureType = typeof import('@use-gesture/react');

interface AnimationContextPayload {
    Gesture?: GestureType;
    Spring?: SpringType;
    isLoaded?: boolean;
}

const AnimationContext = createContext<AnimationContextPayload>({});

const getAsyncAnimatedModules = async () => {
    return Promise.all(
        [
            import('@react-spring/web'),
            import('@use-gesture/react')
        ]
    );
};

export const useAnimationModules = () => {
    return useContext(AnimationContext) as Required<AnimationContextPayload>;
};

export const AnimationProvider = ({ children }: {children: ReactNode}) => {
    const SpringRef = useRef<SpringType>();
    const GestureRef = useRef<GestureType>();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getAsyncAnimatedModules().then(([Spring, Gesture]) => {
            SpringRef.current = Spring;
            GestureRef.current = Gesture;
            setIsLoaded(true);
        });
    }, []);

    const defaultValue = useMemo(() => ({
        Spring: SpringRef.current,
        Gesture: GestureRef.current,
        isLoaded
    }), [isLoaded]);
    
    return (
        <AnimationContext.Provider
            value={defaultValue}
        >
            {children}
        </AnimationContext.Provider>
    );
};