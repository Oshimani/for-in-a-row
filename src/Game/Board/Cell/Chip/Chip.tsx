import React from 'react'

import './chip.scss'

const Chip = (props: { belongsTo: number | null, children: any }) => {

    const renderChip = (belongsTo: number | null) => {
        switch (belongsTo) {
            case 0:
                return <div className="bg-yellow-600 w-full h-full animate__animated animate__backInDown"></div>
            case 1:
                return <div className="bg-red-600 w-full h-full animate__animated animate__backInDown"></div>
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
