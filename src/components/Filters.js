import React, {useEffect, useState} from "react";
import { CiFilter} from "react-icons/ci";


export default function Filters({ games, setFilters }) {
    const [tags, setTags] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);

    useEffect(() => {
        let tags = []

        games.forEach((game) => {
            game.tags.forEach((tag) => {
                if (!tags.includes(tag))
                    tags.push(tag);
            })
        });

        tags.sort()
        setTags(tags);
    }, [games])

    const selectTag = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(t => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    }

    useEffect(() => {
        setFilters(selectedTags);
        const clearButton = document.getElementById("clearButton");
        clearButton.style.visibility = selectedTags.length > 0 ? "visible" : "hidden";
    }, [selectedTags, setFilters])

    return (
        <div className='dropdown'>
            <button className="btn btn-secondary dropdown-toggle" type="button" id="filtersButton"
                    data-bs-toggle="dropdown" aria-expanded="false">
                <CiFilter /> Filters
            </button>
            <button className='btn btn-secondary'
                    type="button"
                    id='clearButton'
                    onClick={() => setSelectedTags([])}
                    style={{marginLeft: '10px'}}>
                Clear Filters
            </button>
            <ul className='dropdown-menu' aria-labelledby='filtersButton'>
                <form>
                    {tags.map(tag => {
                        return (
                            <li key={tag}>
                                <label>
                                    <input type='checkbox' id={tag} checked={selectedTags.includes(tag)}
                                           onChange={(e) => {
                                               selectTag(tag);
                                               e.target.checked = selectedTags.includes(tag);
                                           }}
                                    />{tag}
                                </label>
                            </li>
                        )
                    })}
                </form>
            </ul>
        </div>
    )
}