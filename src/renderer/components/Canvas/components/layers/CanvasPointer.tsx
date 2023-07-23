import React from 'react';

import {useCanvas} from './useCanvas';
import {useStore} from './useStore';
import {useStyle} from './useStyle';

type Props = {
    width: number;
    height: number;
};

export const CanvasPointer = (props: Props) => {
    const {width, height} = props;
    const {pointer, scale, color, tool} = useStore();
    const ref = React.useRef<HTMLCanvasElement>(null);
    const {clear, draw} = useCanvas({scale, canvas: ref.current});
    const style = useStyle();

    React.useEffect(() => {
        clear();
        draw({color, tool, pointer});
    }, [pointer, color, tool, clear, draw]);

    return <canvas ref={ref} style={style} width={width} height={height} />;
};
