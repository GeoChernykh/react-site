import React from "react";

function Navbar() {
    return (
        <nav className={'navbar navbar-expand bg-primary fixed-top'}>
            <div className={'container'}>
                <a href="/" className={'navbar-brand text-light'} style={{fontSize: '30px'}}>Video Games</a>
            </div>
            <ul className={'navbar-nav'}>

            </ul>
        </nav>
    )
}

export default Navbar;