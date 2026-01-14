

export const BASE_API = "https://thesimpsonsapi.com/api"

export const getCharacters = async (dispatch) => {
    const response = await fetch(`${BASE_API}/characters`)
    const data = await response.json()
    dispatch({ type: "set_characters", payload: data.results })
}

export const getEpisodes = async (dispatch) => {
    const response = await fetch(`${BASE_API}/episodes`)
    const data = await response.json()
    console.log(data);

    dispatch({ type: "set_episodes", payload: data.results })
}

export const getLocations = async (dispatch) => {
    const response = await fetch(`${BASE_API}/locations`)
    const data = await response.json()
    console.log(data);

    dispatch({ type: "set_locations", payload: data.results })
}

export const getCharacterInfo = async (id) => {
    const response = await fetch(`${BASE_API}/characters/${id}`)
    const data = await response.json()
    console.log(data)
    return data
}

export const getLocationInfo = async (id) => {
    const response = await fetch(`${BASE_API}/locations/${id}`)
    const data = await response.json()
    console.log(data)
    return data
}

export const getEpisodeInfo = async (id) => {
    const response = await fetch(`${BASE_API}/episodes/${id}`)
    const data = await response.json()
    console.log(data)
    return data
}