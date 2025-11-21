import SearchBar from "../Header/SearchBar";
import {useDocumentTitle} from "../../hooks/useDocumentTitle";
import {Box, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import api from "../../api.js"
import Carosello from "../Carosello";
import HowItWorksSection from "./HowItWorksSection";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import Trend from "./Trend";

export default function Home(){
    useDocumentTitle("Home");

    useEffect(() =>{
        api.get(`${process.env.REACT_APP_SERVER}/api/auth/login`).then(res => console.log(res)).catch(err => console.log(err));
        }, []
    )

    return(
        <Box>
            <p>Titolo</p>
            <p>slogan</p>
            <p>frase ad effetto sopra la barra di ricerca tipo “Verifica la credibilità delle notizie in un click”</p>
            <SearchBar />

            <HowItWorksSection />

            <Trend />

            <Typography component="p">
                <Link to="/registration" style={{ color: 'black' }}>Crea un account</Link> per salvare le tue analisi e confrontare notizie nel tempo.” - UTENTE NON LOGGATO
            </Typography>

            <Carosello title="Ultimi articoli analizzati" />
            <Carosello title="Ultime ricerche tematiche fatte" />

            <Carosello title="Articoli preferiti" />
            <Carosello title="Topic preferiti" />

            <Carosello title="Suggerimenti di lettura" />
            <p> articoli e topic correlati a quelli salvati, più neutrali che permettano di contrastare la polarizzazione</p>

        </Box>
    )
}