import {scaleSelector, useAppSelector} from '../../store';

export const useStore = () => {
    const scale = useAppSelector(scaleSelector);

    return {scale};
};
