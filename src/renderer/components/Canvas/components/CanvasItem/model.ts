import type {BaseTool, CanvasPointer} from '../../../../store';

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

    draw(args: {tool: BaseTool; pointer?: CanvasPointer}) {
        const {tool, pointer} = args;

        if (!pointer) {
            return;
        }

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = 'rgb(42 40 42)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = 'green';

        let x: number;
        let y: number;

        if (tool.rect.w > 1) {
            const offsetX = (tool.rect.w * this.scale) / 2;
            x = Math.round((pointer.x - offsetX) / this.scale) * this.scale;
        } else {
            x = Math.floor(pointer.x / this.scale) * this.scale;
        }

        if (tool.rect.h > 1) {
            const offsetY = (tool.rect.h * this.scale) / 2;
            y = Math.round((pointer.y - offsetY) / this.scale) * this.scale;
        } else {
            y = Math.floor(pointer.y / this.scale) * this.scale;
        }

        const w = tool.rect.w * this.scale;
        const h = tool.rect.h * this.scale;
        this.ctx.fillRect(x, y, w, h);
    }

    setScale(scale: number) {
        this.scale = scale;
        // this.ctx.scale(this.scale, this.scale);
        // this.canvas.width = this.canvas.width * this.scale;
        // this.canvas.height = this.canvas.height * this.scale;
    }
}
