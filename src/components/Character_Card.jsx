import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";


 export const CDN = `${import.meta.env.VITE_CDN}`




const Character_Card = ({ character }) => {

    const { store, dispatch } = useGlobalReducer()
    const isFavorite = store.fav_characters.some(
        fav => fav.id === character.id
    );

    const handleFav = () => {
        const isFav = !store.fav_characters.some((fav) => { return fav.id === character.id })

        dispatch({ type: isFav ? 'addCharacterFav' : 'deleteCharacterFav', payload: character })
    }

    return (
        <div className="card col-11 col-md-4 col-lg-3 m-2 rounded-4">
            <div>
                <img className="mb-0 img-fluid p-2 pb-0" src={`${CDN}500${character.portrait_path}`} />
            </div>
            <div className="card-body">
                <div style={{ height: "50px" }}>
                    <h4 className="text-clamp-2">{character.name} </h4>
                </div>
                <div style={{ height: "60px" }}>
                    <h5 className="my-2 text-clamp-2">{character.occupation} </h5>
                </div>
                <div className={character.age ? "row justify-content-between" : "row justify-content-end"} >
                    {character.age && <div className="border border-2 rounded-pill col-10 col-md-8 px-3 py-1 mx-auto mb-2 text-center">{character.age} years old</div>}
                    <div className="border border-2 rounded-pill col-3 px-3 py-1 text-center mx-auto mb-2">{character.gender == "Male" ? <i className="fa-solid fa-mars male" ></i> : <i className="fa-solid fa-venus female"></i>}  </div>
                </div>
                <div className="d-flex justify-content-between mt-3">
                    <Link to={`/character/${character.id}`}>
                    <button className="btn btn-primary" type="button">See more</button>
                    </Link>
                    <button className="btn btn-warning" onClick={handleFav} type="button">{isFavorite ? <i className="fa-solid fa-heart text-danger"></i> : <i className="fa-regular fa-heart"></i>}</button>
                </div>
            </div>
        </div>
    )
}
export default Character_Card