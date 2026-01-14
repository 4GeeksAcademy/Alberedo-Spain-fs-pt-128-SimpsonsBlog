import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import Dropdown_Card from "./Dropdown_Card";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer()
	let favs = store.fav_characters.length + store.fav_episodes.length + store.fav_locations.length

	return (
		<nav className="navbar navbar-black bg-dark">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><img src="https://upload.wikimedia.org/wikipedia/commons/9/98/The_Simpsons_yellow_logo.svg" style={{ width: "100px" }} /></span>
				</Link>
				<div className={favs != 0 ? "ml-auto" : "d-none"}>
					<div className="btn-group" style={{ width: "300px" }}>
						<button type="button" className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
							<i className="fa-solid fa-heart text-danger me-2 fs-4 my-auto">{" " + favs}</i>
						</button>
						<ul className="dropdown-menu dropdown-menu-end">
							{store.fav_characters.length > 0 && <li><h5>Characters</h5></li>}
							{store.fav_characters.map((character) => {
								return (
									<Dropdown_Card id={`C${character.id}`} object={character} />)
							})}
							{store.fav_episodes.length > 0 && <li><h5>Episodes</h5></li>}
							{store.fav_episodes.map((episode) => {
								return (
									<Dropdown_Card id={`E${episode.id}`} object={episode} />)
							})}
							{store.fav_locations.length > 0 && <li><h5>Locations</h5></li>}
							{store.fav_locations.map((location) => {
								return (
									<Dropdown_Card id={`L${location.id}`} object={location} />)
							})}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};