import type React from 'react';

export type UseStyle<T = unknown> = (args?: T) => React.CSSProperties;
