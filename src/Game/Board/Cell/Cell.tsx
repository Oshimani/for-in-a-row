import React from 'react'

import './cell.scss'
import Chip from './Chip/Chip';

export interface ICell {
    x: number;
    y: number;
    belongsTo: number | null;
}

const Cell = (props: ICell) => {
    return (
        <div className="cell relative m-2 p-2 rounded-full bg-blue-600 h-32 w-32">
            <Chip {...props}><>{props.x}/{props.y}<br />Player: {props.belongsTo}</></Chip>
        </div>
    )
}

export default Cell
