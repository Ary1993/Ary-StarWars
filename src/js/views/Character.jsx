import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


export const Character = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()

    const viewTask = (index) => {
        console.log('Navigating to index:', index);
        navigate("/contacts/" + (index + 1))
    }

    const favoriteTask = (character) => {
        if (!store.favorites.includes(character.name)) {
            actions.addFavorites(character.name);
        } else {
            actions.removeFavorites(character.name, store.favorites);
        }
    }

    return (
        <div className="container">
            <h1 className="mb-4">Character List</h1>
            <div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-2">
                {!store.users ? <h2>Loading...</h2> :
                    store.users.map((character, index) => (
                        <div key={character.id} className="col">
                            <div className="card border-dark my-3 mx-2 text-bg-dark">
                                <img src={`https://starwars-visualguide.com/assets/img/characters/${character.url.slice(-3, -1)}.jpg`} className="card-img-top" alt={character.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{character.name}</h5>
                                    <p className='card-text'>
                                        Gender: {character.name}
                                        <br />
                                        Hair: {character.hair_color}
                                        <br />
                                        Eye Color: {character.eye_color}
                                        <br />
                                    </p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span onClick={() => { viewTask(index) }} className="mx-2">
                                        <i className="fas fa-eye"></i>
                                    </span>
                                    <span onClick={() => favoriteTask(character)} className="btn btn-outline-warning">
                                        {store.favorites.includes(character.name) ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i>}
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