import React from "react";
import Login from './Login';


function Navbar() {
    return (
        <nav className={'navbar navbar-expand'}>
            <div className={'container'}>
                <a href="/" className={'navbar-brand'}>Video Games</a>
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