import React, { useState } from 'react'
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded'

import './board.scss'
import Cell, { ICell } from './Cell/Cell'

const initializeGameGrid = (width: number, height: number) => {
    const grid: ICell[][] = [[]];
    for (let y = 0; y < height; y++) {
        grid[y] = [];
        for (let x = 0; x < width; x++) {
            grid[y].push({ x, y, belongsTo: null } as ICell)
        }
    }
    console.log("Game initialized", grid);
    return grid;
}





const Board = () => {
    const [gameGrid, setGameGrid] = useState<ICell[][]>(initializeGameGrid(7, 6))

    /**
     * finds row where the coin will sit after insertion
     * @param column column to be checked
     */
    const findRow = (column: number) => {
        // look for free cell beginning at bottom
        for (let i = gameGrid.length - 1; i >= 0; i--) {
            console.log("Checking: " ,column, i);

            if (!gameGrid[i][column].belongsTo) {
                // found free cell
                return i;
            }
        }
        // column is full
        return -1;
    }

    /**
     * try to insert a chip in selected column
     * @param column column to insert coin
     * @param player current player id
     */
    const insertChip = (column: number, player: number) => {
        console.log(`Try insert coin for ${player} in ${column}`)
        const row = findRow(column)
        if (row === -1) {
            // cannot insert here
        } else {
            console.log("Coin @");

            gameGrid[row][column].belongsTo = player
            setGameGrid([...gameGrid])
        }
    }

    return (

        <div>
            <section className="grid grid-cols-7">
                {[1, 2, 3, 4, 5, 6, 7].map((x, i) => {

                    return (
                        <div key={i} onClick={() => { insertChip(i, 1) }}
                            className=" m-2 p-2 rounded-full text-6xl bg-blue-300 h-32 w-32">
                                <ArrowDownwardRoundedIcon fontSize="inherit"/>
                        </div>
                    )
                })
                }


            </section>

            <section>
                <div className="board grid grid-cols-7 grid-rows-6">
                    {
                        gameGrid.map(row => {
                            return (row.map(cell => {
                                return <Cell key={`${cell.x}/${cell.y}`} {...cell} />
                            }))
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Board
