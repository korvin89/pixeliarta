import {
    tabCanvasPointerSelector,
    tabCanvasScaleSelector,
    toolbarColorSelector,
    toolbarToolSelector,
    useAppSelector,
} from '../../../../store';

export const useStore = () => {
    const pointer = useAppSelector(tabCanvasPointerSelector);
    const scale = useAppSelector(tabCanvasScaleSelector);
    const color = useAppSelector(toolbarColorSelector);
    const tool = useAppSelector(toolbarToolSelector);

    return {pointer, scale, color, tool};
};
