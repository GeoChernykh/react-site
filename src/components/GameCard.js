import React from "react";
import GameModal from "./GameModal";


function GameCard({ game }) {
    return (
        <div className={'col'} key={game.id} style={{paddingInline: '15px'}}>
            <div className={'card h-100 game-card'}>
                <div className={'card-img-top'}>
                    <img src={game.img} alt={game.name} height={420} width={'100%'} className='game-card-img' />
                </div>
                <div className={'card-header text-center h-100 d-flex justify-content-center align-items-center'}>
                    <h4>{game.name}</h4>
                </div>
                <div className={'card-text h-100'}>
                    <p>Release date: {game.releaseDate}</p>
                    <p>Tags: {game.tags.join(', ')}</p>
                    <p>Rating: {game.rating}</p>
                    <p>{game.shortDescription}</p>
                    <GameModal game={game}/>
                </div>
            </div>
        </div>
    )
}

export default GameCard;