import React from 'react';

export const usePreviousValue = <T>(value: T) => {
    const ref = React.useRef<T>();

    React.useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
};
