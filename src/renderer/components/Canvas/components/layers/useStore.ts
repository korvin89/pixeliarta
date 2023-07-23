import {
    canvasPointerSelector,
    canvasScaleSelector,
    toolbarColorSelector,
    toolbarToolSelector,
    useAppSelector,
} from '../../../../store';

export const useStore = () => {
    const pointer = useAppSelector(canvasPointerSelector);
    const scale = useAppSelector(canvasScaleSelector);
    const color = useAppSelector(toolbarColorSelector);
    const tool = useAppSelector(toolbarToolSelector);

    return {pointer, scale, color, tool};
};
