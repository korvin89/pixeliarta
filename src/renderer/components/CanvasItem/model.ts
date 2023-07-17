import type {CanvasPointer} from '../../store';

type ConstructorArgs = {
    canvas: HTMLCanvasElement;
};

export class CanvasItemModel {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    constructor(args: ConstructorArgs) {
        const {canvas} = args;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
            throw new Error('Canvas context have already requested with a different type');
        }

        this.canvas = canvas;
        this.ctx = ctx;
    }

    draw(args: {pointer?: CanvasPointer}) {
        const {pointer} = args;

        if (!pointer) {
            return;
        }

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(pointer.x, pointer.y, 8, 8);
    }
}
