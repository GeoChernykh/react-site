import React from "react";
import { CiSearch } from "react-icons/ci";


export default function Search({ setSearch }) {
    return (
        <form>
            <div className={'input-group'}>
                <div className={'input-group-text'} id="search-icon"><CiSearch /></div>
                <input id={'search'} type={"text"} placeholder={"Search"}
                       className={'form-control'} style={{cursor: 'pointer'}}
                       onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        </form>
    )
}