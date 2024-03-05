import Reac, { useContext }  from "react";
import { Context } from "../store/appContext.js";

export const Contact = () =>{
    const {store, actions} = useContext(Context);
    console.log(store.mensaje)
    return(
        <div className="container text-center">
            <h1 className="text-sucess">Contactos</h1>
        </div>
    )
}