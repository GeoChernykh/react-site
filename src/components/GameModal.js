import React from "react";


function GameModal({ game }) {
    return (
        <div>
            <button className={'btn btn-primary transform'}
                    style={{width:'100%'}}
                    data-bs-toggle={'modal'}
                    data-bs-target={'#'+game.id}>
                More info
            </button>
            <div className={'modal modal-xl'} id={game.id}>
                <div className={'modal-dialog'}>
                    <div className={'modal-content'}>
                        <div className={'modal-header'}>
                            <img src={game.img} alt={game.name}/>
                        </div>
                        <div className={'modal-header'}>{game.name}</div>
                        <div className={'modal-body'}>
                            <p>Release date: {game.releaseDate}</p>
                            <p>Tags: {game.tags.join(', ')}</p>
                            <p>Rating: {game.rating}</p>
                            <p>{game.fullDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameModal;