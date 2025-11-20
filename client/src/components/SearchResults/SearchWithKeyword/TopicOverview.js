import {Box} from "@mui/material";

export default function TopicOverview({keywords}){
    return(
        <Box>
            <h1>Overview del topic </h1>
            <p>Risultati per "{keywords}"</p>
            <p>Breve frase introduttiva con il numero di articoli trovati: </p>
            <p>“Sono stati analizzati 42 articoli da 18 fonti differenti (12 italiane, 6 internazionali).”</p>

        </Box>
    )
}