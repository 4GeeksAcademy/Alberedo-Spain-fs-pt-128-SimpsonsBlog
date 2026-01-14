import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

const CDN = "https://cdn.thesimpsonsapi.com/"


const Location_Card = ({ location }) => {

    const { store, dispatch } = useGlobalReducer()


    const isFavorite = store.fav_locations.some(
        fav => fav.id === location.id
    );

    const handleFav = () => {
        const isFav = !store.fav_locations.some((fav) => { return fav.id === location.id })

        dispatch({ type: isFav ? 'addLocationFav' : 'deleteLocationFav', payload: location })
    }
    return (
        <div className="card col-11 col-md-4 col-lg-3 m-2 rounded-4">
            <div >
                <img className="mb-0 img-fluid rounded-4 pb-0 card-img-resize" src={`${CDN}500${location.image_path}`} />
            </div>
            <div className="card-body">
                <div style={{ height: "70px" }}>
                    <h4 className="overflow-hidden ">{location.name} </h4>
                </div>
                <div className="d-flex justify-content-between mt-3">
                    <Link to={`/location/${location.id}`}>
                    <button className="btn btn-primary" type="button">See more</button>
                    </Link>
                    <button className="btn btn-warning" onClick={handleFav} type="button">{isFavorite ? <i className="fa-solid fa-heart text-danger"></i> : <i className="fa-regular fa-heart"></i>}</button>
                </div>
            </div>
        </div>
    )
}
export default Location_Card
