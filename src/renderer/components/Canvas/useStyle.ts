type Args = {
    scale: number;
};

export const useStyle = ({scale}: Args): React.CSSProperties => {
    return {
        width: 32 * scale,
        height: 32 * scale,
    };
};
