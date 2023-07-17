type Args = {
    canvasWidth: number;
    canvasHeight: number;
    strokeWidth: number;
};

export const useStyle = (args: Args): React.CSSProperties => {
    const {canvasWidth, canvasHeight, strokeWidth} = args;
    const width = canvasWidth + strokeWidth;
    const height = canvasHeight + strokeWidth;

    return {
        width,
        height,
        position: 'absolute',
        top: -strokeWidth / 2,
        left: -strokeWidth / 2,
        pointerEvents: 'none',
    };
};
