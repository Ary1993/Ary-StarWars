import React, { useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const CharacterDetails = () => {
    const { store } = useContext(Context);
    const params = useParams();
    const index = parseInt(params.idContact, 10) - 1;
    const details = store.users && store.users[index];

    return (
        <div className="container my-3">
            {!details ? (
                <div className="spinner-border text-warning d-flex justify-content-center" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 justify-content-center d-flex">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${details.url.slice(-3, -1)}.jpg`} alt={details.name} />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 p-5">
                        <h1 className="text-center">{details.name}</h1>
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus corrupti dolore facilis quas tempora cupiditate accusantium nulla ratione repellendus, et blanditiis error! Aut quam eius provident velit deserunt inventore laborum.</p>
                    </div>

                    <div className="w-100"></div> {/* This div ensures that the following elements will start on a new 'row' */}

                    <div className="col text-center my-4">
                        <h4>Height</h4>
                        <p>{details.height}</p>
                    </div>

                    <div className="col text-center my-4">
                        <h4>Gender</h4>
                        <p>{details.gender}</p>
                    </div>

                    <div className="col text-center my-4">
                        <h4>Hair Color</h4>
                        <p>{details.hair_color}</p>
                    </div>

                    <div className="col text-center my-4">
                        <h4>Skin Color</h4>
                        <p>{details.skin_color}</p>
                    </div>

                    <div className="col text-center my-4">
                        <h4>Eye Color</h4>
                        <p>{details.eye_color}</p>
                    </div>

                    <div className="col text-center my-4">
                        <h4>Birth Year</h4>
                        <p>{details.birth_year}</p>
                    </div>

                    <div className="col text-center my-4">
                        <h4>Mass</h4>
                        <p>{details.mass} KG</p>
                    </div>
                </div>
            )}
        </div>
    );
};