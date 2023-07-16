import React from 'react';

import {CanvasItemModel} from './model';
import {useStyle} from './useStyle';

type Props = {
    width: number;
    height: number;
};

export const CanvasItem = (props: Props) => {
    const {width, height} = props;
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const [_canvasModel, setCanvasModel] = React.useState<CanvasItemModel | undefined>();
    const style = useStyle();

    React.useLayoutEffect(() => {
        if (canvasRef.current) {
            setCanvasModel(new CanvasItemModel({canvas: canvasRef.current}));
        } else {
            throw new Error('There is no canvas node in DOM');
        }
    }, [width, height]);

    return <canvas ref={canvasRef} style={style} width={width} height={height} />;
};
