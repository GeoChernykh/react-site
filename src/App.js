import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Quiz from "./components/Quiz";


function App() {
    document.documentElement.setAttribute("data-bs-theme", "dark");

    return (
        <div>
            <Navbar />
            <div className={'container mb-lg-5'} id="content-container">
                <div className={'row'}>
                    <div className={'col-xl-10 col-md-9 col-8'}>
                        <Content />
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