import type {CanvasPointer} from '../../../../store';

type ConstructorArgs = {
    canvas: HTMLCanvasElement;
    scale: number;
};

export class CanvasItemModel {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private scale: number;

    constructor(args: ConstructorArgs) {
        const {canvas, scale} = args;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
            throw new Error('Canvas context have already requested with a different type');
        }

        this.canvas = canvas;
        this.ctx = ctx;
        this.scale = scale;
    }

    draw(args: {pointer?: CanvasPointer}) {
        const {pointer} = args;

        if (!pointer) {
            return;
        }

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = 'rgb(42 40 42)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = 'green';

        // shape - rectangle (4 x 4) * scale (2)
        // note: min should be equal 1 * scale
        const shape = {w: 4, h: 4};
        const x = pointer.x - (shape.w * this.scale) / 2;
        const y = pointer.y - (shape.h * this.scale) / 2;
        const w = shape.w * this.scale;
        const h = shape.h * this.scale;
        this.ctx.fillRect(x, y, w, h);
    }

    setScale(scale: number) {
        this.scale = scale;
        // this.ctx.scale(this.scale, this.scale);
        // this.canvas.width = this.canvas.width * this.scale;
        // this.canvas.height = this.canvas.height * this.scale;
    }
}
