import React from "react";

function GameModal({ game }) {
    return (
        <div className='d-flex justify-content-center align-items-end' style={{marginBottom: "15px"}}>
            <button className={'btn btn-primary game-btn'}
                    style={{width:'85%'}}
                    data-bs-toggle={'modal'}
                    data-bs-target={'#'+game.id}>
                More info
            </button>
            <div className={'modal modal-xl fade'} id={game.id}>
                <div className={'modal-dialog'}>
                    <div className={'modal-content'}>
                        <div className="modal-header">
                        <button type="button"
                                className="btn btn-close"
                                data-bs-dismiss="modal"
                                aria-label="close"></button>
                        </div>
                        <div className={'modal-header'}>
                            <img src={game.img} alt={game.name}/>
                        </div>
                        <div className={'modal-header game d-flex justify-content-center align-items-center'}><h1>{game.name}</h1></div>
                        <div className={'modal-body game'}>
                            <p><b>Release date</b>: {game.releaseDate}</p>
                            <p><b>Tags</b>: {game.tags.join(', ')}</p>
                            <p><b>Rating</b>: {game.rating}</p>
                            <p>{game.fullDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameModal;