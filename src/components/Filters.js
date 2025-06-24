import React, {useEffect, useState} from "react";
import { CiFilter} from "react-icons/ci";


export default function Filters({ games, setFilters }) {
    const [tags, setTags] = useState([]);
    useEffect(() => {
        let tags = []

        games.forEach((game) => {
            game.tags.forEach((tag) => {
                if (!tags.includes(tag))
                    tags.push(tag);
            })
        });

        setTags(tags);
    }, [games])
    // console.log(tags);



    // useEffect(() => {
    //     // setFilters(selectedTags);
    //     const clearButton = document.getElementById("clearButton");
    //     clearButton.style.visibility = selectedTags.length > 0 ? "visible" : "hidden";
    // }, [selectedTags])

    return (
        <div className='dropdown'>
            <button className="btn btn-secondary dropdown-toggle" type="button" id="filtersButton"
                    data-bs-toggle="dropdown" aria-expanded="false">
                <CiFilter /> Filters
            </button>
            <button className='btn btn-secondary'
                    type="button"
                    id='clearButton'
                    onClick={() => {}}>
                Clear Filters
            </button>
            <ul className='dropdown-menu dropdown-menu-dark' aria-labelledby='filtersButton'>
                <form>
                    {tags.map((tag) => {
                        return (
                            <li key={tag}>
                                <input type="checkbox" id={tag} name='tag' value={tag} />
                                <label htmlFor={tag}>{tag}</label>
                            </li>
                        )
                    })}
                    <button className='btn btn-primary' type='button' style={{}}>Find</button>
                </form>
            </ul>
        </div>
    )
}