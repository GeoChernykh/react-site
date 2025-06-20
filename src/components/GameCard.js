import React from "react";


function GameCard({ game }) {
    return (
        <div className={'col-3'} key={game.id}>
            <div className={'card h-100'}>
                <div className={'card-image'}>
                    <img src={game.img} alt={game.name} />
                </div>
                <div className={'card-text'}>{game.name}</div>
                <div className={'card-text'}>{game.releaseDate}</div>
                <div className={'card-text'}>{game.tags}</div>
                <div className={'card-text'}>{game.rating}</div>
                <div className={'card-text'}>{game.shortDescription}</div>
                {/*<GameModal />*/}
            </div>
        </div>
    )
}

export default GameCard;