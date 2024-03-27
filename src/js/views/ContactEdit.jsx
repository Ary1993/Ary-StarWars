import React, { useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const ContactEdit = () => {
    const { store, actions } = useContext(Context)
    const details = store.currentUser;
    console.log(details)
    return (
        <div className="container">
            <h1 className="text-center">Edit</h1>
            {!details ? "Sin Datos para mostrar" :
                <div>
                    <p>{details.name}</p>
                    <p>{details.phone}</p>
                    <p>{details.email}</p>
                    <p>{details.company.name}</p>
                    <p>{details.address.street} {details.address.suite}</p>
                    <p>{details.name}</p>
                </div>
            }

        </div>
    )
}