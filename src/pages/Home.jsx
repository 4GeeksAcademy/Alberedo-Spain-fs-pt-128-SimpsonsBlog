import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getCharacters, getEpisodes, getLocations } from "../Services/APIServices.js";
import Character_Card from "../components/Character_Card.jsx";
import Episode_Card from "../components/Episode_Card.jsx";
import Location_Card from "../components/Location_Card.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const [firstItem, setFirstItem] = useState(true)

	useEffect(() => {
		getCharacters(dispatch)
		getLocations(dispatch)
		getEpisodes(dispatch)

	}, [])
	return (
		<div className="bg pt-4">
			<div className="overflow-hidden px-5 container">
				<h1>Characters</h1>
				<div className="d-flex overflow-auto mb-5 scrollable">
					{store.characters && store.characters.map((character) => {
						return (

							<Character_Card key={character.id} character={character} />

						)
					})}
				</div>
				<h1>Episodes</h1>
				<div className="d-flex overflow-auto mb-5 scrollable">
					{store.episodes && store.episodes.map((episode) => {
						return (

							<Episode_Card key={episode.id} episode={episode} />

						)
					})}
				</div>
				<h1>Locations</h1>
				<div className="d-flex overflow-auto mb-5 scrollable">
					{store.locations && store.locations.map((location) => {
						return (

							<Location_Card key={location.id} location={location} />

						)
					})}
				</div>
			</div>
		</div>
	);
}; 