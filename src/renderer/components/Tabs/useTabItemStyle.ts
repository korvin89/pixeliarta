import {ButtonReset, ColorToken} from '../../constants';

type Args = {
    active: boolean;
};

export const useTabItemStyle = ({active}: Args): React.CSSProperties => {
    return {
        ...ButtonReset,
        ...(active && {background: ColorToken.BACKGROUND}),
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        padding: '0 5px',
        zIndex: 1,
    };
};
