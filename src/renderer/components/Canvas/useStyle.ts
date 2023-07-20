import type {Rect} from '../../store';

type Args = {
    scale: number;
    rect: Rect;
};

export const useStyle = ({scale, rect}: Args): React.CSSProperties => {
    return {
        width: rect.w * scale,
        height: rect.h * scale,
    };
};
