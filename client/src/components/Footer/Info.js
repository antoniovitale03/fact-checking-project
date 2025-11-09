import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import {useDocumentTitle} from "../../hooks/useDocumentTitle";

export default function Info(){
    useDocumentTitle("Info");
    return(
        <p>qui mostriamo alcune informazioni sui temi di cui tratta il progetto.
        Ad esempio: cos'è la polarizzazione? cos'è un bias? cos'è la pornografia dell'oltraggio?
            come interpretare correttamente una notizia, “Perché due testate possono usare linguaggi diversi?”
            La polarizzazione è sempre negativa?
            Cosa significa se un articolo ha un alto grado di polarizzazione?
            Quindi una sorta di Q&A
        Supporto l'utente nell'imparare a riconoscere una notizia polarizzata da una neutrale
        L'utente può cercare le diverse card con domanda-risposta attraverso delle parole chiave, tipo cercando "polarizzazione" esce:
            cos'è la polarizzazione? e La polarizzazione è sempre negativa?
            “Come distinguere fatti da opinioni?”
            “Come verificare l’affidabilità di una fonte?”
            “Cos’è un algoritmo di raccomandazione?”
            “Come i social network amplificano la polarizzazione?”
            “Perché è importante il dubbio nel giornalismo?”
            <Accordion>
                <AccordionSummary>Domanda</AccordionSummary>
                <AccordionDetails>Risposta</AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>Domanda</AccordionSummary>
                <AccordionDetails>Risposta</AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary>Domanda</AccordionSummary>
                <AccordionDetails>Risposta</AccordionDetails>
            </Accordion>
        </p>
    )
}