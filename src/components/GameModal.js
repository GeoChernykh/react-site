import React from "react";
import { IoClose } from "react-icons/io5"


function GameModal({ game }) {
    return (
        <div>
            <button className={'btn btn-primary game-card-btn transform'}
                    style={{width:'100%'}}
                    data-bs-toggle={'modal'}
                    data-bs-target={'#'+game.id}>
                More info
            </button>
            <div className={'modal modal-xl fade'} id={game.id}>
                <div className={'modal-dialog'}>
                    <div className={'modal-content game-modal'}>
                        <div className="modal-header">
                        <button type="button" className="btn" data-bs-dismiss="modal"
                                aria-label="close"><IoClose /></button>
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