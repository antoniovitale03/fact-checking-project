import {Box} from "@mui/material";

export default function Profile() {
    return(
        <Box>profilo utente in cui si mostrano le info dell'utente
        con
            sezione: "ultimi articoli analizzati" (lista di articleCard) -> carosello che riporta alla pagina completa
            sezione: "ultime ricerche tematiche fatte" (lista di topicCard) -> carosello che riporta alla pagina completa

            inoltre si mostra un grafico che mostra:
            media degli outrage score analizzati,
            argomenti più frequenti,
            trend personale nel tempo (quanto spesso l’utente analizza notizie polarizzanti).</Box>
    )
}