import React from "react";
import Navbar from "./components/Navbar";
import Games from "./components/Games";
import Test from "./components/Test";


function App() {
    return (
        <div>
            <Navbar />

            <div className={'container g-3'}>
                <div className={'row'}>
                    <div className={'col-10'}>
                        <Games />
                    </div>
                    <div className={'col-2'}>
                        <Test />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;