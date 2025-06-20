import React from "react";
import Navbar from "./components/Navbar";
import Games from "./components/Games";
import Test from "./components/Test";


function App() {
    return (
        <div className={'container-fluid g-1'}>
            <div className={'row'}>
                <Navbar />
            </div>
            <div className={'row'}>
                <div className={'col-10'}>
                    <Games />
                </div>
                <div className={'col-2'}>
                    <div className={'bg-dark'}>
                        <Test />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;