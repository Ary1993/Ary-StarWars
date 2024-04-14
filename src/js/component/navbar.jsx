import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js"
import { BtnFavorites } from "./BTNFavorites.jsx";

export const Navbar = () => {
	const { store, actions } = useContext(Context)

	return (
		<nav className="navbar navbar-light bg-light p-4">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">StarWars</span>
			</Link>
			<div className="ml-auto">
				<Link to="/contacts">
					<button className="btn btn-primary me-3">Characters</button>
				</Link>
				<Link to="/planets">
					<button className="btn btn-primary me-3">Planets</button>
				</Link>
				<Link to="/vehicles">
					<button className="btn btn-primary me-3">Vehicles</button>
				</Link>
			</div>
			<BtnFavorites />
		</nav>
	);
};
