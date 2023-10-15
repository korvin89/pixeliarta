import {activeTabSelector, useAppSelector} from '../../store';

export const useStore = () => {
    const activeTab = useAppSelector(activeTabSelector);

    return {activeTab};
};
