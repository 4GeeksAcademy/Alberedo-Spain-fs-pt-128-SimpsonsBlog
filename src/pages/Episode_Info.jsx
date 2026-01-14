import React, { useEffect, useState } from "react";
import { CDN } from "../components/Character_Card";
import { useParams } from "react-router-dom";
import { getEpisodeInfo } from "../Services/APIServices";

const Episode_Info = () => {
    const { id } = useParams()
    const [data, setData] = useState(null)


    useEffect(() => {
        const getData = async () => {
            const results = await getEpisodeInfo(id)
            setData(results)

        }
        getData()
    }, [id])

    if (!data) return <div>Loading...</div>;

    return (

        <>
            <div className="row container mx-auto m-5">
                <div className="col-6">
                    <img className="object-fit-contain w-100" src={`${CDN}500${data.image_path}`} />
                </div>
                <div className="col-6 text-center">
                    <div><h2>{data.name}</h2></div>
                    <div><p>{data.description}</p></div>
                </div>
                <div className="separator" />
                <div className="row mt-3 justify-content-around">
                    {data.airdate && <div className="col-2 text-center"><h5>Airdate</h5>{data && data.airdate}</div>}
                    {data.season &&<div className="col-2 text-center"><h5>Season</h5>{data && data.season}</div>}
                    {data.episode_number &&<div className="col-2 text-center"><h5>Episode number</h5>{data && data.episode_number}</div>}
                    {data.synopsis &&<div className="col-6 text-center"><h5>Synopsis</h5>{data && data.synopsis}</div>}
                </div>
            </div>
        </>
    )
}

export default Episode_Info