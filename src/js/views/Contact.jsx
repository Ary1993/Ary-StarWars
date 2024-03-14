import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

export const Contact = () => {
    const { store, actions } = useContext(Context);
    console.log(store.users)
    return (
        <div className="container text-center">
            <h1 className="text-sucess">Contactos</h1>
            <h2 className="text-primary">{store.mensaje}</h2>
            <ul className="list-group">
                {store.users.map((item) => <li class="list-group-item">{item.name}</li>)}
            </ul>
        </div>
    )
}