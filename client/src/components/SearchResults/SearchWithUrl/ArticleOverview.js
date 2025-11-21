import {Box} from "@mui/material";
import {Link} from "react-router-dom";

export default function ArticleOverview({link}){
    return(
        <Box>
            <h1>Article Overview</h1>
            <p>Titolo della notizia</p>
            <p>autore dell'articolo</p>
            <p>Data di pubblicazione</p>
            <h3>Analisi della testata giornalistica</h3>
            <p>valutazione dell'affidabilità (scala da 1 a 10) basata su: orientamento politico noto, trasparenza editoriale, ...</p>
            <p>classificazione della testata: mainstream, indipendente, blog personale, tabloid, satira, propaganda</p>
            <p>Logo e nome della testata</p>
            <p>Classificazione della testata</p>
            <p>asse politico (destra/sinistra, ...)</p>
            <p>asse giornalistico (mainstream - indipendente - blog)</p>
            <Link to={link} style={{ color: 'black' }} target="_blank" rel="noreferrer">Visualizza l'articolo originale</Link>
            <p>Riassunto NEUTRO dell'articolo (senza bias e manipolazioni)</p>
            <p>Temi principali dell'articolo (es. “politica”, “società”, “ambiente”)</p>
            <p>Temi secondari (se ci sono)</p>

            <h3>Analisi dell'autore</h3>
            <p>analizzo la trasparenza dell'autore, controllo il tono emotivo medio dei suoi articoli,
            eventuali bias più ricorrenti, correlazioni politiche (se scrive sempre contro lo stesso soggetto),
            </p>


        </Box>
    )
}