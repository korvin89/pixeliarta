type Args = {
    deltaW: number;
    deltaH: number;
};

export const useStyle = (args: Args): React.CSSProperties => {
    const {deltaW, deltaH} = args;

    return {
        position: 'absolute',
        left: -deltaW / 2,
        top: -deltaH / 2,
        width: `calc(100% + ${deltaW}px)`,
        height: `calc(100% + ${deltaH}px)`,
    };
};
