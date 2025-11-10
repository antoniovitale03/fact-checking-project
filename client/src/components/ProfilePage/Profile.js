import {Box} from "@mui/material";
import {useDocumentTitle} from "../../hooks/useDocumentTitle";
import PersonalStatistics from "./PersonalStatistics";

export default function Profile() {
    useDocumentTitle("Profile");
    return(
        <Box>
            profilo utente in cui si mostrano le info dell'utente con
            sezione: "ultimi articoli analizzati" (lista di articleCard) -> carosello che riporta alla pagina completa
            sezione: "ultime ricerche tematiche fatte" (lista di topicCard) -> carosello che riporta alla pagina completa

            sezione: "articoli preferiti" -> carosello con alcuni articoli che punta a FavoritesArticles
            sezione "tematiche preferite" -> carosello con alcune tematiche che punta a FavoritesTopics

            <PersonalStatistics />

            Componente “Consigli educativi”: messaggi dinamici basati sui dati dell’utente, es.
            “Hai analizzato molte notizie polarizzanti sull’argomento X:
            prova a leggere fonti più neutre per bilanciare la tua prospettiva.”

        </Box>
    )
}