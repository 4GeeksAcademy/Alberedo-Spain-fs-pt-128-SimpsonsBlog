import React, { useState } from "react";

const CDN = "https://cdn.thesimpsonsapi.com/"


const Location_Card
 = ({ location }) => {

    const [isFavorite, setFavorite] = useState(false)

    return (
        <div className="card col-11 col-md-4 col-lg-3 m-2 rounded-4">
            <div >
                <img className="mb-0 img-fluid rounded-4 pb-0 card-img-resize" src={`${CDN}500${location.image_path}`} />
            </div>
            <div className="card-body">
                <div style={{ height: "60px" }}>
                    <h4 className="overflow-hidden lh-1">{location.name} </h4>
                </div>
                <div className="d-flex justify-content-between mt-3">
                    <button className="btn btn-primary" type="button">See more</button>
                    <button className="btn btn-warning" onClick={() => setFavorite(!isFavorite)} type="button">{isFavorite ? <i className="fa-solid fa-heart text-danger"></i> : <i className="fa-regular fa-heart"></i>}</button>
                </div>
            </div>
        </div>
    )
}
export default Location_Card
