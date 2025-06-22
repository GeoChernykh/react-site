import React, { useState, useEffect} from "react";
import GameCard from "./GameCard";


function Games() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch('/games.json')
        .then(res => res.json())
        .then(games => setGames(games))
        .catch(err => console.log(err));
    }, []);

    return (
        <div className={'container'}>
            <div className={'row g-4 row-cols-3'}>
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