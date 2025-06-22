import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Games from "./components/Games";
import Quiz from "./components/Quiz";
import Search from "./components/Search";
// import Filter from "./components/Filter";


function App() {
    const [search, setSearch] = useState("");
    // const [selectedTags, setSelectedTags] = useState([]);

    return (
        <div>
            <Navbar />
            <div className={'container g-4 mb-lg-5'}>
                <div className="row">
                    <div className="col">
                        <Search setSearch={setSearch} />
                    </div>
                    {/*<div className="col">*/}
                    {/*    <Filter setSelectedTags={setSelectedTags} />*/}
                    {/*</div>*/}
                </div>
                <div className={'row'}>
                    <div className={'col-xl-10 col-md-9 col-8'}>
                        <Games search={search} />
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