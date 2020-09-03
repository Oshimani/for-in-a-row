import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';
import Menu from './Menu/Menu';
import Game from './Game/Game';

function App() {
    return (
        <div className="App bg-gray-900">
            <div className="container mx-auto">
                <Routes>
                    <Route path="/" element={<Menu />} />
                    <Route path="game/*" element={<Game />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
