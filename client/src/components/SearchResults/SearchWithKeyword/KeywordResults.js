import {useSearchParams} from "react-router-dom";

export default function KeywordResults() {
    const keywords = useSearchParams()[0].get("keywords"); //usato per le query, useParams vale per i parametri tipo /:id

    return(
        <p>
            {keywords}
            Se l'utente inserisce una parola chiave, allora il backend recupera articoli da varie fonti
            (nazionali e internazionali) e ne analizza ognuno (tono emotivo, polarizzazione, parole chiave usate, ecc.)
            e genera un resoconto e una comparazione tra le varie fonti.
            Struttura:
                Risultati per " ..... "
                Breve frase introduttiva con il numero di articoli trovati:
                “Sono stati analizzati 42 articoli da 18 fonti differenti (12 italiane, 6 internazionali).”
            1) Overview
            2) SourcesComparison
            3) LanguageAnalysis
            4) ArticlesList
            possibilità di salvare tutti i risultati per poterli aggiungere alla lista
            delle ricerche tematiche fatte (per parole chiave)
        </p>
    )
}