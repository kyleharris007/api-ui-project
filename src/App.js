import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navbar';
import Characters from './screens/Characters';
import CharacterInfo from './screens/CharacterInfo';
import { useState, useEffect } from 'react';
import { getCharacters } from './services/characters';

// This function App uses React Router to nav between different pages/routes. It fetches a list of
// characters from the api using the getCharacters function from the characters.js file, displays a
// nav bar, and renders the Characters and CharacterInfo components.
function App() {
  // Initializes a state variable characters using useState hook. The initial state is an empty array.
  // The setCharacters function is used to update the characters state variable.
  const [characters, setCharacters] = useState([]);

  // This useEffect hook is set up to execute once the component mounts. It calls the fetchCharacters
  // function to retrieve the list of characters from the api.
  useEffect(() => {
    fetchCharacters();
  }, []);

  // This function fetchCharacters is an asynchronous function that uses the getCharacters function
  // to fetch character data. It then sets the characters state variable to the first 20 characters.
  async function fetchCharacters() {
    const charactersdata = await getCharacters();
    charactersdata.length = 20
    setCharacters(charactersdata);
  }

  return (
    <div className="App">
      <Navigation characters={characters} />
      <Routes>
        {/* This route component defines a route for the root url that renders the Characters component,
        passing the characters state as a prop. */}
        <Route path="/" element={<Characters characters={characters} />} />
        {/* This route component defines a route for the /character/:id url that renders the
        CharacterInfo component. */}
        <Route path="/character/:id" element={<CharacterInfo />} />
      </Routes>
    </div>
  )
}

export default App;