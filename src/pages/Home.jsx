import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getCharacters } from "../Services/APIServices.js";
import Character_Card from "../components/Character_Card.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		getCharacters(dispatch)
		console.log(store);
		
	}, [])
	return (
		<div>
			<div>
				<div id="carouselExample" className="carousel slide">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<div className="d-flex">
								{store.characters && <Character_Card character = {store.characters[0]} />}
								{store.characters && <Character_Card character = {store.characters[1]} />}
								{store.characters && <Character_Card character = {store.characters[2]} />}
							</div>
						</div>
						<div className="carousel-item">
							<img src="https://cdn.thesimpsonsapi.com/200/character/1.webp" className="d-block w-25" alt="..." />
						</div>
						<div className="carousel-item">
							<img src="https://cdn.thesimpsonsapi.com/200/character/1.webp" className="d-block w-25" alt="..." />
						</div>
					</div>
					<button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>
		</div>
	);
}; 