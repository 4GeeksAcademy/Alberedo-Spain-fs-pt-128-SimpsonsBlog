

export const BASE_API = "https://thesimpsonsapi.com/api"

export const getCharacters = async (dispatch)=>{
    const response = await fetch(`${BASE_API}/characters`)
    const data = await response.json()
    const characters = data.results
    console.log(data);
    dispatch({type:"set_characters", payload:data.results})
}