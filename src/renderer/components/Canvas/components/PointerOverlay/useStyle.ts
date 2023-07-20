type Args = {
    wDelta: number;
    hDelta: number;
};

export const useStyle = (args: Args): React.CSSProperties => {
    const {wDelta, hDelta} = args;

    return {
        position: 'absolute',
        left: -wDelta / 2,
        top: -hDelta / 2,
        width: `calc(100% + ${wDelta}px)`,
        height: `calc(100% + ${hDelta}px)`,
        // for development purposes
        background: 'rgba(0, 0, 0, 0.2)',
    };
};
