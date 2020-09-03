import React from 'react'

import './chip.scss'

const Chip = (props: { belongsTo: number | null, children: any }) => {

    const renderChip = (belongsTo: number | null) => {
        switch (belongsTo) {
            case 1:
                return <div className="bg-yellow-500 w-full h-full"></div>
            case 2:
                return <div className="bg-red-500 w-full h-full"></div>
            default:
                return
        }
    }

    return (
        <div className="chip">
            {renderChip(props.belongsTo)}
            <div className="chip">
                {props.children}
            </div>
        </div>
    )
}

export default Chip
