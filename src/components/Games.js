import React from "react";
import { useState } from "react";
import GameCard from "./GameCard";


function Games() {
    const [games, setGames] = useState([]);

    fetch('/games.json')
    .then(res => res.json())
    .then(games => setGames(games));

    return (
        <div className={'container'}>
            <div className={'row g-3'}>
                {games.map((game) => {
                    return (
                        <GameCard game={game} />
                    )
                })}
            </div>
        </div>
    )
}

export default Games;