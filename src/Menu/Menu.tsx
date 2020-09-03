import React from 'react'
import { useNavigate } from 'react-router-dom';

const Menu = () => {

    const navigate = useNavigate();

    // const [userName, setUserName] = useState<string>('')

    const createGame = () => {
        // do stuff

        // create lobby
        const gameId: string = "123ab";

        // enter lobby
        navigate(`/game/${gameId}`);
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
                <button onClick={() => createGame()} className="px-4 py-2 bg-red-600">Create Game</button>
            </section>
        </div>
    )
}

export default Menu
