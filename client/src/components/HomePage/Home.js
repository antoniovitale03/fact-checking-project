import SearchBar from "../Header/SearchBar";
import {useDocumentTitle} from "../../hooks/useDocumentTitle";
import {Box} from "@mui/material";
import {useEffect} from "react";
import api from "../../api.js"

export default function Home(){
    useDocumentTitle("Home");

    useEffect(() =>{
        api.get(`http://localhost:8000/api/auth/login`).then(res => console.log(res)).catch(err => console.log(err));
        }, []
    )

    return(
        <Box>
            Titolo + slogan

            campo di ricerca “Inserisci un link o una parola chiave…”

            sezione "come funziona" (HowItWorks) - UTENTE NON LOGGATO

            sezione "perchè usare la piattaforma" (Why) -UTENTE NON LOGGATO

            “Crea un account gratuito per salvare le tue analisi e confrontare notizie nel tempo.” - UTENTE NON LOGGATO
            <SearchBar />

            se l'utente è loggato mostro
            news generali sulla piattaforma, in base alle ricerche fatte dall'utente e dalle tematiche ricercate
            sezione: "ultimi articoli analizzati" (lista di articleCard)
            sezione: "ultime ricerche tematiche fatte" (lista di topicCard)

            sezione: "articoli preferiti"
            sezione "topic preferiti"

            Componente “Suggerimenti di lettura”: articoli correlati a quelli salvati o ricerche simili.

        </Box>
    )
}