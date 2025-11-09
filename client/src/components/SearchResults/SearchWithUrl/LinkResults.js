import {useSearchParams} from "react-router-dom";
import ArticleOverview from "./ArticleOverview";
import LanguageAnalysis from "./LanguageAnalysis";
import SourcesComparison from "./SourcesComparison";
import GeneralValutation from "./GeneralValutation";
import {Box} from "@mui/material";

export default function LinkResults() {
        const link = useSearchParams()[0].get("link");
    return (
        <Box>{link}
                componente che mostra i risultati della ricerca fatta dall'utente, nel caso inserisca direttamente
            il link della notizia, quindi l'app analizza nello specifico la notizia
            Struttura:

            <ArticleOverview />
            <LanguageAnalysis />
            <SourcesComparison />
            <GeneralValutation />
            possibilità di salvare l'analisi per poterla aggiungere alla cronologia degli articoli analizzati
                (articles) e di salvarla in una lista personalizzata o nei preferiti
        </Box>
    )
}