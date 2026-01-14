import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

const Dropdown_Card = ({ id, object }) => {
    const { store, dispatch } = useGlobalReducer()

    console.log(object);

    const handleDeletion = () => {
        if (id[0] === "C") {
            dispatch({ type: 'deleteCharacterFav', payload: object })
        } else if (id[0] === "E") {
            dispatch({ type: 'deleteEpisodeFav', payload: object })
        } else if (id[0] === "L") {
            dispatch({ type: 'deleteLocationFav', payload: object })
        }
    }

    return (<>
        <li key={id}>
            <div>
                <p>{object.name}
                    <button className="ms-2 rounded-circle bg-danger" onClick={handleDeletion}><i className="fa-solid fa-trash-can"></i></button></p>
            </div>
        </li>
    </>)
}

export default Dropdown_Card