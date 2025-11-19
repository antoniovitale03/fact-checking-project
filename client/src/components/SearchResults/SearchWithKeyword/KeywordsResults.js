import {useSearchParams} from "react-router-dom";
import {Box, Button} from "@mui/material";
import TopicOverview from "./TopicOverview";
import SourcesComparison from "./SourcesComparison";
import ArticlesList from "./ArticlesList";
import LanguageAnalysis from "./LanguageAnalysis";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import {useDocumentTitle} from "../../../hooks/useDocumentTitle";
import {useEffect} from "react";
import api from "../../../api";

export default function KeywordsResults() {
    const keywords = useSearchParams()[0].get("keywords"); //usato per le query, useParams vale per i parametri tipo /:id
    useDocumentTitle(`Risultati per '${keywords}'`);


    const exportPDF = () => {
        //const element = document.getElementById("analysis-content"); // ID del contenuto da esportare
        //             const canvas = await html2canvas(element, { scale: 2 });
        //             const imgData = canvas.toDataURL("image/png");
        //             const pdf = new jsPDF("p", "mm", "a4");
        //
        //             // Adatta l'immagine alla pagina PDF
        //             const imgProps = pdf.getImageProperties(imgData);
        //             const pdfWidth = pdf.internal.pageSize.getWidth();
        //             const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        //
        //             pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        //             pdf.save("analisi_factlens.pdf");
    }

    useEffect(() =>{
        api.post(`${process.env.REACT_APP_SERVER}/api/analyze/topic`)
            .then(res => console.log(res)).catch(err => console.log(err));
        }
    )

    return(
        <Box>
            {keywords}
            Se l'utente inserisce una parola chiave, il backend recupera articoli da varie fonti
            (nazionali e internazionali) e ne analizza ognuno (tono emotivo, polarizzazione, parole chiave usate, ecc.)
            e genera un resoconto e una comparazione tra le varie fonti.
            Struttura:
            <TopicOverview keywords={keywords} />
            <SourcesComparison />
            <LanguageAnalysis />
            <ArticlesList />
            possibilità di salvare l'analisi alla cronologia delle ricerche tematiche fatte (per parole chiave)
            e di salvarla in una lista personalizzata o nei preferiti o di esportarla tramite PDF
            <Button onClick={exportPDF} variant="contained">Esposta in PDF</Button>
        </Box>
    )
}