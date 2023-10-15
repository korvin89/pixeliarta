import {tabCanvaselector, useAppSelector} from '../../store';

export const useStore = () => {
    const canvas = useAppSelector(tabCanvaselector);

    return {canvas};
};
