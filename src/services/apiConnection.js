import axios from 'axios';

// Sets the variable apiURL that stores the api URL.
let apiURL = "https://rickandmortyapi.com/api"

// This section uses the Axios library to create an instance of an HTTP client named apiConnection.
// The axios.create() function is used to configure and create a customized instance of Axios. In
// this case, the baseURL property is set to the apiURL that was defined earlier. This means that any
// HTTP requests made using this apiConnection instance will have the base URL automatically prepended
// to their paths.
const apiConnection = axios.create({
    baseURL: apiURL
})

// Exports the apiConnection variable so that it can be imported and used in other files.
export default apiConnection;