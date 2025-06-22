import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Games from "./components/Games";
import Quiz from "./components/Quiz";
import Search from "./components/Search";
// import Filter from "./components/Filter";


function App() {
    const [search, setSearch] = useState("");

    return (
        <div>
            <Navbar />
            <div className={'container mb-lg-5'} id="content-container">
                <div className={'row'}>
                    <div className={'col-xl-10 col-md-9 col-8'}>
                        <div className="row">
                            <Search setSearch={setSearch} />
                        </div>
                        <div className="row" style={{paddingTop: '20px'}}>
                            <Games search={search} />
                        </div>
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