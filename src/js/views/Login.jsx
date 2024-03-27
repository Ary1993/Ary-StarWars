import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";

export const Login = () => {

    const { store, actions} = useContext(Context)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkMe, setCheckMe] = useState(false);
    const [select, setSelect] = useState();
    const [viewPassword, setViewPassword] = useState(false);

    const navigate = useNavigate()

    function handleEmail(event) { setEmail(event.target.value)};
    const handlePassword = (event) => { setPassword(event.target.value)};
    const handleSelect = (event) => { setSelect(event.target.value)};
    const handleCheckMe = event => { setCheckMe(event.target.checked)};
    const handleViewPassword= () => { setViewPassword(!viewPassword)};

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event)
        console.log(email,password, select, checkMe);

        setEmail("");
        setPassword("");
        setSelect("1");
        setCheckMe(false);
        actions.login();

        navigate("/")
    }

    const handleReset = () => {
        setEmail("");
        setPassword("");
        setSelect("1");
        setCheckMe(false);
    }

    return(
        <div className="container col-6">
            <h1 className="text-primary">Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail" className="form-label">Email adress</label>
                    <input type="email" className="form-control" id ="exampleInputEmail" aria-describedby="" />
                </div>
            </form>
        </div>
    )


} 