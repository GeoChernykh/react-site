import React, { useState, useEffect } from "react";
import GameCard from "./GameCard";


function Games({ search, selectedTags }) {
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

            if (selectedTags.length > 0) {
                games = games.filter(function (game) {
                    for (let tag in selectedTags) {
                        if (game.tags.includes(tag)) {
                            return false;
                        }
                    }
                    return true;
                })
            }

            setGames(games);
        })
        .catch(err => console.log(err));
    }, [search, selectedTags]);

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