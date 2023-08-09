import { getCharacters } from '../services/characters';
import { useState, useEffect } from 'react';
import Character from '../components/Character';

// This line exports a default react component named Characters. This component expects a prop named
// characters, which is an array of character objects.
export default function Characters({ characters }) {
    return (
        <div>
            <h1 className="wubba">Wubba Lubba Dub Dub!</h1>
            <p className="home-para">Thank you for visiting my project! This webpage pulls data from the Rick and Morty api
                and displays it. To view a character, click their name in the navigation bar.
            </p>
        </div>
    )
}
