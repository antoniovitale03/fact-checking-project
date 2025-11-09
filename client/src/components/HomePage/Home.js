import SearchBar from "../Header/SearchBar";
import {useDocumentTitle} from "../../hooks/useDocumentTitle";
import {Box} from "@mui/material";

export default function Home(){
    useDocumentTitle("Home");
    return(
        <Box>
            Titolo + slogan

            campo di ricerca “Inserisci un link o una parola chiave…”

            sezione "come funziona" (HowItWorks) - UTENTE NON LOGGATO

            sezione "perchè usare la piattaforma" (Why) -UTENTE NON LOGGATO

            “Crea un account gratuito per salvare le tue analisi e confrontare notizie nel tempo.” - UTENTE NON LOGGATO
            <SearchBar />

            se l'utente è loggato mostro
            sezione: "ultimi articoli analizzati" (lista di articleCard)
            sezione: "ultime ricerche tematiche fatte" (lista di topicCard)

            sezione: "articoli preferiti"
            sezione "topic preferiti"

        </Box>
    )
}