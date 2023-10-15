import React from 'react';

import {
    pointerSelector,
    tabCanvasScaleSelector,
    tabsSlice,
    toolbarColorSelector,
    toolbarToolSelector,
    useAppDispatch,
    useAppSelector,
} from '../../../../store';

export const useStore = () => {
    const dispatch = useAppDispatch();
    const pointer = useAppSelector(pointerSelector);
    const scale = useAppSelector(tabCanvasScaleSelector);
    const color = useAppSelector(toolbarColorSelector);
    const tool = useAppSelector(toolbarToolSelector);

    const setBlob = React.useCallback(
        (blob: Blob | null, layerId: string) => {
            dispatch(tabsSlice.actions.setCanvasLayerBlob({blob, layerId}));
        },
        [dispatch],
    );

    return {pointer, scale, color, tool, setBlob};
};
