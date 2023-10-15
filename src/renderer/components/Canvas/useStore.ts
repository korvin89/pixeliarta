import {
    tabCanvasLayersSelector,
    tabCanvasRectSelector,
    tabCanvasScaleSelector,
    toolbarColorSelector,
    useAppSelector,
} from '../../store';

export const useStore = () => {
    const layers = useAppSelector(tabCanvasLayersSelector);
    const rect = useAppSelector(tabCanvasRectSelector);
    const scale = useAppSelector(tabCanvasScaleSelector);
    const color = useAppSelector(toolbarColorSelector);

    return {layers, rect, scale, color};
};
