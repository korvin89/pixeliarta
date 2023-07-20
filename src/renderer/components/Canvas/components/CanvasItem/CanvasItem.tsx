import React from 'react';

import {CanvasItemModel} from './model';
import {useStore} from './useStore';
import {useStyle} from './useStyle';

type Props = {
    width: number;
    height: number;
};

export const CanvasItem = (props: Props) => {
    const {width, height} = props;
    const {scale, pointer, tool} = useStore();
    const style = useStyle();
    const [canvasModel, setCanvasModel] = React.useState<CanvasItemModel | undefined>();

    const callbackRef = React.useCallback(
        (node: HTMLCanvasElement) => {
            setCanvasModel(new CanvasItemModel({canvas: node, scale}));
        },
        [scale],
    );

    React.useEffect(() => {
        if (canvasModel && pointer) {
            canvasModel.draw({pointer, tool});
        }
    }, [canvasModel, pointer, tool]);

    return <canvas ref={callbackRef} style={style} width={width} height={height} />;
};
