import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


export const Vehicles = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()

    const viewTask = (index) => {
        console.log('Navigating to index:', index);
        navigate("/vehicles/" + (index + 1))
    }

    const favoriteTask = (vehicles) => {
        if (!store.favorites.includes(vehicles.name)) {
            actions.addFavorites(vehicles.name);
        } else {
            actions.removeFavorites(vehicles.name, store.favorites);
        }
    }

    return (
        <div className="container">
            <h1 className="mb-4">Vehicles List</h1>
            <div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-2">
                {!store.vehicles ? <h2>Loading...</h2> :
                    store.vehicles.map((vehicle, index) => (
                        <div key={vehicle.id} className="col">
                            <div className="card border-dark my-3 mx-2 text-bg-dark">
                                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.url.slice(-3, -1)}.jpg`} className="card-img-top" alt={vehicle.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{vehicle.name}</h5>
                                    <p className='card-text'>
                                        Cargo Capacity: {vehicle.cargo_capacity}
                                        <br />
                                        Passengers: {vehicle.passengers}
                                        <br />
                                        Manufacturer: {vehicle.manufacturer}
                                        <br />
                                    </p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span onClick={() => { viewTask(index) }} className="mx-2">
                                        <i className="fas fa-eye"></i>
                                    </span>
                                    <span onClick={() => favoriteTask(vehicle)} className="btn btn-outline-warning">
                                        {store.favorites.includes(vehicle.name) ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}
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