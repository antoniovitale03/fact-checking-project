import {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import api from "../api";

const authContext = createContext(null);

export function AuthProvider({children}){
    const navigate = useNavigate();

    //calcolo ad ogni render la variabile user a partire dal localStorage, convertendo l'oggetto JSON in JS
    const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")));

    const logout = async () => {
        await api.get(`${process.env.REACT_APP_SERVER}/api/auth/logout`);
        setUser(null);
        navigate("/");
    };

    // Ogni volta che viene modificato user (es. dopo il login o logout), aggiorno anche localStorage
    useEffect(() => {
        if (user) localStorage.setItem("user", JSON.stringify(user)); //trasformo l'oggetto JS in un JSON per ptoerlo salvare nel localStorage
        else localStorage.removeItem("user");
    }, [user]);


    return <authContext.Provider value={{user, setUser, logout, isLoggedIn: Boolean(user)}}>
        {children}
    </authContext.Provider>; // children è la componente App
}