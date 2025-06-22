import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Games from "./components/Games";
import Quiz from "./components/Quiz";
import Search from "./components/Search";
import Filter from "./components/Filter";


function App() {
    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState([]);

    return (
        <div>
            <Navbar />
            <div className={'container g-4  content-container'}>
                <div className="row">
                    <div className="col">
                        <Search setSearch={setSearch} />
                    </div>
                    <div className="col">
                        <Filter setFilters={setFilters} />
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-xl-10 col-md-9 col-8'}>
                        <Games search={search} filters={filters} />
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