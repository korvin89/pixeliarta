type ConstructorArgs = {
    canvas: HTMLCanvasElement;
};

export class CanvasItemModel {
    constructor(args: ConstructorArgs) {
        const {canvas} = args;
        const ctx = canvas.getContext('2d');

        if (ctx) {
            ctx.fillStyle = 'green';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
    }
}
