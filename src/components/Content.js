import React, { useState, useEffect } from "react";
import GameCard from "./GameCard";
import Search from "./Search";
import Filters from "./Filters";


function Content() {
    const [games, setGames] = useState([]);
    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState([]);


    useEffect(() => {
        fetch('/games.json')
        .then(res => res.json())
        .then(data => {
            let games = data

            if (search){
                games = games.filter((game) => game.name.toLowerCase().includes(search.toLowerCase()));
            }

            if (filters.length > 0) {
                games = games.filter((game) => {
                    for (let tag of filters) {
                        if (!game.tags.includes(tag)) {
                            return false;
                        }
                    }
                    return true;
                })
            }

            setGames(games);
        })
        .catch(err => console.log(err));
    }, [search, filters]);

    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <Search setSearch={setSearch} />
                </div>
                <div className="col">
                    <Filters games={games} setFilters={setFilters} />
                </div>
            </div>
            <div className="row" style={{paddingTop: '20px'}}>
                <div className={'container'}>
                    <div className={'row g-4 row-cols-xl-3 row-cols-md-2 row-cols-1'}>
                        {games.map((game) => {
                            return (
                                <GameCard game={game} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;