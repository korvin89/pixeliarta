import React from 'react';

import {usePreviousValue} from '../../../hooks';

import {useCanvas} from './useCanvas';
import {useStore} from './useStore';
import {useStyle} from './useStyle';

type Props = {
    width: number;
    height: number;
};

export const CanvasLayer = (props: Props) => {
    const {width, height} = props;
    const {pointer, scale, color, tool} = useStore();
    const ref = React.useRef<HTMLCanvasElement>(null);
    const {draw} = useCanvas({scale, canvas: ref.current});
    const style = useStyle();
    const prevPressed = usePreviousValue(pointer?.pressed);

    React.useEffect(() => {
        if (pointer?.pressed) {
            draw({color, tool, pointer});
        }
    }, [pointer, color, tool, draw]);

    React.useEffect(() => {
        if (prevPressed && !pointer?.pressed) {
            // do some staff
        }
    }, [pointer, prevPressed]);

    return <canvas ref={ref} style={style} width={width} height={height} />;
};
