import { Link, useParams, useNavigate } from 'react-router-dom';
import { getCharacter } from '../services/characters';
import { useState, useEffect } from 'react';

// This function creates a react component named CharacterInfo that displays info about specific
// characters from the api.
export default function CharacterInfo() {
    // This line initializes a state variable named character using useState. The initial state is
    // set as empty. The setCharacter function is used to update the character state variable.
    const [character, setCharacter] = useState({})

    // Uses the useParams hook from React Router to extract the id parameter from the url. This id
    // represents a unique character id.
    let { id } = useParams();
    // Uses the useNavigate hook from React Router to get the navigate function, which is used to
    // navigate back to other parts of the application.
    let navigate = useNavigate();

    // This useEffect hook is set up to execute when the id parameter changes. It ensures that when
    // the id changes, the character state variable is updated with the character info from the api.
    useEffect(() => {
        fetchCharacter()
    }, [id])

    // This function fetches the character info from the api and updates the character state.
    async function fetchCharacter() {
        const oneCharacter = await getCharacter(id);
        setCharacter(oneCharacter);
    }

    // Defines the content and structure of the component. It displays various details about the
    // character. The details are obtained from the character state and is updated asychronously
    // after the api request.
    return (
        <div className="character-info">
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name} />
            <p>{character.description}</p>
            <div className="character-info-items">
                <h4>Gender: {character.gender}</h4>
                <h4>Health: {character.status}</h4>
            </div>
        </div>
    )
}