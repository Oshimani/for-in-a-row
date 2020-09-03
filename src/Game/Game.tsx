import React from 'react'
import { useLocation } from "react-router-dom";
import Board from './Board/Board';
import { useSelector } from 'react-redux';
import { IRootReducerState } from '../reducers/root-reducer';

const Game = () => {
    const gameId = useLocation().pathname.split('/').pop();

    const currentPlayer = useSelector((state: IRootReducerState) => state.currentPlayer)

    return (
        <div>
            <section>
                <div className="text-3xl">
                Player <span className={currentPlayer === 0 ? 'text-yellow-600' : 'text-red-600'}>{currentPlayer}</span> is now playing
                </div>
            </section>

            {/* GAME */}
            <section>
                <Board />
            </section>

            {/* GAME INFO */}
            <section>

            </section>
        </div>
    )
}

export default Game
