import React from 'react';

import {CanvasItem} from '../CanvasItem/CanvasItem';

import {useStyle} from './useStyle';

export const Canvas = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    const [rect, setRect] = React.useState<DOMRect | undefined>();
    const style = useStyle();

    React.useEffect(() => {
        setRect(ref.current?.getBoundingClientRect());
    }, []);

    return (
        <div ref={ref} style={style}>
            {rect?.width && rect?.height && <CanvasItem width={rect.width} height={rect.height} />}
        </div>
    );
};
