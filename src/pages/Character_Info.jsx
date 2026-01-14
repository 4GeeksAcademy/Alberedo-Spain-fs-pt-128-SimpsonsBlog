import React, { useEffect, useState } from "react";
import { CDN } from "../components/Character_Card";
import { Link, useParams } from "react-router-dom";
import { getCharacterInfo } from "../Services/APIServices";

const Character_Info = () => {
    const { id } = useParams()
    const [data, setData] = useState(null)


    useEffect(() => {
        const getData = async () => {
            const results = await getCharacterInfo(id)
            setData(results)

        }
        getData()
    }, [id])

    if (!data) return <div>Loading...</div>;

    return (

        <>
            <div className="row container mx-auto m-5">
                <div className="col-12 col-md-5">
                    <img className="object-fit-contain w-100" src={`${CDN}500${data.portrait_path}`} />
                </div>
                <div className="col-12 col-md-7 text-center">
                    <div><h2>{data.name}</h2></div>
                    <div><p>{data.description}</p></div>
                </div>
                <div className="separator" />
                <div className="row mt-3 justify-content-around">
                    {data.birthdate && <div className="col-md-2 col-10 text-center"><h5>Birthday</h5>{data && data.birthdate}</div>}
                    {data.gender && <div className="col-md-2 col-10 text-center"><h5>Gender</h5>{data && data.gender}</div>}
                    {data.occupation && <div className="col-md-2 col-10 text-center"><h5>Occupation</h5>{data && data.occupation}</div>}
                    {data.phrases && <div className="col-md-2 col-10 text-center"><h5>Random Phrase</h5>{data && data.phrases[Math.floor(Math.random() * data.phrases.length)]}</div>}
                    {data.status && <div className="col-md-2 col-10 text-center"><h5>Status</h5>{data && data.status}</div>}
                        <div className="col-md-2 col-10 text-center">
                    <Link to={`/episodes/${data.first_appearance_ep.id}`}>
                            <h5>First Appearance</h5>Ep{data && data.first_appearance_ep.episode_number} Season {data && data.first_appearance_ep.season}<br />{data.first_appearance_ep.name}
                    </Link>
                            </div>
                </div>
            </div>
        </>
    )
}

export default Character_Info