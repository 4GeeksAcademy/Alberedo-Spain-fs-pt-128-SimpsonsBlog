import React, { useState } from "react";

const CDN = "https://cdn.thesimpsonsapi.com/"


const Character_Card = ({ character }) => {

const [isFavorite, setFavorite] = useState(true)

    return (
        <div className="card col-3">
            <div className="">
                <img className="object-fit-contain m-5 mb-0" src={`${CDN}500${character.portrait_path}`} style={{ width: "200px" }} />
            </div>
            <div className="card-body">
                <h3>{character.name} </h3>
                {character.age && <h4>{character.age} years old</h4>}
                <h4>Gender:  {character.gender == "Male" ? <i class="fa-solid fa-mars male" ></i> : <i class="fa-solid fa-venus female"></i>}  </h4>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-primary" type="button">See more</button>
                    <button className="btn btn-warning" onClick={()=> setFavorite(!isFavorite)} type="button">{isFavorite ? <i class="fa-solid fa-heart text-danger"></i> : <i class="fa-regular fa-heart"></i>}</button>
                </div>
            </div>
        </div>
    )
}
export default Character_Card