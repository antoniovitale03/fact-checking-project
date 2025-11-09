import {useSearchParams} from "react-router-dom";
import {Box} from "@mui/material";
import TopicOverview from "./TopicOverview";
import SourcesComparison from "./SourcesComparison";
import ArticlesList from "./ArticlesList";
import LanguageAnalysis from "./LanguageAnalysis";

export default function KeywordsResults() {
    const keywords = useSearchParams()[0].get("keywords"); //usato per le query, useParams vale per i parametri tipo /:id

    return(
        <Box>
            {keywords}
            Se l'utente inserisce una parola chiave, allora il backend recupera articoli da varie fonti
            (nazionali e internazionali) e ne analizza ognuno (tono emotivo, polarizzazione, parole chiave usate, ecc.)
            e genera un resoconto e una comparazione tra le varie fonti.
            Struttura:
            <TopicOverview />
            <SourcesComparison />
            <LanguageAnalysis />
            <ArticlesList />
            possibilità di salvare l'analisi alla cronologia delle ricerche tematiche fatte (per parole chiave)
            e di salvarla in una lista personalizzata o nei preferiti
        </Box>
    )
}