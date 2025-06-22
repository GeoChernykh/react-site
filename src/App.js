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
                    <div className={'col-xl-10 col-md-9 col-8'}>
                        <Games />
                    </div>
                    <div className={'col-xl-2 col-md-3 col-4'}>
                        <Quiz />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;