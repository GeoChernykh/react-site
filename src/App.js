import React from "react";
import Navbar from "./components/Navbar";
import Games from "./components/Games";
import Quiz from "./components/Quiz";


function App() {
    return (
        <div>
            <Navbar />
            <div className={'container g-4  content-container'}>
                <div className={'row'}>
                    <div className={'col-10'}>
                        <Games />
                    </div>
                    <div className={'col-2'}>
                        <Quiz />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;