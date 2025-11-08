import {useSearchParams} from "react-router-dom";

export default function LinkResults() {
        const link = useSearchParams()[0].get("link");
    return (

        <p>{link}componente che mostra i risultati della ricerca fatta dall'utente, nel caso inserisca direttamente
            il link della notizia, quindi l'app analizza nello specifico la notizia
            Struttura:

            Titolo della notizia
            Fonte e logo della testata
            Data di pubblicazione
            Link all’articolo originale
            Pulsante “Condividi analisi”

            1) Summary
            2) LanguageAnalysis
            3) SourcesComparison
            4) General Valutation
            possibilità di salvare tutti i risultati ottenuti, per poter aggiungere tutta l'analisi fatta
            alla cronologia degli articoli analizzati (visualizzabile nella home)
        </p>
    )
}