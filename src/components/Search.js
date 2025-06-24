import React from "react";
import { CiSearch } from "react-icons/ci";


export default function Search({ setSearch }) {
    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.elements.search.value);
    }

    return (
        <form onSubmit={(e) => handleSearch(e)}>
            <div className='input-group'>
                <div className='input-group-text' id="search-icon"><CiSearch /></div>
                <input id='search' type="text" placeholder="Search" name="search"
                       className='form-control' style={{cursor: 'pointer'}}/>
                <div className='input-group-text'>
                    <button className='btn-close btn-close-white' style={{margin: "auto"}}></button>
                </div>
            </div>
        </form>
    )
}