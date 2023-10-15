import {ColorToken} from '../../constants';

export const useStyle = (): React.CSSProperties => {
    return {
        backgroundColor: ColorToken.BACKGROUND,
        width: '100%',
        height: '100%',
    };
};
