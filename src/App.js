import React from "react";
import Navbar from "./components/Navbar";
import Games from "./components/Games";
import Quiz from "./components/Quiz";


function App() {
    return (
        <div>
            <Navbar />
            <div className={'container g-4 pt-5 mt-5'}>
                <div className={'row'}>
                    <div className={'col-10'}>
                        <Games />
                    </div>
                    <div className={'col-2'}>
                        <Quiz />
                    </div>
                </div>
                {/*<div className={'row'}>*/}
                {/*    <nav className={'navbar navbar-expand bg-primary fixed-bottom'}>*/}
                {/*        <div className={'container'}>*/}
                {/*            <a href="/" className={'navbar-brand text-light'} style={{fontSize: '30px'}}>Video Games</a>*/}
                {/*        </div>*/}
                {/*        <ul className={'navbar-nav'}>*/}

                {/*        </ul>*/}
                {/*    </nav>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default App;