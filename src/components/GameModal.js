import React from "react";

function GameModal({ game }) {
    return (
        <div style={{textAlign: "center", marginBottom: "15px"}}>
            <button className={'btn btn-primary'}
                    style={{width:'85%'}}
                    data-bs-toggle={'modal'}
                    data-bs-target={'#'+game.id}>
                More info
            </button>
            <div className={'modal modal-xl fade'} id={game.id}>
                <div className={'modal-dialog'}>
                    <div className={'modal-content game-modal'}>
                        <div className="modal-header">
                        <button type="button"
                                className="btn btn-close"
                                data-bs-dismiss="modal"
                                aria-label="close"></button>
                        </div>
                        <div className={'modal-header'}>
                            <img src={game.img} alt={game.name}/>

                        </div>
                        <div className={'modal-header'} style={{textAlign: 'center'}}>{game.name}</div>
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