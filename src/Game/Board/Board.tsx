import React, { useState } from 'react'
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded'

import './board.scss'
import Cell, { ICell } from './Cell/Cell'
import { useDispatch, useSelector } from 'react-redux'
import { Actions, IRootReducerState } from '../../reducers/root-reducer'



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

    const [gameGrid, setGameGrid] = useState<ICell[][]>(
        [
            [
                { x: 0, y: 0, belongsTo: null } as ICell,
                { x: 1, y: 0, belongsTo: null } as ICell,
                { x: 2, y: 0, belongsTo: null } as ICell,
                { x: 3, y: 0, belongsTo: null } as ICell,
                { x: 4, y: 0, belongsTo: null } as ICell,
                { x: 5, y: 0, belongsTo: null } as ICell,
                { x: 6, y: 0, belongsTo: null } as ICell
            ],
            [
                { x: 0, y: 1, belongsTo: null } as ICell,
                { x: 1, y: 1, belongsTo: null } as ICell,
                { x: 2, y: 1, belongsTo: null } as ICell,
                { x: 3, y: 1, belongsTo: null } as ICell,
                { x: 4, y: 1, belongsTo: null } as ICell,
                { x: 5, y: 1, belongsTo: null } as ICell,
                { x: 6, y: 1, belongsTo: null } as ICell
            ],
            [
                { x: 0, y: 2, belongsTo: null } as ICell,
                { x: 1, y: 2, belongsTo: null } as ICell,
                { x: 2, y: 2, belongsTo: null } as ICell,
                { x: 3, y: 2, belongsTo: null } as ICell,
                { x: 4, y: 2, belongsTo: null } as ICell,
                { x: 5, y: 2, belongsTo: null } as ICell,
                { x: 6, y: 2, belongsTo: null } as ICell
            ],
            [
                { x: 0, y: 3, belongsTo: null } as ICell,
                { x: 1, y: 3, belongsTo: null } as ICell,
                { x: 2, y: 3, belongsTo: null } as ICell,
                { x: 3, y: 3, belongsTo: null } as ICell,
                { x: 4, y: 3, belongsTo: null } as ICell,
                { x: 5, y: 3, belongsTo: null } as ICell,
                { x: 6, y: 3, belongsTo: null } as ICell
            ],
            [
                { x: 0, y: 4, belongsTo: null } as ICell,
                { x: 1, y: 4, belongsTo: null } as ICell,
                { x: 2, y: 4, belongsTo: null } as ICell,
                { x: 3, y: 4, belongsTo: null } as ICell,
                { x: 4, y: 4, belongsTo: null } as ICell,
                { x: 5, y: 4, belongsTo: null } as ICell,
                { x: 6, y: 4, belongsTo: null } as ICell
            ],
            [
                { x: 0, y: 5, belongsTo: null } as ICell,
                { x: 1, y: 5, belongsTo: null } as ICell,
                { x: 2, y: 5, belongsTo: null } as ICell,
                { x: 3, y: 5, belongsTo: null } as ICell,
                { x: 4, y: 5, belongsTo: null } as ICell,
                { x: 5, y: 5, belongsTo: null } as ICell,
                { x: 6, y: 5, belongsTo: null } as ICell
            ]
        ]
    )

    const currentPlayer = useSelector((state: IRootReducerState) => state.currentPlayer)
    const dispatch = useDispatch()

    /**
     * finds row where the coin will sit after insertion
     * @param column column to be checked
     */
    const findY = (column: number) => {
        // look for free cell beginning at bottom
        for (let i = gameGrid.length - 1; i >= 0; i--) {

            if (gameGrid[i][column].belongsTo === null) {
                // found free cell
                return i;
            }
        }
        // column is full
        return -1;
    }

    const returnWinCondition = (length: number) => {
        console.log(`Found ${length} in a row`);

        if (length > 3) {
            return { won: true }
        }
        else {
            return { won: false }
        }
    }

    const checkHorizontalWinCondition = (player: 0 | 1, x: number, y: number) => {
        let length = 1
        // check left
        for (let i = x - 1; i > 0; i--) {
            console.log(`Checking horizontal (${gameGrid[y][i].x}|${gameGrid[y][i].y})`);
            if (gameGrid[y][i].belongsTo === player) length++
            else break
        }
        // check right
        for (let i = x + 1; i < gameGrid[y].length; i++) {
            console.log(`Checking horizontal (${i}|${y})`);
            if (gameGrid[y][i].belongsTo === player) length++
            else break
        }

        return returnWinCondition(length)
    }

    const checkVerticalWinCondition = (player: 0 | 1, x: number, y: number) => {
        let length = 1
        // check up
        for (let i = y - 1; i > 0; i--) {
            console.log(`Checking vertical (${x}|${i})`);
            if (gameGrid[i][x].belongsTo === player) length++
            else break
        }
        // check down
        for (let i = y + 1; i < gameGrid.length; i++) {
            console.log(`Checking vertical (${x}|${i})`);
            if (gameGrid[i][x].belongsTo === player) length++
            else break
        }

        return returnWinCondition(length)
    }

    const checkWinCondition = (player: 0 | 1, x: number, y: number) => {
        let won = false
        won = checkHorizontalWinCondition(player, x, y).won
        won = checkVerticalWinCondition(player, x, y).won
        if (won) {
            console.log(`Player ${player} won the game!`)
            return true
        }
        return false
    }


    /**
     * try to insert a chip in selected column
     * @param x column to insert coin
     * @param player current player id
     */
    const insertChip = (x: number, player: 0 | 1) => {
        if (player === null) return

        console.log(`Try insert coin for ${player} in ${x}`)
        const y = findY(x)
        if (y === -1) {
            // cannot insert here
        } else {

            gameGrid[y][x].belongsTo = player
            setGameGrid([...gameGrid])

            const won = checkWinCondition(player, x, y)
            if (won) return

            // next player
            dispatch({ type: Actions.nextPlayer })
        }
    }

    return (

        <div>
            <section className="insertion-row grid grid-cols-7">
                {[1, 2, 3, 4, 5, 6, 7].map((x, i) => {

                    return (
                        <div key={i} onClick={() => { insertChip(i, currentPlayer) }}
                            className={"arrow m-2 p-2 cursor-pointer rounded-full text-6xl h-32 w-32 "
                                + (currentPlayer === 0 ? 'text-yellow-600' : 'text-red-600')}>
                            <ArrowDownwardRoundedIcon fontSize="inherit" />
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
