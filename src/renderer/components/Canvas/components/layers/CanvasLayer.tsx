import React from 'react';

import {CanvasLayerConfig} from '../../../../store';
import {useForceUpdate, usePreviousValue} from '../../../hooks';

import {useCanvas} from './useCanvas';
import {useStore} from './useStore';
import {useStyle} from './useStyle';

type Props = CanvasLayerConfig & {
    width: number;
    height: number;
};

export const CanvasLayer = (props: Props) => {
    const {width, height, id, blob} = props;
    const {pointer, scale, color, tool, setBlob} = useStore();
    const ref = React.useRef<HTMLCanvasElement>(null);
    const {draw, getImageBlob, setImageBlob} = useCanvas({scale, canvas: ref.current});
    const style = useStyle();
    const prevPressed = usePreviousValue(pointer?.pressed);
    const {forceUpdate} = useForceUpdate();

    const handleBlobChange = React.useCallback(
        async (nextBlob: Blob) => {
            await setImageBlob(nextBlob);
            forceUpdate();
        },
        [setImageBlob, forceUpdate],
    );

    React.useEffect(() => {
        if (pointer?.pressed) {
            draw({color, tool, pointer});
        }
    }, [pointer, color, tool, draw]);

    React.useEffect(() => {
        if (prevPressed && !pointer?.pressed) {
            getImageBlob((nextBlob) => setBlob(nextBlob, id));
        }
    }, [pointer, prevPressed, id, getImageBlob, setBlob]);

    React.useEffect(() => {
        if (blob) {
            handleBlobChange(blob);
        }
    }, [blob, handleBlobChange]);

    return <canvas ref={ref} style={style} width={width} height={height} />;
};
