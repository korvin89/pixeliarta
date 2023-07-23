import {
    canvasLayersSelector,
    canvasRectSelector,
    canvasScaleSelector,
    toolbarColorSelector,
    useAppSelector,
} from '../../store';

export const useStore = () => {
    const layers = useAppSelector(canvasLayersSelector);
    const rect = useAppSelector(canvasRectSelector);
    const scale = useAppSelector(canvasScaleSelector);
    const color = useAppSelector(toolbarColorSelector);

    return {layers, rect, scale, color};
};
