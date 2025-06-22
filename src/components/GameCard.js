import React from "react";
import GameModal from "./GameModal";


function GameCard({ game }) {
    return (
        <div className={'col'} key={game.id}>
            <div className={'card h-100 transform'}>
                <div className={'card-img-top'}>
                    <img src={game.img} alt={game.name} height={350} width={'100%'} />
                </div>
                <div className={'card-header text-center'}>
                    <p>{game.name}</p>
                </div>
                <div className={'card-text h-100'}>
                    <p>Release date: {game.releaseDate}</p>
                    <p>Tags: {game.tags.join(', ')}</p>
                    <p>Rating: {game.rating}</p>
                    <p>{game.shortDescription}</p>
                </div>
                <div className={'card-footer'}>
                    <GameModal game={game}/>
                </div>
            </div>
        </div>
    )
}

export default GameCard;