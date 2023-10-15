import React from 'react';

import {Canvas} from '../Canvas/Canvas';

import {useStore} from './useStore';

export const Workspace = () => {
    const {activeTab} = useStore();

    return <div>{activeTab && <Canvas />}</div>;
};
