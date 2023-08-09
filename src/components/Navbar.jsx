import { NavLink } from 'react-router-dom';

// This function creates a react component named Navigation that displays a navigation bar with links
export default function Navigation( {characters} ) {
    return (
        <nav>
            {/* This line creates a navigation link to the home page/characters page. */}
            <NavLink className="nav-link" to="/">Home</NavLink>
            {/* This uses the map function to generate a list of nav links based on the
            characters array. */}
            {characters?.map((char) => (
                // Creates a navigation link for each character in the array.
                <NavLink className="nav-link" to={`character/${char.id}`}>{char.name}</NavLink>
            ))}
        </nav>
    )
}