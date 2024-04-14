import React, { useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const VehiclesDetails = () => {
    const { store } = useContext(Context);
    const params = useParams();
    const index = parseInt(params.idVehicles, 10) - 1;
    const details = store.vehicles && store.vehicles[index];

    return (
        <div className="container my-3">
            {!details ? (
                <div className="spinner-border text-warning d-flex justify-content-center" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 justify-content-center d-flex">
                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${details.url.slice(-3, -1)}.jpg`} alt={details.name} />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 p-5">
                        <h1 className="text-center">{details.name}</h1>
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus corrupti dolore facilis quas tempora cupiditate accusantium nulla ratione repellendus, et blanditiis error! Aut quam eius provident velit deserunt inventore laborum.</p>
                    </div>

                    <div className="w-100"></div> {/* This div ensures that the following elements will start on a new 'row' */}

                    <div className="col text-center my-4">
                        <h4>Cargo capacity</h4>
                        <p>{details.cargo_capacity}</p>
                    </div>

                    <div className="col text-center my-4">
                        <h4>Manufacturer</h4>
                        <p>{details.manufacturer}</p>
                    </div>

                    <div className="col text-center my-4">
                        <h4>Created</h4>
                        <p>{details.created}</p>
                    </div>

                    <div className="col text-center my-4">
                        <h4>Passengers</h4>
                        <p>{details.passengers}</p>
                    </div>

                    <div className="col text-center my-4">
                        <h4>Vehicle class</h4>
                        <p>{details.vehicle_class}</p>
                    </div>

                </div>
            )}
        </div>
    );
};