import React from 'react';

import {useStyle} from './useStyle';

type Point = {
    x: number;
    y: number;
};

type Props = {
    canvasWidth: number;
    canvasHeight: number;
    strokeWidth: number;
    cellSize: number;
    stroke: string;
};

const renderHorizontalLine = (args: {
    from: Point;
    to: Point;
    strokeWidth: number;
    yOffset: number;
    stroke: string;
}) => {
    const {from, to, strokeWidth, yOffset, stroke} = args;

    return (
        <line
            x1={from.x}
            x2={to.x}
            y1={from.y + strokeWidth / 2 + yOffset}
            y2={to.y + strokeWidth / 2 + yOffset}
            stroke={stroke}
            fill="transparent"
            strokeWidth={strokeWidth}
        />
    );
};

const renderVerticalLine = (opts: {
    from: Point;
    to: Point;
    strokeWidth: number;
    xOffset: number;
    stroke: string;
}) => {
    const {from, to, strokeWidth, xOffset, stroke} = opts;

    return (
        <line
            x1={from.x + strokeWidth / 2 + xOffset}
            x2={to.x + strokeWidth / 2 + xOffset}
            y1={from.y}
            y2={to.y}
            stroke={stroke}
            fill="transparent"
            strokeWidth={strokeWidth}
        />
    );
};

export const Grid = (props: Props) => {
    const {canvasWidth, canvasHeight, strokeWidth, cellSize, stroke} = props;
    const style = useStyle({canvasWidth, canvasHeight, strokeWidth});
    const width = canvasWidth + strokeWidth;
    const height = canvasHeight + strokeWidth;
    const horLines: React.JSX.Element[] = [];
    const verLines: React.JSX.Element[] = [];

    for (let yOffset = 0; yOffset <= height; yOffset += cellSize) {
        const from: Point = {x: 0, y: 0};
        const to: Point = {x: width, y: 0};
        horLines.push(renderHorizontalLine({from, to, strokeWidth, yOffset, stroke}));
    }

    for (let xOffset = 0; xOffset <= width; xOffset += cellSize) {
        const from: Point = {x: 0, y: 0};
        const to: Point = {x: 0, y: height};
        verLines.push(renderVerticalLine({from, to, strokeWidth, xOffset, stroke}));
    }

    return (
        <svg style={style} xmlns="http://www.w3.org/2000/svg">
            {horLines}
            {verLines}
        </svg>
    );
};
