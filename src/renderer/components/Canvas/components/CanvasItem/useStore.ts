import {
    canvasPointerSelector,
    canvasScaleSelector,
    toolSelector,
    useAppSelector,
} from '../../../../store';

export const useStore = () => {
    const scale = useAppSelector(canvasScaleSelector);
    const pointer = useAppSelector(canvasPointerSelector);
    const tool = useAppSelector(toolSelector);

    return {scale, pointer, tool};
};
