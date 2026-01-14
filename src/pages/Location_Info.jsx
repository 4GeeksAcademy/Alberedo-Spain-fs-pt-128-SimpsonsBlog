import React, { useEffect, useState } from "react";
import { CDN } from "../components/Character_Card";
import { Link, useParams } from "react-router-dom";
import { getLocationInfo } from "../Services/APIServices";

const Location_Info = () => {
    const { id } = useParams()
    const [data, setData] = useState(null)


    useEffect(() => {
        const getData = async () => {
            const results = await getLocationInfo(id)
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
                    {data.town && <div className="col-4 text-center"><h3>Town</h3>{data && data.town}</div>}
                    {data.use && <div className="col-4 text-center"><h3>Use</h3>{data && data.use}</div>}
                    {data.first_appearance_ep && <div className="col-4 text-center">
                        <Link to={`/episodes/${data.first_appearance_ep.id}`}>
                            <h3>First Appearance</h3>Ep{data && data.first_appearance_ep.episode_number} Season {data && data.first_appearance_ep.season}<br />{data.first_appearance_ep.name}
                        </Link>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default Location_Info