import React from 'react'
import { useLocation } from "react-router-dom";
import Board from './Board/Board';

const Game = () => {
    const gameId = useLocation().pathname.split('/').pop();


    return (
        <div>
            GAME: {gameId}
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
