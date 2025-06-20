import React from "react";


function GameCard({ game }) {
    return (
        <div className={'col-3'} key={game.id}>
            <div className={'card h-100'}>
                <div className={'card-image'}>
                    <img src={game.image} alt={game.name} />
                </div>
                <div className={'card-text'}>{game.name}</div>
                <div className={'card-text'}>{game.date}</div>
                <div className={'card-text'}>{game.rating}</div>
                <div className={'card-text'}>{game.tags}</div>
                {/*<GameModal />*/}
            </div>
        </div>
    )
}

export default GameCard;