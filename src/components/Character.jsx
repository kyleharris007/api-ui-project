import { Link } from 'react-router-dom';

// This function creates a react component named Character that displays info about a character from
// the api. It takes a character object as a parameter and returns a div with the character's image
// and name.
export default function Character({ character }) {
    return (
        <div className="character" key={character._id}>
            {/* This is the react-router link component, which is used to create a navigation link.
            The 'to' attribute specifies the target url, which includes the character id. */}
            <Link to={`/character/${character._id}`}>
                {/* Displays the character's image and name.*/}
                <img src={character.image} alt={character.name} />
                <p>{character.name}</p>
            </Link>
        </div>
    )
}