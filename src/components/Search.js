import React, {useEffect, useState} from "react";
import { CiSearch } from "react-icons/ci";


export default function Search({ setSearch }) {
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        setSearch(searchText);
    }, [searchText, setSearch]);

    const handleSearch = (e) => {
        e.preventDefault();
    }

    const handleReset = () => {
        setSearchText("");
    }

    return (
        <form onSubmit={(e) => handleSearch(e)}>
            <div className='input-group'>
                <div className='input-group-text' id="search-icon">
                    <button type='submit'
                            style={{border: 'none', backgroundColor: 'transparent'}}>
                        <CiSearch />
                    </button>
                </div>
                <input id='search' type="text" placeholder="Search" name="search"
                       className='form-control' style={{cursor: 'pointer'}} value={searchText}
                       onChange={(e) => setSearchText(e.target.value)} />
                <div className='input-group-text'>
                    <button className='btn-close' style={{margin: "auto"}}
                            onClick={() => handleReset()}
                            disabled={!searchText}>
                    </button>
                </div>
            </div>
        </form>
    )
}