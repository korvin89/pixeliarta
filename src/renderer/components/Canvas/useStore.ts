import {canvasRectSelector, canvasScaleSelector, useAppSelector} from '../../store';

export const useStore = () => {
    const scale = useAppSelector(canvasScaleSelector);
    const rect = useAppSelector(canvasRectSelector);

    return {scale, rect};
};
