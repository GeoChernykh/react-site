import React from "react";
import Login from './Login';


function Navbar() {
    return (
        <nav className={'navbar navbar-expand'}>
            <div className={'container'}>
                <div className='navbar-brand'>
                    <img src="/windows-7-games-icon.png" alt="" className='navbar-logo' height='80px'/>
                    <a href="/" className={'navbar-brand'}>Video Games</a>
                </div>
                <ul className={'navbar-nav'}>
                    <li>
                        <Login />
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;