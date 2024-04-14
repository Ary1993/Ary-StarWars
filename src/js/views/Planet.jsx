import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


export const Planet = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()

    const viewTask = (index) => {
        console.log('Navigating to index:', index);
        navigate("/planets/" + (index + 1))
    }

    const favoriteTask = (planet) => {
        if (!store.favorites.includes(planet.name)) {
            actions.addFavorites(planet.name);
        } else {
            actions.removeFavorites(planet.name, store.favorites);
        }
    }

    return (
        <div className="container">
            <h1 className="mb-4">planet List</h1>
            <div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-2">
                {!store.planets ? <h2>Loading...</h2> :
                    store.planets.map((planet, index) => (
                        <div key={planet.id} className="col">
                            <div className="card border-dark my-3 mx-2 text-bg-dark">
                                <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.url.slice(-3, -1)}.jpg`} className="card-img-top" alt={planet.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{planet.name}</h5>
                                    <p className='card-text'>
                                        Gender: {planet.name}
                                        <br />
                                        Climate: {planet.climate}
                                        <br />
                                        Gravity: {planet.gravity}
                                        <br />
                                    </p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span onClick={() => { viewTask(index) }} className="mx-2">
                                        <i className="fas fa-eye"></i>
                                    </span>
                                    <span onClick={() => favoriteTask(planet)} className="btn btn-outline-warning">
                                        {store.favorites.includes(planet.name) ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}