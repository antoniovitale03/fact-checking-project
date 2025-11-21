import {Box, Button} from "@mui/material";
import {useDocumentTitle} from "../../hooks/useDocumentTitle";
import PersonalStatistics from "./PersonalStatistics";
import Report from "./Report";
import Carosello from "../Carosello";
import {useEffect} from "react";
import api from "../../api";
import {Link} from "react-router-dom";

export default function Profile() {
    useDocumentTitle("Profile");

    useEffect(() => {
        api.get(`${process.env.REACT_APP_SERVER}/api/user/profile`)
            .then(res => console.log(res)).catch(err => console.log(err));
    })

    return(
        <Box>
            <p>Avatar</p>
            <p>Nome completo</p>
            <p>Username</p>
            <p>Email</p>
            <Button component={Link} to="/modify-profile">Modifica il tuo profilo</Button>

            <PersonalStatistics />

            <Carosello title="Ultimi articoli analizzati" />
            <Carosello title="Ultime ricerche tematiche fatte" />

            <Carosello title="Articoli preferiti" />
            <Carosello title="Tematiche preferite" />

            <h1>Sezione le mie liste</h1>
            <p>carosello che mostra le ultime liste create</p>
            <p>ogni card mostra: </p>
            <p>Nome lista, Numero di elementi,Pulsante Apri lista</p>



            <Report />


        </Box>
    )
}