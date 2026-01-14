import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

const CDN = "https://cdn.thesimpsonsapi.com/"


const Episode_Card = ({ episode }) => {

    const { store, dispatch } = useGlobalReducer()
    const isFavorite = store.fav_episodes.some(
        fav => fav.id === episode.id
    );

    const handleFav = () => {
        const isFav = !store.fav_episodes.some((fav) => { return fav.id === episode.id })

        dispatch({ type: isFav ? 'addEpisodeFav' : 'deleteEpisodeFav', payload: episode })
    }

    return (
        <div className="card col-11 col-md-4 col-lg-3 m-2 rounded-4">
            <div className="object-fit-size">
                <img className="mb-0 img-fluid p-0 rounded-4 pb-0 " src={`${CDN}500${episode.image_path}`} />
            </div>
            <div className="card-body">
                <div style={{ height: "60px" }}>
                    <h5 className="overflow-hidden lh-1">{episode.episode_number} - {episode.name} </h5>
                </div>
                <div style={{ height: "30px" }}>
                    <h5 className="my-1 text-center">{episode.airdate} </h5>
                </div>
                <div>
                    <div className="col-8 px-3 py-1 mx-auto mb-2 text-center">Season {episode.season} </div>
                </div>
                <div className="d-flex justify-content-between mt-3">
                   <Link to={`/episodes/${episode.id}`}>
                    <button className="btn btn-primary" type="button">See more</button>
                    </Link> 
                    <button className="btn btn-warning" onClick={handleFav} type="button">{isFavorite ? <i className="fa-solid fa-heart text-danger"></i> : <i className="fa-regular fa-heart"></i>}</button>
                </div>
            </div>
        </div>
    )
}
export default Episode_Card