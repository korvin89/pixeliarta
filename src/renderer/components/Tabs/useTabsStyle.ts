import {ColorToken} from '../../constants';

export const useTabsStyle = (): React.CSSProperties => {
    return {
        display: 'flex',
        height: 30,
        width: '100%',
        backgroundColor: ColorToken.TAB_AREA,
    };
};
