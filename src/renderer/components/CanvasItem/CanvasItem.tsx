import React from 'react';

import type {CanvasPointer} from '../../store';

import {CanvasItemModel} from './model';
import {useStyle} from './useStyle';

type Props = {
    width: number;
    height: number;
    pointer?: CanvasPointer;
};

export const CanvasItem = (props: Props) => {
    const {width, height, pointer} = props;
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const [canvasModel, setCanvasModel] = React.useState<CanvasItemModel | undefined>();
    const style = useStyle();

    React.useLayoutEffect(() => {
        if (canvasRef.current) {
            setCanvasModel(new CanvasItemModel({canvas: canvasRef.current}));
        } else {
            throw new Error('There is no canvas node in DOM');
        }
    }, [width, height]);

    React.useLayoutEffect(() => {
        if (pointer) {
            canvasModel?.draw({pointer});
        }
    }, [canvasModel, pointer]);

    return <canvas ref={canvasRef} style={style} width={width} height={height} />;
};
