import React, { useState, useEffect } from "react";
import GameCard from "./GameCard";


function Games({ search, filters }) {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch('/games.json')
        .then(res => res.json())
        .then(data => {
            let games = data

            if (search) {
                games = games.filter(function (game) {
                    return game.name.toLowerCase().includes(search.toLowerCase());
                });
            }

            if (filters) {
                games = games.filter(function (game) {

                });
            }

            setGames(games);
        })
        .catch(err => console.log(err));
    }, [search, filters]);

    return (
        <div className={'container'}>
            <div className={'row g-4 row-cols-xl-3 row-cols-md-2 row-cols-1'}>
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