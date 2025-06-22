import React, {useEffect, useState} from "react";
import { CiFilter } from "react-icons/ci";

export default function Filter({ setSelectedTags }) {
    const tags = [
        "action", "action-rpg", "adventure", "anime", "art", "battle-royale", "boss-fights", "building", "cars",
        "choices-matter", "cinematic", "classic", "co-op", "collectathon", "comedy", "competitive", "complex",
        "crafting", "creative", "crime", "cross-platform", "customization", "cyberpunk", "dark", "dark-fantasy",
        "detective", "difficult", "dungeon-crawler", "dystopian", "early-access", "emotional", "esports",
        "exploration", "family-friendly", "fantasy", "father-son", "feudal-japan", "fighting", "first-person",
        "free-to-play", "futuristic", "gacha", "gothic", "greek-mythology", "heavy-metal", "hero-shooter", "horror",
        "humor", "indie", "ink", "jrpg", "life-sim", "loot", "lovecraftian", "metroidvania", "military", "minimalist",
        "mmorpg", "moba", "modern", "monster-hunter", "multiplayer", "music", "mythology", "narrative-driven",
        "nintendo", "nostalgia", "open-world", "party", "physics", "platformer", "point-and-click", "post-apocalyptic",
        "procedural", "psychological", "puzzle", "racing", "realistic", "relaxing", "remake", "remaster", "rhythm",
        "robots", "roguelike", "rpg", "run-and-gun", "sandbox", "satire", "sci-fi", "shooter", "simulation",
        "single-player", "souls-like", "space", "sports", "stealth", "steampunk", "story-driven", "strategy",
        "superhero", "survival", "tactical", "team-based", "text-heavy", "third-person", "treasure-hunt", "trippy",
        "turn-based", "viking", "vr", "walking-sim", "western", "wordless", "zombies"
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        setSelectedTags(filter);
    }, [filter, setSelectedTags]);

    function handleFilter(tag) {
        setFilter(prev =>
        prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
    }

    return (
        <div className="dropdown">
            <button
                className="btn btn-secondary dropdown-toggle"
                onClick={() => setIsOpen(!isOpen)}
            >
                <CiFilter /> Filter
            </button>
            <form>
                <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
                    {tags.map((tag) => (
                        <li key={tag}>
                            <input type="checkbox" value={tag}
                                   id={tag}
                                   onChange={() => handleFilter(tag)}/>
                            <label htmlFor={tag}>{tag}</label>
                        </li>
                    ))}
                </ul>
            </form>
        </div>
    )
}