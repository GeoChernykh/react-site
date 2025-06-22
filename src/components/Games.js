import React, { useState, useEffect} from "react";
import GameCard from "./GameCard";
import { CiSearch, CiFilter } from "react-icons/ci";


function Games() {
    const [games, setGames] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch('/games.json')
        .then(res => res.json())
        .then(games => {
            if (!search) {
                setGames(games)
            } else {
                setGames(games.filter(function (game) {return game.name.toLowerCase().includes(search.toLowerCase());}));
            }
        })
        .catch(err => console.log(err));
    }, [search]);

    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col'}>
                    <form>
                        <div className={'input-group'}>
                            <div className={'input-group-text'}><CiSearch /></div>
                            <input id={'search'} type={"text"} placeholder={"Search"} className={'form-control'}
                            style={{cursor: 'pointer'}} onChange={(e) => setSearch(e.target.value)} />
                        </div>
                    </form>
                </div>
            </div>
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