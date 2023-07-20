import {canvasPointerSelector, scaleSelector, useAppSelector} from '../../../../store';

export const useStore = () => {
    const scale = useAppSelector(scaleSelector);
    const pointer = useAppSelector(canvasPointerSelector);

    return {scale, pointer};
};
