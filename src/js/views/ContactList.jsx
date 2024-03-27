import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const ContactList = () => {
    const { store, actions } = useContext(Context);
    //26 37.33
    return (
        <div className="container">
            <h1>Contact List</h1>
            {!store.contacts ? <h2>Cargando...</h2> :
                store.contacts.map((item) =>
                    <div key={item.id}>
                        <p>{item.full_name}</p>
                        <p>{item.email}</p>
                        <p>{item.address}</p>
                        <hr />
                    </div>)
            }
        </div>
    )
}