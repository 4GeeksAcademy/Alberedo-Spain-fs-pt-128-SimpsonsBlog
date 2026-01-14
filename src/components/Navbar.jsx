import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-black bg-dark">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><img src="https://upload.wikimedia.org/wikipedia/commons/9/98/The_Simpsons_yellow_logo.svg" style={{ width: "100px" }} /></span>
				</Link>
				<div className="ml-auto">
					<div className="btn-group">
						<button type="button" className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							<i className="fa-solid fa-heart text-danger me-2 fs-4 my-auto"></i>
						</button>
						<ul className="dropdown-menu dropdown-menu-end">
							<li><a className="dropdown-item" href="#">Action</a></li>
							<li><a className="dropdown-item" href="#">Another action</a></li>
							<li><a className="dropdown-item" href="#">Something else here</a></li>
							<li><a className="dropdown-item" href="#">Separated link</a></li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};