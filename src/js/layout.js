import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home.jsx";

import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";
import { Character } from "./views/Character.jsx";
import { CharacterDetails } from "./views/CharacterDetails.jsx";


import { Demo } from "./views/demo.js";
import { Planet } from "./views/Planet.jsx";
import { PlanetDetails } from "./views/PlanetDetails.jsx";
import { Vehicles } from "./views/Vehicles.jsx";
import { VehiclesDetails } from "./views/VehiclesDetails.jsx";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	//<Route path="/contacts-edit" element={<ContactEdit/>}/>
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/contacts" element={<Character/>}/>
						<Route path="/planets" element={<Planet/>}/>
						<Route path="/vehicles" element={<Vehicles/>}/>	
						<Route path="/contacts/:idContact" element={<CharacterDetails/>}/>	
						<Route path="/planets/:idPlanet" element={<PlanetDetails/>}/>	
						<Route path="/vehicles/:idVehicles" element={<VehiclesDetails/>}/>
						<Route path="/demo" element={<Demo/>} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
