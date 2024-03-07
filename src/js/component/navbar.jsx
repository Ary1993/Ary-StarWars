import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext.js"

export const Navbar = () => {
	const {store,actions}= useContext(Context)

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">{store.mensaje}</span>
			</Link>
			<div className="ml-auto">
				<Link to="/contacts">
					<button className="btn btn-primary">Contacts</button>
				</Link>
			</div>
		</nav>
	);
};
