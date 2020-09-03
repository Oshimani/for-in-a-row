import React from 'react'
import { useNavigate } from 'react-router-dom';

const Menu = () => {

    const navigate = useNavigate();

    // const [userName, setUserName] = useState<string>('')

    const createGame = (gameId?: string) => {
        if (gameId === 'local') {
            // create local game
        } else {
            // create online lobby

            gameId = '123-123-123'

        }
        // enter lobby
        navigate(`/game/${gameId}`)
    }

    return (
        <div>
            <section>
                Create new Game
            </section>

            <section>
                Choose your name:
                {/* <input onChange={(e) => setUserName(e.target.value)} type="text" /> */}
            </section>

            <section>
                <button onClick={() => createGame()} className="px-4 py-2 bg-red-600">Play online</button>
                <button onClick={() => createGame('local')} className="px-4 py-2 bg-red-600">Play local</button>
            </section>
        </div>
    )
}

export default Menu
