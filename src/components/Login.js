import React, {useState} from "react";


function Login() {
    const [logged, setLogged] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setLogged(true);
    }

    return (
        <div>
            <button className='btn btn-primary'
                    data-bs-toggle='modal' data-bs-target='#loginModal'
                    style={{fontSize: '22px', visibility: !logged ? '' : 'hidden'}}>
                Log In</button>
            <div className='modal modal-lg fade' id='loginModal'>
                <div className='modal-dialog'>
                    <div className='modal-content' id='login-modal-content'>
                        <div className="modal-header">
                            <h5 className="modal-title">Log in</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"
                                    aria-label="close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-floating" style={{marginBottom: '15px'}}>
                                    <input type="text" id='username' className='form-control'
                                    placeholder='Username' required/>
                                    <label htmlFor="username">Username</label>
                                    <div className="invalid-feedback">Invalid username</div>
                                    <div className="valid-feedback">Correct username</div>
                                </div>
                                <div className="form-floating" style={{marginBottom: '15px'}}>
                                    <input type="email" id='email' className='form-control'
                                    placeholder='Email' required/>
                                    <label htmlFor="email">Email</label>
                                    <div className="invalid-feedback">Invalid email</div>
                                    <div className="valid-feedback">Correct email</div>
                                </div>
                                <button
                                    className="btn btn-primary bg-light text-dark"
                                    onClick={(e) => handleLogin(e)}
                                    data-bs-dismiss="modal"
                                    style={{float: 'inline-end'}}
                                >Log in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;