import {useSearchParams} from "react-router-dom";
import {Box} from "@mui/material";
import TopicOverview from "./TopicOverview";
import SourcesComparison from "./SourcesComparison";
import LanguageAnalysis from "./LanguageAnalysis";
import GeneralValutation from "./GeneralValutation"
import {useDocumentTitle} from "../../../hooks/useDocumentTitle";
import {useEffect} from "react";
import api from "../../../api";
import HandleAnalysis from "../../HandleAnalysis";

export default function KeywordsResults() {
    const keywords = useSearchParams()[0].get("keywords"); //usato per le query, useParams vale per i parametri tipo /:id
    useDocumentTitle(`Risultati per '${keywords}'`);

    useEffect(() =>{
        api.post(`${process.env.REACT_APP_SERVER}/api/analyze/topic`)
            .then(res => console.log(res)).catch(err => console.log(err));
        }
    )

    return(
        <Box>
            <p>L'obiettivo dell'analisi è capire come i media parlano di quel tema, Come cambia il sentiment nel tempo,
                Come differiscono le testate, Quanto è polarizzante il discorso pubblico
                Quali bias ricorrono più spesso</p>
            {keywords}
            <HandleAnalysis />
            <TopicOverview keywords={keywords} />
            <SourcesComparison />
            <LanguageAnalysis />
            <GeneralValutation />
            possibilità di salvare l'analisi alla cronologia delle ricerche tematiche fatte (per parole chiave)
            e di salvarla in una lista personalizzata o nei preferiti o di esportarla tramite PDF

        </Box>
    )
}