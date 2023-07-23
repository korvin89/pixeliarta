import type {CanvasPointer} from '../../store';

export type SetPointer = (pointer?: CanvasPointer) => void;
export type UpdatePointer = (pointer?: Partial<CanvasPointer>) => void;
