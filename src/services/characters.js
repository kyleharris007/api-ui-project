import apiConnection from "./apiConnection";

// This code exports a function named getCharacters which is designed to make an asynchronous HTTP
// request to the Rick and Morty API to retrieve a list of characters.
export const getCharacters = async () => {
    try {
        // This line creates a variable response that makes a GET request to the /character endpoint.
        const response = await apiConnection.get("/character");
        // This line returns the response of the GET request with the character data.
        return response.data.results;
    // Notifies if the request fails/no data is retrieved from the api endpoint.
    } catch (error) {
        console.log(error);
    }
}

// This code exports a function named getCharacter which is designed to make an asynchronous HTTP
// request to the Rick and Morty API to retrieve a single character based on the provided id.
export const getCharacter = async (id) => {
    try {
        // This line creates a variable response that makes a GET request to the /character endpoint
        // with the provided id.
        const response = await apiConnection.get(`/character/${id}`);
        // This line returns the response of the GET request with the character data for a specific id.
        return response.data;
    // Notifies if the request fails/no data is retrieved from the api endpoint.
    } catch (error) {
        console.log(error);
    }
}
