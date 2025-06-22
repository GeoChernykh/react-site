import React from "react";


function Login() {
    return (
        <div>
            <button className={'btn btn-primary'}
                    data-bs-toggle={'modal'} data-bs-target={'#loginModal'}
            >Log In</button>
            <div className={'modal modal-lg fade'} id={'loginModal'} tabIndex={-1} aria-hidden={true}
            style={{zIndex: 1080}}>
                <div className={'modal-dialog'}>
                    <div className={'modal-content'}>
                        <div className="modal-header">
                            <h5 className="modal-title">Форма обратной связи</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Закрыть"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email"
                                           placeholder="name@example.com"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Сообщение</label>
                                    <textarea className="form-control" id="message" rows="3"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                            <button type="button" className="btn btn-primary">Отправить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;