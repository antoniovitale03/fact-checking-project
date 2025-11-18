import SearchBar from "../Header/SearchBar";
import {useDocumentTitle} from "../../hooks/useDocumentTitle";
import {Box, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import api from "../../api.js"
import Carosello from "../Carosello";
import HowItWorksSection from "./HowItWorksSection";
import Why from "./Why";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

export default function Home(){
    useDocumentTitle("Home");

    const [query, setQuery] = useState("");

    useEffect(() =>{
        api.get(`${process.env.REACT_APP_SERVER}/api/auth/login`).then(res => console.log(res)).catch(err => console.log(err));
        }, []
    )

    return(
        <Box>
            Titolo
            slogan

            <HowItWorksSection />

            <Why />

            <Typography component="p">
                <Link to="/registration" style={{ color: 'black' }}>Crea un account</Link> per salvare le tue analisi e confrontare notizie nel tempo.” - UTENTE NON LOGGATO
            </Typography>

            <SearchBar />

            se l'utente è loggato mostro
            news generali sulla piattaforma, in base alle ricerche fatte dall'utente e dalle tematiche ricercate

            <Carosello title="Ultimi articoli analizzati" />
            <Carosello title="Ultime ricerche tematiche fatte" />

            <Carosello title="Articoli preferiti" />
            <Carosello title="Topic preferiti" />

            <Carosello title="Suggerimenti di lettura" />
            Componente “Suggerimenti di lettura”: articoli correlati a quelli salvati o ricerche simili.

        </Box>
    )
}